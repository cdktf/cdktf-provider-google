# `dataprocJob` Submodule <a name="`dataprocJob` Submodule" id="@cdktf/provider-google.dataprocJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocJob <a name="DataprocJob" id="@cdktf/provider-google.dataprocJob.DataprocJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job google_dataproc_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  placement: DataprocJobPlacement,
  force_delete: typing.Union[bool, IResolvable] = None,
  hadoop_config: DataprocJobHadoopConfig = None,
  hive_config: DataprocJobHiveConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  pig_config: DataprocJobPigConfig = None,
  presto_config: DataprocJobPrestoConfig = None,
  project: str = None,
  pyspark_config: DataprocJobPysparkConfig = None,
  reference: DataprocJobReference = None,
  region: str = None,
  scheduling: DataprocJobScheduling = None,
  spark_config: DataprocJobSparkConfig = None,
  sparksql_config: DataprocJobSparksqlConfig = None,
  timeouts: DataprocJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.placement">placement</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | By default, you can only delete inactive jobs within Dataproc. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.hadoopConfig">hadoop_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | hadoop_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.hiveConfig">hive_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | hive_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#id DataprocJob#id}. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. The labels to associate with this job. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.pigConfig">pig_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | pig_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.prestoConfig">presto_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | presto_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.project">project</a></code> | <code>str</code> | The project in which the cluster can be found and jobs subsequently run against. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.pysparkConfig">pyspark_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | pyspark_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.reference">reference</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | reference block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.region">region</a></code> | <code>str</code> | The Cloud Dataproc region. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.sparkConfig">spark_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.sparksqlConfig">sparksql_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | sparksql_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.placement"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#placement DataprocJob#placement}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.forceDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

By default, you can only delete inactive jobs within Dataproc.

Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#force_delete DataprocJob#force_delete}

---

##### `hadoop_config`<sup>Optional</sup> <a name="hadoop_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.hadoopConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

hadoop_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#hadoop_config DataprocJob#hadoop_config}

---

##### `hive_config`<sup>Optional</sup> <a name="hive_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.hiveConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

hive_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#hive_config DataprocJob#hive_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#id DataprocJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. The labels to associate with this job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#labels DataprocJob#labels}

---

##### `pig_config`<sup>Optional</sup> <a name="pig_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.pigConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

pig_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#pig_config DataprocJob#pig_config}

---

##### `presto_config`<sup>Optional</sup> <a name="presto_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.prestoConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

presto_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#presto_config DataprocJob#presto_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.project"></a>

- *Type:* str

The project in which the cluster can be found and jobs subsequently run against.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#project DataprocJob#project}

---

##### `pyspark_config`<sup>Optional</sup> <a name="pyspark_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.pysparkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

pyspark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#pyspark_config DataprocJob#pyspark_config}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.reference"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#reference DataprocJob#reference}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.region"></a>

- *Type:* str

The Cloud Dataproc region.

This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#region DataprocJob#region}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.scheduling"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#scheduling DataprocJob#scheduling}

---

##### `spark_config`<sup>Optional</sup> <a name="spark_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.sparkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#spark_config DataprocJob#spark_config}

---

##### `sparksql_config`<sup>Optional</sup> <a name="sparksql_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.sparksqlConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

sparksql_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#sparksql_config DataprocJob#sparksql_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#timeouts DataprocJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig">put_hadoop_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig">put_hive_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig">put_pig_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPlacement">put_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig">put_presto_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig">put_pyspark_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putReference">put_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling">put_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig">put_spark_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig">put_sparksql_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetHadoopConfig">reset_hadoop_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetHiveConfig">reset_hive_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetPigConfig">reset_pig_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetPrestoConfig">reset_presto_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetPysparkConfig">reset_pyspark_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetReference">reset_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetScheduling">reset_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetSparkConfig">reset_spark_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetSparksqlConfig">reset_sparksql_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataprocJob.DataprocJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocJob.DataprocJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataprocJob.DataprocJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataprocJob.DataprocJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataprocJob.DataprocJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataprocJob.DataprocJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataprocJob.DataprocJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataprocJob.DataprocJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataprocJob.DataprocJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataprocJob.DataprocJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataprocJob.DataprocJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocJob.DataprocJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_hadoop_config` <a name="put_hadoop_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig"></a>

```python
def put_hadoop_config(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: DataprocJobHadoopConfigLoggingConfig = None,
  main_class: str = None,
  main_jar_file_uri: str = None,
  properties: typing.Mapping[str] = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#archive_uris DataprocJob#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#args DataprocJob#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#file_uris DataprocJob#file_uris}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

###### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig.parameter.mainClass"></a>

- *Type:* str

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#main_class DataprocJob#main_class}

---

###### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig.parameter.mainJarFileUri"></a>

- *Type:* str

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#main_jar_file_uri DataprocJob#main_jar_file_uri}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `put_hive_config` <a name="put_hive_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig"></a>

```python
def put_hive_config(
  continue_on_failure: typing.Union[bool, IResolvable] = None,
  jar_file_uris: typing.List[str] = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None,
  script_variables: typing.Mapping[str] = None
) -> None
```

###### `continue_on_failure`<sup>Optional</sup> <a name="continue_on_failure" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig.parameter.continueOnFailure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks.

Can contain Hive SerDes and UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names and values, used to configure Hive.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

###### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig.parameter.queryFileUri"></a>

- *Type:* str

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

###### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig.parameter.queryList"></a>

- *Type:* typing.List[str]

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

###### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig.parameter.scriptVariables"></a>

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#script_variables DataprocJob#script_variables}

---

##### `put_pig_config` <a name="put_pig_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig"></a>

```python
def put_pig_config(
  continue_on_failure: typing.Union[bool, IResolvable] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: DataprocJobPigConfigLoggingConfig = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None,
  script_variables: typing.Mapping[str] = None
) -> None
```

###### `continue_on_failure`<sup>Optional</sup> <a name="continue_on_failure" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig.parameter.continueOnFailure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks.

Can contain Pig UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Pig.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

###### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig.parameter.queryFileUri"></a>

- *Type:* str

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

###### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig.parameter.queryList"></a>

- *Type:* typing.List[str]

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

###### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig.parameter.scriptVariables"></a>

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Pig command: name=[value]).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#script_variables DataprocJob#script_variables}

---

##### `put_placement` <a name="put_placement" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPlacement"></a>

```python
def put_placement(
  cluster_name: str
) -> None
```

###### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPlacement.parameter.clusterName"></a>

- *Type:* str

The name of the cluster where the job will be submitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#cluster_name DataprocJob#cluster_name}

---

##### `put_presto_config` <a name="put_presto_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig"></a>

```python
def put_presto_config(
  client_tags: typing.List[str] = None,
  continue_on_failure: typing.Union[bool, IResolvable] = None,
  logging_config: DataprocJobPrestoConfigLoggingConfig = None,
  output_format: str = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None
) -> None
```

###### `client_tags`<sup>Optional</sup> <a name="client_tags" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig.parameter.clientTags"></a>

- *Type:* typing.List[str]

Presto client tags to attach to this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#client_tags DataprocJob#client_tags}

---

###### `continue_on_failure`<sup>Optional</sup> <a name="continue_on_failure" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig.parameter.continueOnFailure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to continue executing queries if a query fails.

Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig.parameter.outputFormat"></a>

- *Type:* str

The format in which query output will be displayed. See the Presto documentation for supported output formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#output_format DataprocJob#output_format}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values.

Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

###### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig.parameter.queryFileUri"></a>

- *Type:* str

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

###### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig.parameter.queryList"></a>

- *Type:* typing.List[str]

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

##### `put_pyspark_config` <a name="put_pyspark_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig"></a>

```python
def put_pyspark_config(
  main_python_file_uri: str,
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: DataprocJobPysparkConfigLoggingConfig = None,
  properties: typing.Mapping[str] = None,
  python_file_uris: typing.List[str] = None
) -> None
```

###### `main_python_file_uri`<sup>Required</sup> <a name="main_python_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig.parameter.mainPythonFileUri"></a>

- *Type:* str

Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#main_python_file_uri DataprocJob#main_python_file_uri}

---

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig.parameter.archiveUris"></a>

- *Type:* typing.List[str]

Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#archive_uris DataprocJob#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig.parameter.args"></a>

- *Type:* typing.List[str]

Optional.

The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#args DataprocJob#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig.parameter.fileUris"></a>

- *Type:* typing.List[str]

Optional.

HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#file_uris DataprocJob#file_uris}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Optional.

A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

###### `python_file_uris`<sup>Optional</sup> <a name="python_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig.parameter.pythonFileUris"></a>

- *Type:* typing.List[str]

Optional.

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#python_file_uris DataprocJob#python_file_uris}

---

##### `put_reference` <a name="put_reference" id="@cdktf/provider-google.dataprocJob.DataprocJob.putReference"></a>

```python
def put_reference(
  job_id: str = None
) -> None
```

###### `job_id`<sup>Optional</sup> <a name="job_id" id="@cdktf/provider-google.dataprocJob.DataprocJob.putReference.parameter.jobId"></a>

- *Type:* str

The job ID, which must be unique within the project.

The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#job_id DataprocJob#job_id}

---

##### `put_scheduling` <a name="put_scheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling"></a>

```python
def put_scheduling(
  max_failures_per_hour: typing.Union[int, float],
  max_failures_total: typing.Union[int, float]
) -> None
```

###### `max_failures_per_hour`<sup>Required</sup> <a name="max_failures_per_hour" id="@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling.parameter.maxFailuresPerHour"></a>

- *Type:* typing.Union[int, float]

Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#max_failures_per_hour DataprocJob#max_failures_per_hour}

---

###### `max_failures_total`<sup>Required</sup> <a name="max_failures_total" id="@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling.parameter.maxFailuresTotal"></a>

- *Type:* typing.Union[int, float]

Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#max_failures_total DataprocJob#max_failures_total}

---

##### `put_spark_config` <a name="put_spark_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig"></a>

```python
def put_spark_config(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: DataprocJobSparkConfigLoggingConfig = None,
  main_class: str = None,
  main_jar_file_uri: str = None,
  properties: typing.Mapping[str] = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#archive_uris DataprocJob#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#args DataprocJob#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#file_uris DataprocJob#file_uris}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

###### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig.parameter.mainClass"></a>

- *Type:* str

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#main_class DataprocJob#main_class}

---

###### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig.parameter.mainJarFileUri"></a>

- *Type:* str

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#main_jar_file_uri DataprocJob#main_jar_file_uri}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `put_sparksql_config` <a name="put_sparksql_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig"></a>

```python
def put_sparksql_config(
  jar_file_uris: typing.List[str] = None,
  logging_config: DataprocJobSparksqlConfigLoggingConfig = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None,
  script_variables: typing.Mapping[str] = None
) -> None
```

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Spark SQL's SparkConf.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

###### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig.parameter.queryFileUri"></a>

- *Type:* str

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

###### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig.parameter.queryList"></a>

- *Type:* typing.List[str]

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

###### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig.parameter.scriptVariables"></a>

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#script_variables DataprocJob#script_variables}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#create DataprocJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#delete DataprocJob#delete}.

---

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_hadoop_config` <a name="reset_hadoop_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetHadoopConfig"></a>

```python
def reset_hadoop_config() -> None
```

##### `reset_hive_config` <a name="reset_hive_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetHiveConfig"></a>

```python
def reset_hive_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_pig_config` <a name="reset_pig_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetPigConfig"></a>

```python
def reset_pig_config() -> None
```

##### `reset_presto_config` <a name="reset_presto_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetPrestoConfig"></a>

```python
def reset_presto_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_pyspark_config` <a name="reset_pyspark_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetPysparkConfig"></a>

```python
def reset_pyspark_config() -> None
```

##### `reset_reference` <a name="reset_reference" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetReference"></a>

```python
def reset_reference() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scheduling` <a name="reset_scheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetScheduling"></a>

```python
def reset_scheduling() -> None
```

##### `reset_spark_config` <a name="reset_spark_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetSparkConfig"></a>

```python
def reset_spark_config() -> None
```

##### `reset_sparksql_config` <a name="reset_sparksql_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetSparksqlConfig"></a>

```python
def reset_sparksql_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataprocJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataprocJob.DataprocJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocJob.DataprocJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataprocJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataprocJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataprocJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataprocJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.driverControlsFilesUri">driver_controls_files_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.driverOutputResourceUri">driver_output_resource_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfig">hadoop_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference">DataprocJobHadoopConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfig">hive_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference">DataprocJobHiveConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfig">pig_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference">DataprocJobPigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference">DataprocJobPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfig">presto_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference">DataprocJobPrestoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfig">pyspark_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference">DataprocJobPysparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.reference">reference</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference">DataprocJobReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference">DataprocJobSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfig">spark_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference">DataprocJobSparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfig">sparksql_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference">DataprocJobSparksqlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList">DataprocJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference">DataprocJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDeleteInput">force_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfigInput">hadoop_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfigInput">hive_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfigInput">pig_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.placementInput">placement_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfigInput">presto_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfigInput">pyspark_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.referenceInput">reference_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.schedulingInput">scheduling_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfigInput">spark_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfigInput">sparksql_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `driver_controls_files_uri`<sup>Required</sup> <a name="driver_controls_files_uri" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.driverControlsFilesUri"></a>

```python
driver_controls_files_uri: str
```

- *Type:* str

---

##### `driver_output_resource_uri`<sup>Required</sup> <a name="driver_output_resource_uri" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.driverOutputResourceUri"></a>

```python
driver_output_resource_uri: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hadoop_config`<sup>Required</sup> <a name="hadoop_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfig"></a>

```python
hadoop_config: DataprocJobHadoopConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference">DataprocJobHadoopConfigOutputReference</a>

---

##### `hive_config`<sup>Required</sup> <a name="hive_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfig"></a>

```python
hive_config: DataprocJobHiveConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference">DataprocJobHiveConfigOutputReference</a>

---

##### `pig_config`<sup>Required</sup> <a name="pig_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfig"></a>

```python
pig_config: DataprocJobPigConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference">DataprocJobPigConfigOutputReference</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.placement"></a>

```python
placement: DataprocJobPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference">DataprocJobPlacementOutputReference</a>

---

##### `presto_config`<sup>Required</sup> <a name="presto_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfig"></a>

```python
presto_config: DataprocJobPrestoConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference">DataprocJobPrestoConfigOutputReference</a>

---

##### `pyspark_config`<sup>Required</sup> <a name="pyspark_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfig"></a>

```python
pyspark_config: DataprocJobPysparkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference">DataprocJobPysparkConfigOutputReference</a>

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.reference"></a>

```python
reference: DataprocJobReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference">DataprocJobReferenceOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.scheduling"></a>

```python
scheduling: DataprocJobSchedulingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference">DataprocJobSchedulingOutputReference</a>

---

##### `spark_config`<sup>Required</sup> <a name="spark_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfig"></a>

```python
spark_config: DataprocJobSparkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference">DataprocJobSparkConfigOutputReference</a>

---

##### `sparksql_config`<sup>Required</sup> <a name="sparksql_config" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfig"></a>

```python
sparksql_config: DataprocJobSparksqlConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference">DataprocJobSparksqlConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.status"></a>

```python
status: DataprocJobStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList">DataprocJobStatusList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.timeouts"></a>

```python
timeouts: DataprocJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference">DataprocJobTimeoutsOutputReference</a>

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDeleteInput"></a>

```python
force_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hadoop_config_input`<sup>Optional</sup> <a name="hadoop_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfigInput"></a>

```python
hadoop_config_input: DataprocJobHadoopConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

---

##### `hive_config_input`<sup>Optional</sup> <a name="hive_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfigInput"></a>

```python
hive_config_input: DataprocJobHiveConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `pig_config_input`<sup>Optional</sup> <a name="pig_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfigInput"></a>

```python
pig_config_input: DataprocJobPigConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.placementInput"></a>

```python
placement_input: DataprocJobPlacement
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

---

##### `presto_config_input`<sup>Optional</sup> <a name="presto_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfigInput"></a>

```python
presto_config_input: DataprocJobPrestoConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `pyspark_config_input`<sup>Optional</sup> <a name="pyspark_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfigInput"></a>

```python
pyspark_config_input: DataprocJobPysparkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

---

##### `reference_input`<sup>Optional</sup> <a name="reference_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.referenceInput"></a>

```python
reference_input: DataprocJobReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scheduling_input`<sup>Optional</sup> <a name="scheduling_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.schedulingInput"></a>

```python
scheduling_input: DataprocJobScheduling
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

---

##### `spark_config_input`<sup>Optional</sup> <a name="spark_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfigInput"></a>

```python
spark_config_input: DataprocJobSparkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

---

##### `sparksql_config_input`<sup>Optional</sup> <a name="sparksql_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfigInput"></a>

```python
sparksql_config_input: DataprocJobSparksqlConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataprocJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>]

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocJobConfig <a name="DataprocJobConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  placement: DataprocJobPlacement,
  force_delete: typing.Union[bool, IResolvable] = None,
  hadoop_config: DataprocJobHadoopConfig = None,
  hive_config: DataprocJobHiveConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  pig_config: DataprocJobPigConfig = None,
  presto_config: DataprocJobPrestoConfig = None,
  project: str = None,
  pyspark_config: DataprocJobPysparkConfig = None,
  reference: DataprocJobReference = None,
  region: str = None,
  scheduling: DataprocJobScheduling = None,
  spark_config: DataprocJobSparkConfig = None,
  sparksql_config: DataprocJobSparksqlConfig = None,
  timeouts: DataprocJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | By default, you can only delete inactive jobs within Dataproc. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hadoopConfig">hadoop_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | hadoop_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hiveConfig">hive_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | hive_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#id DataprocJob#id}. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. The labels to associate with this job. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pigConfig">pig_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | pig_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.prestoConfig">presto_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | presto_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.project">project</a></code> | <code>str</code> | The project in which the cluster can be found and jobs subsequently run against. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pysparkConfig">pyspark_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | pyspark_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.reference">reference</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | reference block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.region">region</a></code> | <code>str</code> | The Cloud Dataproc region. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparkConfig">spark_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparksqlConfig">sparksql_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | sparksql_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.placement"></a>

```python
placement: DataprocJobPlacement
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#placement DataprocJob#placement}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

By default, you can only delete inactive jobs within Dataproc.

Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#force_delete DataprocJob#force_delete}

---

##### `hadoop_config`<sup>Optional</sup> <a name="hadoop_config" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hadoopConfig"></a>

```python
hadoop_config: DataprocJobHadoopConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

hadoop_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#hadoop_config DataprocJob#hadoop_config}

---

##### `hive_config`<sup>Optional</sup> <a name="hive_config" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hiveConfig"></a>

```python
hive_config: DataprocJobHiveConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

hive_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#hive_config DataprocJob#hive_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#id DataprocJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. The labels to associate with this job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#labels DataprocJob#labels}

---

##### `pig_config`<sup>Optional</sup> <a name="pig_config" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pigConfig"></a>

```python
pig_config: DataprocJobPigConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

pig_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#pig_config DataprocJob#pig_config}

---

##### `presto_config`<sup>Optional</sup> <a name="presto_config" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.prestoConfig"></a>

```python
presto_config: DataprocJobPrestoConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

presto_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#presto_config DataprocJob#presto_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project in which the cluster can be found and jobs subsequently run against.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#project DataprocJob#project}

---

##### `pyspark_config`<sup>Optional</sup> <a name="pyspark_config" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pysparkConfig"></a>

```python
pyspark_config: DataprocJobPysparkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

pyspark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#pyspark_config DataprocJob#pyspark_config}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.reference"></a>

```python
reference: DataprocJobReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#reference DataprocJob#reference}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Cloud Dataproc region.

This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#region DataprocJob#region}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.scheduling"></a>

```python
scheduling: DataprocJobScheduling
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#scheduling DataprocJob#scheduling}

---

##### `spark_config`<sup>Optional</sup> <a name="spark_config" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparkConfig"></a>

```python
spark_config: DataprocJobSparkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#spark_config DataprocJob#spark_config}

---

##### `sparksql_config`<sup>Optional</sup> <a name="sparksql_config" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparksqlConfig"></a>

```python
sparksql_config: DataprocJobSparksqlConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

sparksql_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#sparksql_config DataprocJob#sparksql_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.timeouts"></a>

```python
timeouts: DataprocJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#timeouts DataprocJob#timeouts}

---

### DataprocJobHadoopConfig <a name="DataprocJobHadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobHadoopConfig(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: DataprocJobHadoopConfigLoggingConfig = None,
  main_class: str = None,
  main_jar_file_uri: str = None,
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainClass">main_class</a></code> | <code>str</code> | The class containing the main method of the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | The HCFS URI of jar file containing the driver jar. Conflicts with main_class. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values, used to configure Spark. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#archive_uris DataprocJob#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#args DataprocJob#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#file_uris DataprocJob#file_uris}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.loggingConfig"></a>

```python
logging_config: DataprocJobHadoopConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#main_class DataprocJob#main_class}

---

##### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#main_jar_file_uri DataprocJob#main_jar_file_uri}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

### DataprocJobHadoopConfigLoggingConfig <a name="DataprocJobHadoopConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobHadoopConfigLoggingConfig(
  driver_log_levels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobHiveConfig <a name="DataprocJobHiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobHiveConfig(
  continue_on_failure: typing.Union[bool, IResolvable] = None,
  jar_file_uris: typing.List[str] = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None,
  script_variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.continueOnFailure">continue_on_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names and values, used to configure Hive. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | Mapping of query variable names to values (equivalent to the Hive command: SET name="value";). |

---

##### `continue_on_failure`<sup>Optional</sup> <a name="continue_on_failure" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.continueOnFailure"></a>

```python
continue_on_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks.

Can contain Hive SerDes and UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names and values, used to configure Hive.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

##### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#script_variables DataprocJob#script_variables}

---

### DataprocJobPigConfig <a name="DataprocJobPigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPigConfig(
  continue_on_failure: typing.Union[bool, IResolvable] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: DataprocJobPigConfigLoggingConfig = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None,
  script_variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.continueOnFailure">continue_on_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values, used to configure Pig. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | Mapping of query variable names to values (equivalent to the Pig command: name=[value]). |

---

##### `continue_on_failure`<sup>Optional</sup> <a name="continue_on_failure" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.continueOnFailure"></a>

```python
continue_on_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks.

Can contain Pig UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.loggingConfig"></a>

```python
logging_config: DataprocJobPigConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Pig.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

##### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Pig command: name=[value]).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#script_variables DataprocJob#script_variables}

---

### DataprocJobPigConfigLoggingConfig <a name="DataprocJobPigConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPigConfigLoggingConfig(
  driver_log_levels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobPlacement <a name="DataprocJobPlacement" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacement.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPlacement(
  cluster_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement.property.clusterName">cluster_name</a></code> | <code>str</code> | The name of the cluster where the job will be submitted. |

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacement.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The name of the cluster where the job will be submitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#cluster_name DataprocJob#cluster_name}

---

### DataprocJobPrestoConfig <a name="DataprocJobPrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPrestoConfig(
  client_tags: typing.List[str] = None,
  continue_on_failure: typing.Union[bool, IResolvable] = None,
  logging_config: DataprocJobPrestoConfigLoggingConfig = None,
  output_format: str = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.clientTags">client_tags</a></code> | <code>typing.List[str]</code> | Presto client tags to attach to this query. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.continueOnFailure">continue_on_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.outputFormat">output_format</a></code> | <code>str</code> | The format in which query output will be displayed. See the Presto documentation for supported output formats. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | The HCFS URI of the script that contains SQL queries. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri. |

---

##### `client_tags`<sup>Optional</sup> <a name="client_tags" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.clientTags"></a>

```python
client_tags: typing.List[str]
```

- *Type:* typing.List[str]

Presto client tags to attach to this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#client_tags DataprocJob#client_tags}

---

##### `continue_on_failure`<sup>Optional</sup> <a name="continue_on_failure" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.continueOnFailure"></a>

```python
continue_on_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to continue executing queries if a query fails.

Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.loggingConfig"></a>

```python
logging_config: DataprocJobPrestoConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

The format in which query output will be displayed. See the Presto documentation for supported output formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#output_format DataprocJob#output_format}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values.

Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

### DataprocJobPrestoConfigLoggingConfig <a name="DataprocJobPrestoConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPrestoConfigLoggingConfig(
  driver_log_levels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobPysparkConfig <a name="DataprocJobPysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPysparkConfig(
  main_python_file_uri: str,
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: DataprocJobPysparkConfigLoggingConfig = None,
  properties: typing.Mapping[str] = None,
  python_file_uris: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.mainPythonFileUri">main_python_file_uri</a></code> | <code>str</code> | Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.args">args</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.pythonFileUris">python_file_uris</a></code> | <code>typing.List[str]</code> | Optional. |

---

##### `main_python_file_uri`<sup>Required</sup> <a name="main_python_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.mainPythonFileUri"></a>

```python
main_python_file_uri: str
```

- *Type:* str

Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#main_python_file_uri DataprocJob#main_python_file_uri}

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#archive_uris DataprocJob#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#args DataprocJob#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#file_uris DataprocJob#file_uris}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.loggingConfig"></a>

```python
logging_config: DataprocJobPysparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `python_file_uris`<sup>Optional</sup> <a name="python_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.pythonFileUris"></a>

```python
python_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#python_file_uris DataprocJob#python_file_uris}

---

### DataprocJobPysparkConfigLoggingConfig <a name="DataprocJobPysparkConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPysparkConfigLoggingConfig(
  driver_log_levels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobReference <a name="DataprocJobReference" id="@cdktf/provider-google.dataprocJob.DataprocJobReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobReference(
  job_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference.property.jobId">job_id</a></code> | <code>str</code> | The job ID, which must be unique within the project. |

---

##### `job_id`<sup>Optional</sup> <a name="job_id" id="@cdktf/provider-google.dataprocJob.DataprocJobReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

The job ID, which must be unique within the project.

The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#job_id DataprocJob#job_id}

---

### DataprocJobScheduling <a name="DataprocJobScheduling" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobScheduling(
  max_failures_per_hour: typing.Union[int, float],
  max_failures_total: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresPerHour">max_failures_per_hour</a></code> | <code>typing.Union[int, float]</code> | Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresTotal">max_failures_total</a></code> | <code>typing.Union[int, float]</code> | Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. |

---

##### `max_failures_per_hour`<sup>Required</sup> <a name="max_failures_per_hour" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresPerHour"></a>

```python
max_failures_per_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#max_failures_per_hour DataprocJob#max_failures_per_hour}

---

##### `max_failures_total`<sup>Required</sup> <a name="max_failures_total" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresTotal"></a>

```python
max_failures_total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#max_failures_total DataprocJob#max_failures_total}

---

### DataprocJobSparkConfig <a name="DataprocJobSparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobSparkConfig(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: DataprocJobSparkConfigLoggingConfig = None,
  main_class: str = None,
  main_jar_file_uri: str = None,
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainClass">main_class</a></code> | <code>str</code> | The class containing the main method of the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | The HCFS URI of jar file containing the driver jar. Conflicts with main_class. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values, used to configure Spark. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#archive_uris DataprocJob#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#args DataprocJob#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#file_uris DataprocJob#file_uris}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.loggingConfig"></a>

```python
logging_config: DataprocJobSparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#main_class DataprocJob#main_class}

---

##### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#main_jar_file_uri DataprocJob#main_jar_file_uri}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

### DataprocJobSparkConfigLoggingConfig <a name="DataprocJobSparkConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobSparkConfigLoggingConfig(
  driver_log_levels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobSparksqlConfig <a name="DataprocJobSparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobSparksqlConfig(
  jar_file_uris: typing.List[str] = None,
  logging_config: DataprocJobSparksqlConfigLoggingConfig = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None,
  script_variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values, used to configure Spark SQL's SparkConf. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | The HCFS URI of the script that contains SQL queries. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). |

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.loggingConfig"></a>

```python
logging_config: DataprocJobSparksqlConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Spark SQL's SparkConf.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

##### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#script_variables DataprocJob#script_variables}

---

### DataprocJobSparksqlConfigLoggingConfig <a name="DataprocJobSparksqlConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobSparksqlConfigLoggingConfig(
  driver_log_levels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobStatus <a name="DataprocJobStatus" id="@cdktf/provider-google.dataprocJob.DataprocJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobStatus()
```


### DataprocJobTimeouts <a name="DataprocJobTimeouts" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#create DataprocJob#create}. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#delete DataprocJob#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#create DataprocJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#delete DataprocJob#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocJobHadoopConfigLoggingConfigOutputReference <a name="DataprocJobHadoopConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driver_log_levels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_log_levels_input`<sup>Optional</sup> <a name="driver_log_levels_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```python
driver_log_levels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobHadoopConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

---


### DataprocJobHadoopConfigOutputReference <a name="DataprocJobHadoopConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobHadoopConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainClass">reset_main_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainJarFileUri">reset_main_jar_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  driver_log_levels: typing.Mapping[str]
) -> None
```

###### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.putLoggingConfig.parameter.driverLogLevels"></a>

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_main_class` <a name="reset_main_class" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainClass"></a>

```python
def reset_main_class() -> None
```

##### `reset_main_jar_file_uri` <a name="reset_main_jar_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainJarFileUri"></a>

```python
def reset_main_jar_file_uri() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference">DataprocJobHadoopConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClassInput">main_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUriInput">main_jar_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClass">main_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: DataprocJobHadoopConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference">DataprocJobHadoopConfigLoggingConfigOutputReference</a>

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: DataprocJobHadoopConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

---

##### `main_class_input`<sup>Optional</sup> <a name="main_class_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClassInput"></a>

```python
main_class_input: str
```

- *Type:* str

---

##### `main_jar_file_uri_input`<sup>Optional</sup> <a name="main_jar_file_uri_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUriInput"></a>

```python
main_jar_file_uri_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_class`<sup>Required</sup> <a name="main_class" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

---

##### `main_jar_file_uri`<sup>Required</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobHadoopConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

---


### DataprocJobHiveConfigOutputReference <a name="DataprocJobHiveConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobHiveConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetContinueOnFailure">reset_continue_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryFileUri">reset_query_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryList">reset_query_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetScriptVariables">reset_script_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_continue_on_failure` <a name="reset_continue_on_failure" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetContinueOnFailure"></a>

```python
def reset_continue_on_failure() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_query_file_uri` <a name="reset_query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryFileUri"></a>

```python
def reset_query_file_uri() -> None
```

##### `reset_query_list` <a name="reset_query_list" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryList"></a>

```python
def reset_query_list() -> None
```

##### `reset_script_variables` <a name="reset_script_variables" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetScriptVariables"></a>

```python
def reset_script_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailureInput">continue_on_failure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUriInput">query_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryListInput">query_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariablesInput">script_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailure">continue_on_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `continue_on_failure_input`<sup>Optional</sup> <a name="continue_on_failure_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailureInput"></a>

```python
continue_on_failure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri_input`<sup>Optional</sup> <a name="query_file_uri_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUriInput"></a>

```python
query_file_uri_input: str
```

- *Type:* str

---

##### `query_list_input`<sup>Optional</sup> <a name="query_list_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryListInput"></a>

```python
query_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_variables_input`<sup>Optional</sup> <a name="script_variables_input" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariablesInput"></a>

```python
script_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `continue_on_failure`<sup>Required</sup> <a name="continue_on_failure" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailure"></a>

```python
continue_on_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri`<sup>Required</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

---

##### `query_list`<sup>Required</sup> <a name="query_list" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_variables`<sup>Required</sup> <a name="script_variables" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobHiveConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

---


### DataprocJobPigConfigLoggingConfigOutputReference <a name="DataprocJobPigConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driver_log_levels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_log_levels_input`<sup>Optional</sup> <a name="driver_log_levels_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```python
driver_log_levels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobPigConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

---


### DataprocJobPigConfigOutputReference <a name="DataprocJobPigConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPigConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetContinueOnFailure">reset_continue_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryFileUri">reset_query_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryList">reset_query_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetScriptVariables">reset_script_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  driver_log_levels: typing.Mapping[str]
) -> None
```

###### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.putLoggingConfig.parameter.driverLogLevels"></a>

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

##### `reset_continue_on_failure` <a name="reset_continue_on_failure" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetContinueOnFailure"></a>

```python
def reset_continue_on_failure() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_query_file_uri` <a name="reset_query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryFileUri"></a>

```python
def reset_query_file_uri() -> None
```

##### `reset_query_list` <a name="reset_query_list" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryList"></a>

```python
def reset_query_list() -> None
```

##### `reset_script_variables` <a name="reset_script_variables" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetScriptVariables"></a>

```python
def reset_script_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference">DataprocJobPigConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailureInput">continue_on_failure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUriInput">query_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryListInput">query_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariablesInput">script_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailure">continue_on_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: DataprocJobPigConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference">DataprocJobPigConfigLoggingConfigOutputReference</a>

---

##### `continue_on_failure_input`<sup>Optional</sup> <a name="continue_on_failure_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailureInput"></a>

```python
continue_on_failure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: DataprocJobPigConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri_input`<sup>Optional</sup> <a name="query_file_uri_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUriInput"></a>

```python
query_file_uri_input: str
```

- *Type:* str

---

##### `query_list_input`<sup>Optional</sup> <a name="query_list_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryListInput"></a>

```python
query_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_variables_input`<sup>Optional</sup> <a name="script_variables_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariablesInput"></a>

```python
script_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `continue_on_failure`<sup>Required</sup> <a name="continue_on_failure" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailure"></a>

```python
continue_on_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri`<sup>Required</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

---

##### `query_list`<sup>Required</sup> <a name="query_list" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_variables`<sup>Required</sup> <a name="script_variables" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobPigConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

---


### DataprocJobPlacementOutputReference <a name="DataprocJobPlacementOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterUuid">cluster_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_uuid`<sup>Required</sup> <a name="cluster_uuid" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterUuid"></a>

```python
cluster_uuid: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobPlacement
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

---


### DataprocJobPrestoConfigLoggingConfigOutputReference <a name="DataprocJobPrestoConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driver_log_levels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_log_levels_input`<sup>Optional</sup> <a name="driver_log_levels_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```python
driver_log_levels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobPrestoConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

---


### DataprocJobPrestoConfigOutputReference <a name="DataprocJobPrestoConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPrestoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetClientTags">reset_client_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetContinueOnFailure">reset_continue_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryFileUri">reset_query_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryList">reset_query_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  driver_log_levels: typing.Mapping[str]
) -> None
```

###### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.putLoggingConfig.parameter.driverLogLevels"></a>

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

##### `reset_client_tags` <a name="reset_client_tags" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetClientTags"></a>

```python
def reset_client_tags() -> None
```

##### `reset_continue_on_failure` <a name="reset_continue_on_failure" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetContinueOnFailure"></a>

```python
def reset_continue_on_failure() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_query_file_uri` <a name="reset_query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryFileUri"></a>

```python
def reset_query_file_uri() -> None
```

##### `reset_query_list` <a name="reset_query_list" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryList"></a>

```python
def reset_query_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference">DataprocJobPrestoConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTagsInput">client_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailureInput">continue_on_failure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUriInput">query_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryListInput">query_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTags">client_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailure">continue_on_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: DataprocJobPrestoConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference">DataprocJobPrestoConfigLoggingConfigOutputReference</a>

---

##### `client_tags_input`<sup>Optional</sup> <a name="client_tags_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTagsInput"></a>

```python
client_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `continue_on_failure_input`<sup>Optional</sup> <a name="continue_on_failure_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailureInput"></a>

```python
continue_on_failure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: DataprocJobPrestoConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri_input`<sup>Optional</sup> <a name="query_file_uri_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUriInput"></a>

```python
query_file_uri_input: str
```

- *Type:* str

---

##### `query_list_input`<sup>Optional</sup> <a name="query_list_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryListInput"></a>

```python
query_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_tags`<sup>Required</sup> <a name="client_tags" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTags"></a>

```python
client_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `continue_on_failure`<sup>Required</sup> <a name="continue_on_failure" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailure"></a>

```python
continue_on_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri`<sup>Required</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

---

##### `query_list`<sup>Required</sup> <a name="query_list" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobPrestoConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

---


### DataprocJobPysparkConfigLoggingConfigOutputReference <a name="DataprocJobPysparkConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driver_log_levels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_log_levels_input`<sup>Optional</sup> <a name="driver_log_levels_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```python
driver_log_levels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobPysparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

---


### DataprocJobPysparkConfigOutputReference <a name="DataprocJobPysparkConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobPysparkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetPythonFileUris">reset_python_file_uris</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  driver_log_levels: typing.Mapping[str]
) -> None
```

###### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.putLoggingConfig.parameter.driverLogLevels"></a>

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_python_file_uris` <a name="reset_python_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetPythonFileUris"></a>

```python
def reset_python_file_uris() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference">DataprocJobPysparkConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUriInput">main_python_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUrisInput">python_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUri">main_python_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUris">python_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: DataprocJobPysparkConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference">DataprocJobPysparkConfigLoggingConfigOutputReference</a>

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: DataprocJobPysparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

---

##### `main_python_file_uri_input`<sup>Optional</sup> <a name="main_python_file_uri_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUriInput"></a>

```python
main_python_file_uri_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_file_uris_input`<sup>Optional</sup> <a name="python_file_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUrisInput"></a>

```python
python_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_python_file_uri`<sup>Required</sup> <a name="main_python_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUri"></a>

```python
main_python_file_uri: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_file_uris`<sup>Required</sup> <a name="python_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUris"></a>

```python
python_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobPysparkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

---


### DataprocJobReferenceOutputReference <a name="DataprocJobReferenceOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resetJobId">reset_job_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_job_id` <a name="reset_job_id" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resetJobId"></a>

```python
def reset_job_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobIdInput">job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobIdInput"></a>

```python
job_id_input: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

---


### DataprocJobSchedulingOutputReference <a name="DataprocJobSchedulingOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobSchedulingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHourInput">max_failures_per_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotalInput">max_failures_total_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHour">max_failures_per_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotal">max_failures_total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_failures_per_hour_input`<sup>Optional</sup> <a name="max_failures_per_hour_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHourInput"></a>

```python
max_failures_per_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures_total_input`<sup>Optional</sup> <a name="max_failures_total_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotalInput"></a>

```python
max_failures_total_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures_per_hour`<sup>Required</sup> <a name="max_failures_per_hour" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHour"></a>

```python
max_failures_per_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures_total`<sup>Required</sup> <a name="max_failures_total" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotal"></a>

```python
max_failures_total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobScheduling
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

---


### DataprocJobSparkConfigLoggingConfigOutputReference <a name="DataprocJobSparkConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driver_log_levels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_log_levels_input`<sup>Optional</sup> <a name="driver_log_levels_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```python
driver_log_levels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobSparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

---


### DataprocJobSparkConfigOutputReference <a name="DataprocJobSparkConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobSparkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainClass">reset_main_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainJarFileUri">reset_main_jar_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  driver_log_levels: typing.Mapping[str]
) -> None
```

###### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.putLoggingConfig.parameter.driverLogLevels"></a>

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_main_class` <a name="reset_main_class" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainClass"></a>

```python
def reset_main_class() -> None
```

##### `reset_main_jar_file_uri` <a name="reset_main_jar_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainJarFileUri"></a>

```python
def reset_main_jar_file_uri() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference">DataprocJobSparkConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClassInput">main_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUriInput">main_jar_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClass">main_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: DataprocJobSparkConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference">DataprocJobSparkConfigLoggingConfigOutputReference</a>

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: DataprocJobSparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

---

##### `main_class_input`<sup>Optional</sup> <a name="main_class_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClassInput"></a>

```python
main_class_input: str
```

- *Type:* str

---

##### `main_jar_file_uri_input`<sup>Optional</sup> <a name="main_jar_file_uri_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUriInput"></a>

```python
main_jar_file_uri_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_class`<sup>Required</sup> <a name="main_class" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

---

##### `main_jar_file_uri`<sup>Required</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobSparkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

---


### DataprocJobSparksqlConfigLoggingConfigOutputReference <a name="DataprocJobSparksqlConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driver_log_levels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_log_levels_input`<sup>Optional</sup> <a name="driver_log_levels_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```python
driver_log_levels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobSparksqlConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

---


### DataprocJobSparksqlConfigOutputReference <a name="DataprocJobSparksqlConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobSparksqlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryFileUri">reset_query_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryList">reset_query_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetScriptVariables">reset_script_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  driver_log_levels: typing.Mapping[str]
) -> None
```

###### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.putLoggingConfig.parameter.driverLogLevels"></a>

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_query_file_uri` <a name="reset_query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryFileUri"></a>

```python
def reset_query_file_uri() -> None
```

##### `reset_query_list` <a name="reset_query_list" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryList"></a>

```python
def reset_query_list() -> None
```

##### `reset_script_variables` <a name="reset_script_variables" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetScriptVariables"></a>

```python
def reset_script_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference">DataprocJobSparksqlConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUriInput">query_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryListInput">query_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariablesInput">script_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: DataprocJobSparksqlConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference">DataprocJobSparksqlConfigLoggingConfigOutputReference</a>

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: DataprocJobSparksqlConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri_input`<sup>Optional</sup> <a name="query_file_uri_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUriInput"></a>

```python
query_file_uri_input: str
```

- *Type:* str

---

##### `query_list_input`<sup>Optional</sup> <a name="query_list_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryListInput"></a>

```python
query_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_variables_input`<sup>Optional</sup> <a name="script_variables_input" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariablesInput"></a>

```python
script_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri`<sup>Required</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

---

##### `query_list`<sup>Required</sup> <a name="query_list" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_variables`<sup>Required</sup> <a name="script_variables" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobSparksqlConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

---


### DataprocJobStatusList <a name="DataprocJobStatusList" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataprocJobStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataprocJobStatusOutputReference <a name="DataprocJobStatusOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.stateStartTime">state_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.substate">substate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatus">DataprocJobStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_start_time`<sup>Required</sup> <a name="state_start_time" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.stateStartTime"></a>

```python
state_start_time: str
```

- *Type:* str

---

##### `substate`<sup>Required</sup> <a name="substate" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.substate"></a>

```python
substate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataprocJobStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatus">DataprocJobStatus</a>

---


### DataprocJobTimeoutsOutputReference <a name="DataprocJobTimeoutsOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_job

dataprocJob.DataprocJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataprocJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>]

---



