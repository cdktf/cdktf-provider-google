# `dataprocGdcSparkApplication` Submodule <a name="`dataprocGdcSparkApplication` Submodule" id="@cdktf/provider-google.dataprocGdcSparkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocGdcSparkApplication <a name="DataprocGdcSparkApplication" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application google_dataproc_gdc_spark_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplication;

DataprocGdcSparkApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .serviceinstance(java.lang.String)
    .sparkApplicationId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .applicationEnvironment(java.lang.String)
//  .dependencyImages(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .project(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .pysparkApplicationConfig(DataprocGdcSparkApplicationPysparkApplicationConfig)
//  .sparkApplicationConfig(DataprocGdcSparkApplicationSparkApplicationConfig)
//  .sparkRApplicationConfig(DataprocGdcSparkApplicationSparkRApplicationConfig)
//  .sparkSqlApplicationConfig(DataprocGdcSparkApplicationSparkSqlApplicationConfig)
//  .timeouts(DataprocGdcSparkApplicationTimeouts)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the spark application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.serviceinstance">serviceinstance</a></code> | <code>java.lang.String</code> | The id of the service instance to which this spark application belongs. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkApplicationId">sparkApplicationId</a></code> | <code>java.lang.String</code> | The id of the application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The annotations to associate with this application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.applicationEnvironment">applicationEnvironment</a></code> | <code>java.lang.String</code> | An ApplicationEnvironment from which to inherit configuration properties. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.dependencyImages">dependencyImages</a></code> | <code>java.util.List<java.lang.String></code> | List of container image uris for additional file dependencies. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#id DataprocGdcSparkApplication#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this application. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#project DataprocGdcSparkApplication#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | application-specific properties. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.pysparkApplicationConfig">pysparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | pyspark_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkApplicationConfig">sparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a></code> | spark_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkRApplicationConfig">sparkRApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | spark_r_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkSqlApplicationConfig">sparkSqlApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | spark_sql_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The Dataproc version of this application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the spark application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#location DataprocGdcSparkApplication#location}

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.serviceinstance"></a>

- *Type:* java.lang.String

The id of the service instance to which this spark application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#serviceinstance DataprocGdcSparkApplication#serviceinstance}

---

##### `sparkApplicationId`<sup>Required</sup> <a name="sparkApplicationId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkApplicationId"></a>

- *Type:* java.lang.String

The id of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#spark_application_id DataprocGdcSparkApplication#spark_application_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The annotations to associate with this application.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#annotations DataprocGdcSparkApplication#annotations}

---

##### `applicationEnvironment`<sup>Optional</sup> <a name="applicationEnvironment" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.applicationEnvironment"></a>

- *Type:* java.lang.String

An ApplicationEnvironment from which to inherit configuration properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#application_environment DataprocGdcSparkApplication#application_environment}

---

##### `dependencyImages`<sup>Optional</sup> <a name="dependencyImages" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.dependencyImages"></a>

- *Type:* java.util.List<java.lang.String>

List of container image uris for additional file dependencies.

Dependent files are sequentially copied from each image. If a file with the same name exists in 2 images then the file from later image is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#dependency_images DataprocGdcSparkApplication#dependency_images}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#display_name DataprocGdcSparkApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#id DataprocGdcSparkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this application. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#labels DataprocGdcSparkApplication#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#namespace DataprocGdcSparkApplication#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#project DataprocGdcSparkApplication#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.properties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

application-specific properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#properties DataprocGdcSparkApplication#properties}

---

##### `pysparkApplicationConfig`<sup>Optional</sup> <a name="pysparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.pysparkApplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

pyspark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#pyspark_application_config DataprocGdcSparkApplication#pyspark_application_config}

---

##### `sparkApplicationConfig`<sup>Optional</sup> <a name="sparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkApplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

spark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#spark_application_config DataprocGdcSparkApplication#spark_application_config}

---

##### `sparkRApplicationConfig`<sup>Optional</sup> <a name="sparkRApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkRApplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

spark_r_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#spark_r_application_config DataprocGdcSparkApplication#spark_r_application_config}

---

##### `sparkSqlApplicationConfig`<sup>Optional</sup> <a name="sparkSqlApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkSqlApplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

spark_sql_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#spark_sql_application_config DataprocGdcSparkApplication#spark_sql_application_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#timeouts DataprocGdcSparkApplication#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The Dataproc version of this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#version DataprocGdcSparkApplication#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig">putPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig">putSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkRApplicationConfig">putSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkSqlApplicationConfig">putSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetApplicationEnvironment">resetApplicationEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetDependencyImages">resetDependencyImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetPysparkApplicationConfig">resetPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkApplicationConfig">resetSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkRApplicationConfig">resetSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkSqlApplicationConfig">resetSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPysparkApplicationConfig` <a name="putPysparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig"></a>

```java
public void putPysparkApplicationConfig(DataprocGdcSparkApplicationPysparkApplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

---

##### `putSparkApplicationConfig` <a name="putSparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig"></a>

```java
public void putSparkApplicationConfig(DataprocGdcSparkApplicationSparkApplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

---

##### `putSparkRApplicationConfig` <a name="putSparkRApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkRApplicationConfig"></a>

```java
public void putSparkRApplicationConfig(DataprocGdcSparkApplicationSparkRApplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkRApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

---

##### `putSparkSqlApplicationConfig` <a name="putSparkSqlApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkSqlApplicationConfig"></a>

```java
public void putSparkSqlApplicationConfig(DataprocGdcSparkApplicationSparkSqlApplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkSqlApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putTimeouts"></a>

```java
public void putTimeouts(DataprocGdcSparkApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetApplicationEnvironment` <a name="resetApplicationEnvironment" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetApplicationEnvironment"></a>

```java
public void resetApplicationEnvironment()
```

##### `resetDependencyImages` <a name="resetDependencyImages" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetDependencyImages"></a>

```java
public void resetDependencyImages()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetProject"></a>

```java
public void resetProject()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetPysparkApplicationConfig` <a name="resetPysparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetPysparkApplicationConfig"></a>

```java
public void resetPysparkApplicationConfig()
```

##### `resetSparkApplicationConfig` <a name="resetSparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkApplicationConfig"></a>

```java
public void resetSparkApplicationConfig()
```

##### `resetSparkRApplicationConfig` <a name="resetSparkRApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkRApplicationConfig"></a>

```java
public void resetSparkRApplicationConfig()
```

##### `resetSparkSqlApplicationConfig` <a name="resetSparkSqlApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkSqlApplicationConfig"></a>

```java
public void resetSparkSqlApplicationConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocGdcSparkApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplication;

DataprocGdcSparkApplication.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplication;

DataprocGdcSparkApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplication;

DataprocGdcSparkApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplication;

DataprocGdcSparkApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataprocGdcSparkApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataprocGdcSparkApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataprocGdcSparkApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataprocGdcSparkApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataprocGdcSparkApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.monitoringEndpoint">monitoringEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.outputUri">outputUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.pysparkApplicationConfig">pysparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference">DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationConfig">sparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkRApplicationConfig">sparkRApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkSqlApplicationConfig">sparkSqlApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference">DataprocGdcSparkApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.applicationEnvironmentInput">applicationEnvironmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependencyImagesInput">dependencyImagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.pysparkApplicationConfigInput">pysparkApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.serviceinstanceInput">serviceinstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationConfigInput">sparkApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationIdInput">sparkApplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkRApplicationConfigInput">sparkRApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkSqlApplicationConfigInput">sparkSqlApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.applicationEnvironment">applicationEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependencyImages">dependencyImages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.serviceinstance">serviceinstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationId">sparkApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `monitoringEndpoint`<sup>Required</sup> <a name="monitoringEndpoint" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.monitoringEndpoint"></a>

```java
public java.lang.String getMonitoringEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputUri`<sup>Required</sup> <a name="outputUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.outputUri"></a>

```java
public java.lang.String getOutputUri();
```

- *Type:* java.lang.String

---

##### `pysparkApplicationConfig`<sup>Required</sup> <a name="pysparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.pysparkApplicationConfig"></a>

```java
public DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference getPysparkApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference">DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sparkApplicationConfig`<sup>Required</sup> <a name="sparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationConfig"></a>

```java
public DataprocGdcSparkApplicationSparkApplicationConfigOutputReference getSparkApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkApplicationConfigOutputReference</a>

---

##### `sparkRApplicationConfig`<sup>Required</sup> <a name="sparkRApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkRApplicationConfig"></a>

```java
public DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference getSparkRApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference</a>

---

##### `sparkSqlApplicationConfig`<sup>Required</sup> <a name="sparkSqlApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkSqlApplicationConfig"></a>

```java
public DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference getSparkSqlApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.timeouts"></a>

```java
public DataprocGdcSparkApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference">DataprocGdcSparkApplicationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `applicationEnvironmentInput`<sup>Optional</sup> <a name="applicationEnvironmentInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.applicationEnvironmentInput"></a>

```java
public java.lang.String getApplicationEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `dependencyImagesInput`<sup>Optional</sup> <a name="dependencyImagesInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependencyImagesInput"></a>

```java
public java.util.List<java.lang.String> getDependencyImagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pysparkApplicationConfigInput`<sup>Optional</sup> <a name="pysparkApplicationConfigInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.pysparkApplicationConfigInput"></a>

```java
public DataprocGdcSparkApplicationPysparkApplicationConfig getPysparkApplicationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

---

##### `serviceinstanceInput`<sup>Optional</sup> <a name="serviceinstanceInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.serviceinstanceInput"></a>

```java
public java.lang.String getServiceinstanceInput();
```

- *Type:* java.lang.String

---

##### `sparkApplicationConfigInput`<sup>Optional</sup> <a name="sparkApplicationConfigInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationConfigInput"></a>

```java
public DataprocGdcSparkApplicationSparkApplicationConfig getSparkApplicationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

---

##### `sparkApplicationIdInput`<sup>Optional</sup> <a name="sparkApplicationIdInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationIdInput"></a>

```java
public java.lang.String getSparkApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `sparkRApplicationConfigInput`<sup>Optional</sup> <a name="sparkRApplicationConfigInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkRApplicationConfigInput"></a>

```java
public DataprocGdcSparkApplicationSparkRApplicationConfig getSparkRApplicationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

---

##### `sparkSqlApplicationConfigInput`<sup>Optional</sup> <a name="sparkSqlApplicationConfigInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkSqlApplicationConfigInput"></a>

```java
public DataprocGdcSparkApplicationSparkSqlApplicationConfig getSparkSqlApplicationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `applicationEnvironment`<sup>Required</sup> <a name="applicationEnvironment" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.applicationEnvironment"></a>

```java
public java.lang.String getApplicationEnvironment();
```

- *Type:* java.lang.String

---

##### `dependencyImages`<sup>Required</sup> <a name="dependencyImages" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependencyImages"></a>

```java
public java.util.List<java.lang.String> getDependencyImages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.serviceinstance"></a>

```java
public java.lang.String getServiceinstance();
```

- *Type:* java.lang.String

---

##### `sparkApplicationId`<sup>Required</sup> <a name="sparkApplicationId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationId"></a>

```java
public java.lang.String getSparkApplicationId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocGdcSparkApplicationConfig <a name="DataprocGdcSparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationConfig;

DataprocGdcSparkApplicationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .serviceinstance(java.lang.String)
    .sparkApplicationId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .applicationEnvironment(java.lang.String)
//  .dependencyImages(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .project(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .pysparkApplicationConfig(DataprocGdcSparkApplicationPysparkApplicationConfig)
//  .sparkApplicationConfig(DataprocGdcSparkApplicationSparkApplicationConfig)
//  .sparkRApplicationConfig(DataprocGdcSparkApplicationSparkRApplicationConfig)
//  .sparkSqlApplicationConfig(DataprocGdcSparkApplicationSparkSqlApplicationConfig)
//  .timeouts(DataprocGdcSparkApplicationTimeouts)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the spark application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.serviceinstance">serviceinstance</a></code> | <code>java.lang.String</code> | The id of the service instance to which this spark application belongs. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkApplicationId">sparkApplicationId</a></code> | <code>java.lang.String</code> | The id of the application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The annotations to associate with this application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.applicationEnvironment">applicationEnvironment</a></code> | <code>java.lang.String</code> | An ApplicationEnvironment from which to inherit configuration properties. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.dependencyImages">dependencyImages</a></code> | <code>java.util.List<java.lang.String></code> | List of container image uris for additional file dependencies. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#id DataprocGdcSparkApplication#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this application. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#project DataprocGdcSparkApplication#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | application-specific properties. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.pysparkApplicationConfig">pysparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | pyspark_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkApplicationConfig">sparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a></code> | spark_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkRApplicationConfig">sparkRApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | spark_r_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkSqlApplicationConfig">sparkSqlApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | spark_sql_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.version">version</a></code> | <code>java.lang.String</code> | The Dataproc version of this application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the spark application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#location DataprocGdcSparkApplication#location}

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.serviceinstance"></a>

```java
public java.lang.String getServiceinstance();
```

- *Type:* java.lang.String

The id of the service instance to which this spark application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#serviceinstance DataprocGdcSparkApplication#serviceinstance}

---

##### `sparkApplicationId`<sup>Required</sup> <a name="sparkApplicationId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkApplicationId"></a>

```java
public java.lang.String getSparkApplicationId();
```

- *Type:* java.lang.String

The id of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#spark_application_id DataprocGdcSparkApplication#spark_application_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The annotations to associate with this application.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#annotations DataprocGdcSparkApplication#annotations}

---

##### `applicationEnvironment`<sup>Optional</sup> <a name="applicationEnvironment" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.applicationEnvironment"></a>

```java
public java.lang.String getApplicationEnvironment();
```

- *Type:* java.lang.String

An ApplicationEnvironment from which to inherit configuration properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#application_environment DataprocGdcSparkApplication#application_environment}

---

##### `dependencyImages`<sup>Optional</sup> <a name="dependencyImages" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.dependencyImages"></a>

```java
public java.util.List<java.lang.String> getDependencyImages();
```

- *Type:* java.util.List<java.lang.String>

List of container image uris for additional file dependencies.

Dependent files are sequentially copied from each image. If a file with the same name exists in 2 images then the file from later image is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#dependency_images DataprocGdcSparkApplication#dependency_images}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#display_name DataprocGdcSparkApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#id DataprocGdcSparkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this application. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#labels DataprocGdcSparkApplication#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#namespace DataprocGdcSparkApplication#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#project DataprocGdcSparkApplication#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

application-specific properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#properties DataprocGdcSparkApplication#properties}

---

##### `pysparkApplicationConfig`<sup>Optional</sup> <a name="pysparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.pysparkApplicationConfig"></a>

```java
public DataprocGdcSparkApplicationPysparkApplicationConfig getPysparkApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

pyspark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#pyspark_application_config DataprocGdcSparkApplication#pyspark_application_config}

---

##### `sparkApplicationConfig`<sup>Optional</sup> <a name="sparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkApplicationConfig"></a>

```java
public DataprocGdcSparkApplicationSparkApplicationConfig getSparkApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

spark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#spark_application_config DataprocGdcSparkApplication#spark_application_config}

---

##### `sparkRApplicationConfig`<sup>Optional</sup> <a name="sparkRApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkRApplicationConfig"></a>

```java
public DataprocGdcSparkApplicationSparkRApplicationConfig getSparkRApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

spark_r_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#spark_r_application_config DataprocGdcSparkApplication#spark_r_application_config}

---

##### `sparkSqlApplicationConfig`<sup>Optional</sup> <a name="sparkSqlApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkSqlApplicationConfig"></a>

```java
public DataprocGdcSparkApplicationSparkSqlApplicationConfig getSparkSqlApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

spark_sql_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#spark_sql_application_config DataprocGdcSparkApplication#spark_sql_application_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.timeouts"></a>

```java
public DataprocGdcSparkApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#timeouts DataprocGdcSparkApplication#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Dataproc version of this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#version DataprocGdcSparkApplication#version}

---

### DataprocGdcSparkApplicationPysparkApplicationConfig <a name="DataprocGdcSparkApplicationPysparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationPysparkApplicationConfig;

DataprocGdcSparkApplicationPysparkApplicationConfig.builder()
    .mainPythonFileUri(java.lang.String)
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .pythonFileUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.mainPythonFileUri">mainPythonFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the main Python file to use as the driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.pythonFileUris">pythonFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. |

---

##### `mainPythonFileUri`<sup>Required</sup> <a name="mainPythonFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.mainPythonFileUri"></a>

```java
public java.lang.String getMainPythonFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#main_python_file_uri DataprocGdcSparkApplication#main_python_file_uri}

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}

---

##### `pythonFileUris`<sup>Optional</sup> <a name="pythonFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.pythonFileUris"></a>

```java
public java.util.List<java.lang.String> getPythonFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#python_file_uris DataprocGdcSparkApplication#python_file_uris}

---

### DataprocGdcSparkApplicationSparkApplicationConfig <a name="DataprocGdcSparkApplicationSparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationSparkApplicationConfig;

DataprocGdcSparkApplicationSparkApplicationConfig.builder()
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .mainClass(java.lang.String)
//  .mainJarFileUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | The name of the driver main class. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the jar file that contains the main class. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: '.jar', '.tar', '.tar.gz', '.tgz', and '.zip'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Do not include arguments that can be set as application properties, such as '--conf', since a collision can occur that causes an incorrect application submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

The name of the driver main class.

The jar file that contains the class must be in the classpath or specified in 'jar_file_uris'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#main_class DataprocGdcSparkApplication#main_class}

---

##### `mainJarFileUri`<sup>Optional</sup> <a name="mainJarFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#main_jar_file_uri DataprocGdcSparkApplication#main_jar_file_uri}

---

### DataprocGdcSparkApplicationSparkRApplicationConfig <a name="DataprocGdcSparkApplicationSparkRApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationSparkRApplicationConfig;

DataprocGdcSparkApplicationSparkRApplicationConfig.builder()
    .mainRFileUri(java.lang.String)
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.mainRFileUri">mainRFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the main R file to use as the driver. Must be a .R file. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. |

---

##### `mainRFileUri`<sup>Required</sup> <a name="mainRFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.mainRFileUri"></a>

```java
public java.lang.String getMainRFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the main R file to use as the driver. Must be a .R file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#main_r_file_uri DataprocGdcSparkApplication#main_r_file_uri}

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}

---

### DataprocGdcSparkApplicationSparkSqlApplicationConfig <a name="DataprocGdcSparkApplicationSparkSqlApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationSparkSqlApplicationConfig;

DataprocGdcSparkApplicationSparkSqlApplicationConfig.builder()
//  .jarFileUris(java.util.List<java.lang.String>)
//  .queryFileUri(java.lang.String)
//  .queryList(DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct)
//  .scriptVariables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the script that contains SQL queries. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryList">queryList</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | query_list block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET 'name="value";'). |

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}

---

##### `queryFileUri`<sup>Optional</sup> <a name="queryFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the script that contains SQL queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#query_file_uri DataprocGdcSparkApplication#query_file_uri}

---

##### `queryList`<sup>Optional</sup> <a name="queryList" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryList"></a>

```java
public DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct getQueryList();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

query_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#query_list DataprocGdcSparkApplication#query_list}

---

##### `scriptVariables`<sup>Optional</sup> <a name="scriptVariables" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of query variable names to values (equivalent to the Spark SQL command: SET 'name="value";').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#script_variables DataprocGdcSparkApplication#script_variables}

---

### DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct <a name="DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct;

DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.builder()
    .queries(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.property.queries">queries</a></code> | <code>java.util.List<java.lang.String></code> | The queries to run. |

---

##### `queries`<sup>Required</sup> <a name="queries" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.property.queries"></a>

```java
public java.util.List<java.lang.String> getQueries();
```

- *Type:* java.util.List<java.lang.String>

The queries to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#queries DataprocGdcSparkApplication#queries}

---

### DataprocGdcSparkApplicationTimeouts <a name="DataprocGdcSparkApplicationTimeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationTimeouts;

DataprocGdcSparkApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#create DataprocGdcSparkApplication#create}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#delete DataprocGdcSparkApplication#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#update DataprocGdcSparkApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#create DataprocGdcSparkApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#delete DataprocGdcSparkApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/dataproc_gdc_spark_application#update DataprocGdcSparkApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference <a name="DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference;

new DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetPythonFileUris">resetPythonFileUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetPythonFileUris` <a name="resetPythonFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetPythonFileUris"></a>

```java
public void resetPythonFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUriInput">mainPythonFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUrisInput">pythonFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUri">mainPythonFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUris">pythonFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainPythonFileUriInput`<sup>Optional</sup> <a name="mainPythonFileUriInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUriInput"></a>

```java
public java.lang.String getMainPythonFileUriInput();
```

- *Type:* java.lang.String

---

##### `pythonFileUrisInput`<sup>Optional</sup> <a name="pythonFileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getPythonFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainPythonFileUri`<sup>Required</sup> <a name="mainPythonFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUri"></a>

```java
public java.lang.String getMainPythonFileUri();
```

- *Type:* java.lang.String

---

##### `pythonFileUris`<sup>Required</sup> <a name="pythonFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUris"></a>

```java
public java.util.List<java.lang.String> getPythonFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.internalValue"></a>

```java
public DataprocGdcSparkApplicationPysparkApplicationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

---


### DataprocGdcSparkApplicationSparkApplicationConfigOutputReference <a name="DataprocGdcSparkApplicationSparkApplicationConfigOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference;

new DataprocGdcSparkApplicationSparkApplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainJarFileUri">resetMainJarFileUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainClass"></a>

```java
public void resetMainClass()
```

##### `resetMainJarFileUri` <a name="resetMainJarFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainJarFileUri"></a>

```java
public void resetMainJarFileUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUriInput">mainJarFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClassInput"></a>

```java
public java.lang.String getMainClassInput();
```

- *Type:* java.lang.String

---

##### `mainJarFileUriInput`<sup>Optional</sup> <a name="mainJarFileUriInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUriInput"></a>

```java
public java.lang.String getMainJarFileUriInput();
```

- *Type:* java.lang.String

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

---

##### `mainJarFileUri`<sup>Required</sup> <a name="mainJarFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.internalValue"></a>

```java
public DataprocGdcSparkApplicationSparkApplicationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

---


### DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference <a name="DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference;

new DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUriInput">mainRFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUri">mainRFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainRFileUriInput`<sup>Optional</sup> <a name="mainRFileUriInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUriInput"></a>

```java
public java.lang.String getMainRFileUriInput();
```

- *Type:* java.lang.String

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainRFileUri`<sup>Required</sup> <a name="mainRFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUri"></a>

```java
public java.lang.String getMainRFileUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.internalValue"></a>

```java
public DataprocGdcSparkApplicationSparkRApplicationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

---


### DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference <a name="DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference;

new DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList">putQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryFileUri">resetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryList">resetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetScriptVariables">resetScriptVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueryList` <a name="putQueryList" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList"></a>

```java
public void putQueryList(DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetQueryFileUri` <a name="resetQueryFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryFileUri"></a>

```java
public void resetQueryFileUri()
```

##### `resetQueryList` <a name="resetQueryList" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryList"></a>

```java
public void resetQueryList()
```

##### `resetScriptVariables` <a name="resetScriptVariables" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetScriptVariables"></a>

```java
public void resetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryList">queryList</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUriInput">queryFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryListInput">queryListInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariablesInput">scriptVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryList`<sup>Required</sup> <a name="queryList" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryList"></a>

```java
public DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference getQueryList();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference</a>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryFileUriInput`<sup>Optional</sup> <a name="queryFileUriInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUriInput"></a>

```java
public java.lang.String getQueryFileUriInput();
```

- *Type:* java.lang.String

---

##### `queryListInput`<sup>Optional</sup> <a name="queryListInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryListInput"></a>

```java
public DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct getQueryListInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---

##### `scriptVariablesInput`<sup>Optional</sup> <a name="scriptVariablesInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryFileUri`<sup>Required</sup> <a name="queryFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

---

##### `scriptVariables`<sup>Required</sup> <a name="scriptVariables" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.internalValue"></a>

```java
public DataprocGdcSparkApplicationSparkSqlApplicationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---


### DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference <a name="DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference;

new DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queriesInput">queriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queries">queries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queriesInput`<sup>Optional</sup> <a name="queriesInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queriesInput"></a>

```java
public java.util.List<java.lang.String> getQueriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queries`<sup>Required</sup> <a name="queries" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queries"></a>

```java
public java.util.List<java.lang.String> getQueries();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.internalValue"></a>

```java
public DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---


### DataprocGdcSparkApplicationTimeoutsOutputReference <a name="DataprocGdcSparkApplicationTimeoutsOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_spark_application.DataprocGdcSparkApplicationTimeoutsOutputReference;

new DataprocGdcSparkApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>

---



