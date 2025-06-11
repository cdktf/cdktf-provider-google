# `dataprocGdcSparkApplication` Submodule <a name="`dataprocGdcSparkApplication` Submodule" id="@cdktf/provider-google.dataprocGdcSparkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocGdcSparkApplication <a name="DataprocGdcSparkApplication" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application google_dataproc_gdc_spark_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  serviceinstance: str,
  spark_application_id: str,
  annotations: typing.Mapping[str] = None,
  application_environment: str = None,
  dependency_images: typing.List[str] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  namespace: str = None,
  project: str = None,
  properties: typing.Mapping[str] = None,
  pyspark_application_config: DataprocGdcSparkApplicationPysparkApplicationConfig = None,
  spark_application_config: DataprocGdcSparkApplicationSparkApplicationConfig = None,
  spark_r_application_config: DataprocGdcSparkApplicationSparkRApplicationConfig = None,
  spark_sql_application_config: DataprocGdcSparkApplicationSparkSqlApplicationConfig = None,
  timeouts: DataprocGdcSparkApplicationTimeouts = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the spark application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.serviceinstance">serviceinstance</a></code> | <code>str</code> | The id of the service instance to which this spark application belongs. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkApplicationId">spark_application_id</a></code> | <code>str</code> | The id of the application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | The annotations to associate with this application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.applicationEnvironment">application_environment</a></code> | <code>str</code> | An ApplicationEnvironment from which to inherit configuration properties. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.dependencyImages">dependency_images</a></code> | <code>typing.List[str]</code> | List of container image uris for additional file dependencies. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#id DataprocGdcSparkApplication#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this application. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#project DataprocGdcSparkApplication#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.properties">properties</a></code> | <code>typing.Mapping[str]</code> | application-specific properties. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.pysparkApplicationConfig">pyspark_application_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | pyspark_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkApplicationConfig">spark_application_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a></code> | spark_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkRApplicationConfig">spark_r_application_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | spark_r_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkSqlApplicationConfig">spark_sql_application_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | spark_sql_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.version">version</a></code> | <code>str</code> | The Dataproc version of this application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.location"></a>

- *Type:* str

The location of the spark application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#location DataprocGdcSparkApplication#location}

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.serviceinstance"></a>

- *Type:* str

The id of the service instance to which this spark application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#serviceinstance DataprocGdcSparkApplication#serviceinstance}

---

##### `spark_application_id`<sup>Required</sup> <a name="spark_application_id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkApplicationId"></a>

- *Type:* str

The id of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#spark_application_id DataprocGdcSparkApplication#spark_application_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

The annotations to associate with this application.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#annotations DataprocGdcSparkApplication#annotations}

---

##### `application_environment`<sup>Optional</sup> <a name="application_environment" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.applicationEnvironment"></a>

- *Type:* str

An ApplicationEnvironment from which to inherit configuration properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#application_environment DataprocGdcSparkApplication#application_environment}

---

##### `dependency_images`<sup>Optional</sup> <a name="dependency_images" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.dependencyImages"></a>

- *Type:* typing.List[str]

List of container image uris for additional file dependencies.

Dependent files are sequentially copied from each image. If a file with the same name exists in 2 images then the file from later image is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#dependency_images DataprocGdcSparkApplication#dependency_images}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.displayName"></a>

- *Type:* str

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#display_name DataprocGdcSparkApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#id DataprocGdcSparkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels to associate with this application. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#labels DataprocGdcSparkApplication#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.namespace"></a>

- *Type:* str

The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#namespace DataprocGdcSparkApplication#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#project DataprocGdcSparkApplication#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.properties"></a>

- *Type:* typing.Mapping[str]

application-specific properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#properties DataprocGdcSparkApplication#properties}

---

##### `pyspark_application_config`<sup>Optional</sup> <a name="pyspark_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.pysparkApplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

pyspark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#pyspark_application_config DataprocGdcSparkApplication#pyspark_application_config}

---

##### `spark_application_config`<sup>Optional</sup> <a name="spark_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkApplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

spark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#spark_application_config DataprocGdcSparkApplication#spark_application_config}

---

##### `spark_r_application_config`<sup>Optional</sup> <a name="spark_r_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkRApplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

spark_r_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#spark_r_application_config DataprocGdcSparkApplication#spark_r_application_config}

---

##### `spark_sql_application_config`<sup>Optional</sup> <a name="spark_sql_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.sparkSqlApplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

spark_sql_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#spark_sql_application_config DataprocGdcSparkApplication#spark_sql_application_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#timeouts DataprocGdcSparkApplication#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.version"></a>

- *Type:* str

The Dataproc version of this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#version DataprocGdcSparkApplication#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig">put_pyspark_application_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig">put_spark_application_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkRApplicationConfig">put_spark_r_application_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkSqlApplicationConfig">put_spark_sql_application_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetApplicationEnvironment">reset_application_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetDependencyImages">reset_dependency_images</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetPysparkApplicationConfig">reset_pyspark_application_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkApplicationConfig">reset_spark_application_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkRApplicationConfig">reset_spark_r_application_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkSqlApplicationConfig">reset_spark_sql_application_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_pyspark_application_config` <a name="put_pyspark_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig"></a>

```python
def put_pyspark_application_config(
  main_python_file_uri: str,
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  python_file_uris: typing.List[str] = None
) -> None
```

###### `main_python_file_uri`<sup>Required</sup> <a name="main_python_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig.parameter.mainPythonFileUri"></a>

- *Type:* str

The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#main_python_file_uri DataprocGdcSparkApplication#main_python_file_uri}

---

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}

---

###### `python_file_uris`<sup>Optional</sup> <a name="python_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig.parameter.pythonFileUris"></a>

- *Type:* typing.List[str]

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#python_file_uris DataprocGdcSparkApplication#python_file_uris}

---

##### `put_spark_application_config` <a name="put_spark_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig"></a>

```python
def put_spark_application_config(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  main_class: str = None,
  main_jar_file_uri: str = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: '.jar', '.tar', '.tar.gz', '.tgz', and '.zip'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as application properties, such as '--conf', since a collision can occur that causes an incorrect application submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}

---

###### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig.parameter.mainClass"></a>

- *Type:* str

The name of the driver main class.

The jar file that contains the class must be in the classpath or specified in 'jar_file_uris'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#main_class DataprocGdcSparkApplication#main_class}

---

###### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig.parameter.mainJarFileUri"></a>

- *Type:* str

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#main_jar_file_uri DataprocGdcSparkApplication#main_jar_file_uri}

---

##### `put_spark_r_application_config` <a name="put_spark_r_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkRApplicationConfig"></a>

```python
def put_spark_r_application_config(
  main_r_file_uri: str,
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None
) -> None
```

###### `main_r_file_uri`<sup>Required</sup> <a name="main_r_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkRApplicationConfig.parameter.mainRFileUri"></a>

- *Type:* str

The HCFS URI of the main R file to use as the driver. Must be a .R file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#main_r_file_uri DataprocGdcSparkApplication#main_r_file_uri}

---

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkRApplicationConfig.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkRApplicationConfig.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkRApplicationConfig.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}

---

##### `put_spark_sql_application_config` <a name="put_spark_sql_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkSqlApplicationConfig"></a>

```python
def put_spark_sql_application_config(
  jar_file_uris: typing.List[str] = None,
  query_file_uri: str = None,
  query_list: DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct = None,
  script_variables: typing.Mapping[str] = None
) -> None
```

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkSqlApplicationConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}

---

###### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkSqlApplicationConfig.parameter.queryFileUri"></a>

- *Type:* str

The HCFS URI of the script that contains SQL queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#query_file_uri DataprocGdcSparkApplication#query_file_uri}

---

###### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkSqlApplicationConfig.parameter.queryList"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

query_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#query_list DataprocGdcSparkApplication#query_list}

---

###### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkSqlApplicationConfig.parameter.scriptVariables"></a>

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Spark SQL command: SET 'name="value";').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#script_variables DataprocGdcSparkApplication#script_variables}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#create DataprocGdcSparkApplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#delete DataprocGdcSparkApplication#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#update DataprocGdcSparkApplication#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_application_environment` <a name="reset_application_environment" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetApplicationEnvironment"></a>

```python
def reset_application_environment() -> None
```

##### `reset_dependency_images` <a name="reset_dependency_images" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetDependencyImages"></a>

```python
def reset_dependency_images() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_pyspark_application_config` <a name="reset_pyspark_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetPysparkApplicationConfig"></a>

```python
def reset_pyspark_application_config() -> None
```

##### `reset_spark_application_config` <a name="reset_spark_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkApplicationConfig"></a>

```python
def reset_spark_application_config() -> None
```

##### `reset_spark_r_application_config` <a name="reset_spark_r_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkRApplicationConfig"></a>

```python
def reset_spark_r_application_config() -> None
```

##### `reset_spark_sql_application_config` <a name="reset_spark_sql_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkSqlApplicationConfig"></a>

```python
def reset_spark_sql_application_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataprocGdcSparkApplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplication.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataprocGdcSparkApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataprocGdcSparkApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataprocGdcSparkApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataprocGdcSparkApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.monitoringEndpoint">monitoring_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.outputUri">output_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.pysparkApplicationConfig">pyspark_application_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference">DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationConfig">spark_application_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkRApplicationConfig">spark_r_application_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkSqlApplicationConfig">spark_sql_application_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference">DataprocGdcSparkApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.applicationEnvironmentInput">application_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependencyImagesInput">dependency_images_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.pysparkApplicationConfigInput">pyspark_application_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.serviceinstanceInput">serviceinstance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationConfigInput">spark_application_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationIdInput">spark_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkRApplicationConfigInput">spark_r_application_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkSqlApplicationConfigInput">spark_sql_application_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.applicationEnvironment">application_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependencyImages">dependency_images</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.serviceinstance">serviceinstance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationId">spark_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `monitoring_endpoint`<sup>Required</sup> <a name="monitoring_endpoint" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.monitoringEndpoint"></a>

```python
monitoring_endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_uri`<sup>Required</sup> <a name="output_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.outputUri"></a>

```python
output_uri: str
```

- *Type:* str

---

##### `pyspark_application_config`<sup>Required</sup> <a name="pyspark_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.pysparkApplicationConfig"></a>

```python
pyspark_application_config: DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference">DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `spark_application_config`<sup>Required</sup> <a name="spark_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationConfig"></a>

```python
spark_application_config: DataprocGdcSparkApplicationSparkApplicationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkApplicationConfigOutputReference</a>

---

##### `spark_r_application_config`<sup>Required</sup> <a name="spark_r_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkRApplicationConfig"></a>

```python
spark_r_application_config: DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference</a>

---

##### `spark_sql_application_config`<sup>Required</sup> <a name="spark_sql_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkSqlApplicationConfig"></a>

```python
spark_sql_application_config: DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.timeouts"></a>

```python
timeouts: DataprocGdcSparkApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference">DataprocGdcSparkApplicationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application_environment_input`<sup>Optional</sup> <a name="application_environment_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.applicationEnvironmentInput"></a>

```python
application_environment_input: str
```

- *Type:* str

---

##### `dependency_images_input`<sup>Optional</sup> <a name="dependency_images_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependencyImagesInput"></a>

```python
dependency_images_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `pyspark_application_config_input`<sup>Optional</sup> <a name="pyspark_application_config_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.pysparkApplicationConfigInput"></a>

```python
pyspark_application_config_input: DataprocGdcSparkApplicationPysparkApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

---

##### `serviceinstance_input`<sup>Optional</sup> <a name="serviceinstance_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.serviceinstanceInput"></a>

```python
serviceinstance_input: str
```

- *Type:* str

---

##### `spark_application_config_input`<sup>Optional</sup> <a name="spark_application_config_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationConfigInput"></a>

```python
spark_application_config_input: DataprocGdcSparkApplicationSparkApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

---

##### `spark_application_id_input`<sup>Optional</sup> <a name="spark_application_id_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationIdInput"></a>

```python
spark_application_id_input: str
```

- *Type:* str

---

##### `spark_r_application_config_input`<sup>Optional</sup> <a name="spark_r_application_config_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkRApplicationConfigInput"></a>

```python
spark_r_application_config_input: DataprocGdcSparkApplicationSparkRApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

---

##### `spark_sql_application_config_input`<sup>Optional</sup> <a name="spark_sql_application_config_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkSqlApplicationConfigInput"></a>

```python
spark_sql_application_config_input: DataprocGdcSparkApplicationSparkSqlApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataprocGdcSparkApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application_environment`<sup>Required</sup> <a name="application_environment" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.applicationEnvironment"></a>

```python
application_environment: str
```

- *Type:* str

---

##### `dependency_images`<sup>Required</sup> <a name="dependency_images" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependencyImages"></a>

```python
dependency_images: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.serviceinstance"></a>

```python
serviceinstance: str
```

- *Type:* str

---

##### `spark_application_id`<sup>Required</sup> <a name="spark_application_id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationId"></a>

```python
spark_application_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocGdcSparkApplicationConfig <a name="DataprocGdcSparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  serviceinstance: str,
  spark_application_id: str,
  annotations: typing.Mapping[str] = None,
  application_environment: str = None,
  dependency_images: typing.List[str] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  namespace: str = None,
  project: str = None,
  properties: typing.Mapping[str] = None,
  pyspark_application_config: DataprocGdcSparkApplicationPysparkApplicationConfig = None,
  spark_application_config: DataprocGdcSparkApplicationSparkApplicationConfig = None,
  spark_r_application_config: DataprocGdcSparkApplicationSparkRApplicationConfig = None,
  spark_sql_application_config: DataprocGdcSparkApplicationSparkSqlApplicationConfig = None,
  timeouts: DataprocGdcSparkApplicationTimeouts = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.location">location</a></code> | <code>str</code> | The location of the spark application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.serviceinstance">serviceinstance</a></code> | <code>str</code> | The id of the service instance to which this spark application belongs. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkApplicationId">spark_application_id</a></code> | <code>str</code> | The id of the application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | The annotations to associate with this application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.applicationEnvironment">application_environment</a></code> | <code>str</code> | An ApplicationEnvironment from which to inherit configuration properties. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.dependencyImages">dependency_images</a></code> | <code>typing.List[str]</code> | List of container image uris for additional file dependencies. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.displayName">display_name</a></code> | <code>str</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#id DataprocGdcSparkApplication#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this application. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.namespace">namespace</a></code> | <code>str</code> | The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#project DataprocGdcSparkApplication#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | application-specific properties. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.pysparkApplicationConfig">pyspark_application_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | pyspark_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkApplicationConfig">spark_application_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a></code> | spark_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkRApplicationConfig">spark_r_application_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | spark_r_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkSqlApplicationConfig">spark_sql_application_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | spark_sql_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.version">version</a></code> | <code>str</code> | The Dataproc version of this application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the spark application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#location DataprocGdcSparkApplication#location}

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.serviceinstance"></a>

```python
serviceinstance: str
```

- *Type:* str

The id of the service instance to which this spark application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#serviceinstance DataprocGdcSparkApplication#serviceinstance}

---

##### `spark_application_id`<sup>Required</sup> <a name="spark_application_id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkApplicationId"></a>

```python
spark_application_id: str
```

- *Type:* str

The id of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#spark_application_id DataprocGdcSparkApplication#spark_application_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The annotations to associate with this application.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#annotations DataprocGdcSparkApplication#annotations}

---

##### `application_environment`<sup>Optional</sup> <a name="application_environment" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.applicationEnvironment"></a>

```python
application_environment: str
```

- *Type:* str

An ApplicationEnvironment from which to inherit configuration properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#application_environment DataprocGdcSparkApplication#application_environment}

---

##### `dependency_images`<sup>Optional</sup> <a name="dependency_images" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.dependencyImages"></a>

```python
dependency_images: typing.List[str]
```

- *Type:* typing.List[str]

List of container image uris for additional file dependencies.

Dependent files are sequentially copied from each image. If a file with the same name exists in 2 images then the file from later image is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#dependency_images DataprocGdcSparkApplication#dependency_images}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#display_name DataprocGdcSparkApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#id DataprocGdcSparkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels to associate with this application. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#labels DataprocGdcSparkApplication#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#namespace DataprocGdcSparkApplication#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#project DataprocGdcSparkApplication#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

application-specific properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#properties DataprocGdcSparkApplication#properties}

---

##### `pyspark_application_config`<sup>Optional</sup> <a name="pyspark_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.pysparkApplicationConfig"></a>

```python
pyspark_application_config: DataprocGdcSparkApplicationPysparkApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

pyspark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#pyspark_application_config DataprocGdcSparkApplication#pyspark_application_config}

---

##### `spark_application_config`<sup>Optional</sup> <a name="spark_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkApplicationConfig"></a>

```python
spark_application_config: DataprocGdcSparkApplicationSparkApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

spark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#spark_application_config DataprocGdcSparkApplication#spark_application_config}

---

##### `spark_r_application_config`<sup>Optional</sup> <a name="spark_r_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkRApplicationConfig"></a>

```python
spark_r_application_config: DataprocGdcSparkApplicationSparkRApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

spark_r_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#spark_r_application_config DataprocGdcSparkApplication#spark_r_application_config}

---

##### `spark_sql_application_config`<sup>Optional</sup> <a name="spark_sql_application_config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkSqlApplicationConfig"></a>

```python
spark_sql_application_config: DataprocGdcSparkApplicationSparkSqlApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

spark_sql_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#spark_sql_application_config DataprocGdcSparkApplication#spark_sql_application_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.timeouts"></a>

```python
timeouts: DataprocGdcSparkApplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#timeouts DataprocGdcSparkApplication#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The Dataproc version of this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#version DataprocGdcSparkApplication#version}

---

### DataprocGdcSparkApplicationPysparkApplicationConfig <a name="DataprocGdcSparkApplicationPysparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig(
  main_python_file_uri: str,
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  python_file_uris: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.mainPythonFileUri">main_python_file_uri</a></code> | <code>str</code> | The HCFS URI of the main Python file to use as the driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.pythonFileUris">python_file_uris</a></code> | <code>typing.List[str]</code> | HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. |

---

##### `main_python_file_uri`<sup>Required</sup> <a name="main_python_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.mainPythonFileUri"></a>

```python
main_python_file_uri: str
```

- *Type:* str

The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#main_python_file_uri DataprocGdcSparkApplication#main_python_file_uri}

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}

---

##### `python_file_uris`<sup>Optional</sup> <a name="python_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.pythonFileUris"></a>

```python
python_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#python_file_uris DataprocGdcSparkApplication#python_file_uris}

---

### DataprocGdcSparkApplicationSparkApplicationConfig <a name="DataprocGdcSparkApplicationSparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  main_class: str = None,
  main_jar_file_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.mainClass">main_class</a></code> | <code>str</code> | The name of the driver main class. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | The HCFS URI of the jar file that contains the main class. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: '.jar', '.tar', '.tar.gz', '.tgz', and '.zip'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as application properties, such as '--conf', since a collision can occur that causes an incorrect application submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}

---

##### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

The name of the driver main class.

The jar file that contains the class must be in the classpath or specified in 'jar_file_uris'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#main_class DataprocGdcSparkApplication#main_class}

---

##### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#main_jar_file_uri DataprocGdcSparkApplication#main_jar_file_uri}

---

### DataprocGdcSparkApplicationSparkRApplicationConfig <a name="DataprocGdcSparkApplicationSparkRApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig(
  main_r_file_uri: str,
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.mainRFileUri">main_r_file_uri</a></code> | <code>str</code> | The HCFS URI of the main R file to use as the driver. Must be a .R file. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. |

---

##### `main_r_file_uri`<sup>Required</sup> <a name="main_r_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.mainRFileUri"></a>

```python
main_r_file_uri: str
```

- *Type:* str

The HCFS URI of the main R file to use as the driver. Must be a .R file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#main_r_file_uri DataprocGdcSparkApplication#main_r_file_uri}

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}

---

### DataprocGdcSparkApplicationSparkSqlApplicationConfig <a name="DataprocGdcSparkApplicationSparkSqlApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig(
  jar_file_uris: typing.List[str] = None,
  query_file_uri: str = None,
  query_list: DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct = None,
  script_variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | The HCFS URI of the script that contains SQL queries. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryList">query_list</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | query_list block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET 'name="value";'). |

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}

---

##### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

The HCFS URI of the script that contains SQL queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#query_file_uri DataprocGdcSparkApplication#query_file_uri}

---

##### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryList"></a>

```python
query_list: DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

query_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#query_list DataprocGdcSparkApplication#query_list}

---

##### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Spark SQL command: SET 'name="value";').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#script_variables DataprocGdcSparkApplication#script_variables}

---

### DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct <a name="DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct(
  queries: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.property.queries">queries</a></code> | <code>typing.List[str]</code> | The queries to run. |

---

##### `queries`<sup>Required</sup> <a name="queries" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.property.queries"></a>

```python
queries: typing.List[str]
```

- *Type:* typing.List[str]

The queries to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#queries DataprocGdcSparkApplication#queries}

---

### DataprocGdcSparkApplicationTimeouts <a name="DataprocGdcSparkApplicationTimeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#create DataprocGdcSparkApplication#create}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#delete DataprocGdcSparkApplication#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#update DataprocGdcSparkApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#create DataprocGdcSparkApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#delete DataprocGdcSparkApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#update DataprocGdcSparkApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference <a name="DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetPythonFileUris">reset_python_file_uris</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_python_file_uris` <a name="reset_python_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetPythonFileUris"></a>

```python
def reset_python_file_uris() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUriInput">main_python_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUrisInput">python_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUri">main_python_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUris">python_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_python_file_uri_input`<sup>Optional</sup> <a name="main_python_file_uri_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUriInput"></a>

```python
main_python_file_uri_input: str
```

- *Type:* str

---

##### `python_file_uris_input`<sup>Optional</sup> <a name="python_file_uris_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUrisInput"></a>

```python
python_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_python_file_uri`<sup>Required</sup> <a name="main_python_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUri"></a>

```python
main_python_file_uri: str
```

- *Type:* str

---

##### `python_file_uris`<sup>Required</sup> <a name="python_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUris"></a>

```python
python_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocGdcSparkApplicationPysparkApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

---


### DataprocGdcSparkApplicationSparkApplicationConfigOutputReference <a name="DataprocGdcSparkApplicationSparkApplicationConfigOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainClass">reset_main_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainJarFileUri">reset_main_jar_file_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_main_class` <a name="reset_main_class" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainClass"></a>

```python
def reset_main_class() -> None
```

##### `reset_main_jar_file_uri` <a name="reset_main_jar_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainJarFileUri"></a>

```python
def reset_main_jar_file_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClassInput">main_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUriInput">main_jar_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClass">main_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_class_input`<sup>Optional</sup> <a name="main_class_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClassInput"></a>

```python
main_class_input: str
```

- *Type:* str

---

##### `main_jar_file_uri_input`<sup>Optional</sup> <a name="main_jar_file_uri_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUriInput"></a>

```python
main_jar_file_uri_input: str
```

- *Type:* str

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_class`<sup>Required</sup> <a name="main_class" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

---

##### `main_jar_file_uri`<sup>Required</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocGdcSparkApplicationSparkApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

---


### DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference <a name="DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUriInput">main_r_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUri">main_r_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_r_file_uri_input`<sup>Optional</sup> <a name="main_r_file_uri_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUriInput"></a>

```python
main_r_file_uri_input: str
```

- *Type:* str

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_r_file_uri`<sup>Required</sup> <a name="main_r_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUri"></a>

```python
main_r_file_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocGdcSparkApplicationSparkRApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

---


### DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference <a name="DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList">put_query_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryFileUri">reset_query_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryList">reset_query_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetScriptVariables">reset_script_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_query_list` <a name="put_query_list" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList"></a>

```python
def put_query_list(
  queries: typing.List[str]
) -> None
```

###### `queries`<sup>Required</sup> <a name="queries" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList.parameter.queries"></a>

- *Type:* typing.List[str]

The queries to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_spark_application#queries DataprocGdcSparkApplication#queries}

---

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_query_file_uri` <a name="reset_query_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryFileUri"></a>

```python
def reset_query_file_uri() -> None
```

##### `reset_query_list` <a name="reset_query_list" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryList"></a>

```python
def reset_query_list() -> None
```

##### `reset_script_variables` <a name="reset_script_variables" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetScriptVariables"></a>

```python
def reset_script_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryList">query_list</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUriInput">query_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryListInput">query_list_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariablesInput">script_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_list`<sup>Required</sup> <a name="query_list" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryList"></a>

```python
query_list: DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference</a>

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_file_uri_input`<sup>Optional</sup> <a name="query_file_uri_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUriInput"></a>

```python
query_file_uri_input: str
```

- *Type:* str

---

##### `query_list_input`<sup>Optional</sup> <a name="query_list_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryListInput"></a>

```python
query_list_input: DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---

##### `script_variables_input`<sup>Optional</sup> <a name="script_variables_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariablesInput"></a>

```python
script_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_file_uri`<sup>Required</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

---

##### `script_variables`<sup>Required</sup> <a name="script_variables" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocGdcSparkApplicationSparkSqlApplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---


### DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference <a name="DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queriesInput">queries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queries">queries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `queries_input`<sup>Optional</sup> <a name="queries_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queriesInput"></a>

```python
queries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `queries`<sup>Required</sup> <a name="queries" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queries"></a>

```python
queries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---


### DataprocGdcSparkApplicationTimeoutsOutputReference <a name="DataprocGdcSparkApplicationTimeoutsOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_spark_application

dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataprocGdcSparkApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>]

---



