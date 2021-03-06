package maven2sbt.core

import hedgehog._
import hedgehog.runner._

/**
  * @author Kevin Lee
  * @since 2019-04-22
  */
object ExclusionSpec extends Properties {
  override def tests: List[Test] = List(
    property("test renderExclusionRule with 1 exclusion", testRenderExclusionRule)
  , example("test renderExclusions with no exclusion", testRenderExclusions0)
  , property("test renderExclusions with 1 exclusion", testRenderExclusions1)
  , property("test renderExclusions with two exclusions", testRenderExclusionsTwo)
  , property("test renderExclusions with more than two exclusions", testRenderExclusionsMoreThanTwo)
  )

  def testRenderExclusionRule: Property = for {
    exclusion <- Gens.genExclusion.log("exclusion")
  } yield {
    val expected = s"""ExclusionRule(organization = "${exclusion.groupId.groupId}", artifact = "${exclusion.artifactId.artifactId}")"""
    val actual = Exclusion.renderExclusionRule(exclusion)
    actual ==== expected
  }

  def testRenderExclusions0: Result = {
    val expected = ""
    val actual = Exclusion.renderExclusions(List.empty)
    actual ==== expected
  }

  def testRenderExclusions1: Property = for {
    exclusion <- Gens.genExclusion.log("exclusion")
  } yield {
    val expected = s""" exclude("${exclusion.groupId.groupId}", "${exclusion.artifactId.artifactId}")"""
    val actual = Exclusion.renderExclusions(List(exclusion))
    actual ==== expected
  }

  def testRenderExclusionsTwo: Property = for {
    exclusions <- Gens.genExclusion.list(Range.linear(2, 2)).log("exclusions")
  } yield {
    val indent = " " * 8
    val expected =
      s""" excludeAll(
         |$indent  ${exclusions.map(Exclusion.renderExclusionRule).mkString(s",\n$indent  ")}
         |$indent)""".stripMargin
    val actual = Exclusion.renderExclusions(exclusions)
    actual ==== expected
  }

    def testRenderExclusionsMoreThanTwo: Property = for {
    exclusions <- Gens.genExclusion.list(Range.linear(3, 10)).log("exclusions")
  } yield {
    val indent = " " * 8
    val expected =
      s""" excludeAll(
         |$indent  ${exclusions.map(Exclusion.renderExclusionRule).mkString(s",\n$indent  ")}
         |$indent)""".stripMargin
    val actual = Exclusion.renderExclusions(exclusions)
    actual ==== expected
  }

}
