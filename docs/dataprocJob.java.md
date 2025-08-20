# `dataprocJob` Submodule <a name="`dataprocJob` Submodule" id="@cdktf/provider-google.dataprocJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocJob <a name="DataprocJob" id="@cdktf/provider-google.dataprocJob.DataprocJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job google_dataproc_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJob;

DataprocJob.Builder.create(Construct scope, java.lang.String id)
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
    .placement(DataprocJobPlacement)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .hadoopConfig(DataprocJobHadoopConfig)
//  .hiveConfig(DataprocJobHiveConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .pigConfig(DataprocJobPigConfig)
//  .prestoConfig(DataprocJobPrestoConfig)
//  .project(java.lang.String)
//  .pysparkConfig(DataprocJobPysparkConfig)
//  .reference(DataprocJobReference)
//  .region(java.lang.String)
//  .scheduling(DataprocJobScheduling)
//  .sparkConfig(DataprocJobSparkConfig)
//  .sparksqlConfig(DataprocJobSparksqlConfig)
//  .timeouts(DataprocJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.placement">placement</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | By default, you can only delete inactive jobs within Dataproc. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.hadoopConfig">hadoopConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | hadoop_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.hiveConfig">hiveConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | hive_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#id DataprocJob#id}. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. The labels to associate with this job. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.pigConfig">pigConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | pig_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.prestoConfig">prestoConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | presto_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project in which the cluster can be found and jobs subsequently run against. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.pysparkConfig">pysparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | pyspark_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.reference">reference</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | reference block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Cloud Dataproc region. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.sparkConfig">sparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.sparksqlConfig">sparksqlConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | sparksql_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.placement"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#placement DataprocJob#placement}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

By default, you can only delete inactive jobs within Dataproc.

Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#force_delete DataprocJob#force_delete}

---

##### `hadoopConfig`<sup>Optional</sup> <a name="hadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.hadoopConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

hadoop_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#hadoop_config DataprocJob#hadoop_config}

---

##### `hiveConfig`<sup>Optional</sup> <a name="hiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.hiveConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

hive_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#hive_config DataprocJob#hive_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#id DataprocJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. The labels to associate with this job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#labels DataprocJob#labels}

---

##### `pigConfig`<sup>Optional</sup> <a name="pigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.pigConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

pig_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#pig_config DataprocJob#pig_config}

---

##### `prestoConfig`<sup>Optional</sup> <a name="prestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.prestoConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

presto_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#presto_config DataprocJob#presto_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project in which the cluster can be found and jobs subsequently run against.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#project DataprocJob#project}

---

##### `pysparkConfig`<sup>Optional</sup> <a name="pysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.pysparkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

pyspark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#pyspark_config DataprocJob#pyspark_config}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.reference"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#reference DataprocJob#reference}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Cloud Dataproc region.

This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#region DataprocJob#region}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.scheduling"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#scheduling DataprocJob#scheduling}

---

##### `sparkConfig`<sup>Optional</sup> <a name="sparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.sparkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#spark_config DataprocJob#spark_config}

---

##### `sparksqlConfig`<sup>Optional</sup> <a name="sparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.sparksqlConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

sparksql_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#sparksql_config DataprocJob#sparksql_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#timeouts DataprocJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig">putHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig">putHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig">putPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig">putPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig">putPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putReference">putReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling">putScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig">putSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig">putSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetHadoopConfig">resetHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetHiveConfig">resetHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetPigConfig">resetPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetPrestoConfig">resetPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetPysparkConfig">resetPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetReference">resetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetScheduling">resetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetSparkConfig">resetSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetSparksqlConfig">resetSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataprocJob.DataprocJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocJob.DataprocJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataprocJob.DataprocJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocJob.DataprocJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataprocJob.DataprocJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataprocJob.DataprocJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataprocJob.DataprocJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataprocJob.DataprocJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocJob.DataprocJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataprocJob.DataprocJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataprocJob.DataprocJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocJob.DataprocJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHadoopConfig` <a name="putHadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig"></a>

```java
public void putHadoopConfig(DataprocJobHadoopConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

---

##### `putHiveConfig` <a name="putHiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig"></a>

```java
public void putHiveConfig(DataprocJobHiveConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

---

##### `putPigConfig` <a name="putPigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig"></a>

```java
public void putPigConfig(DataprocJobPigConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

---

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPlacement"></a>

```java
public void putPlacement(DataprocJobPlacement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

---

##### `putPrestoConfig` <a name="putPrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig"></a>

```java
public void putPrestoConfig(DataprocJobPrestoConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

---

##### `putPysparkConfig` <a name="putPysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig"></a>

```java
public void putPysparkConfig(DataprocJobPysparkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

---

##### `putReference` <a name="putReference" id="@cdktf/provider-google.dataprocJob.DataprocJob.putReference"></a>

```java
public void putReference(DataprocJobReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

---

##### `putScheduling` <a name="putScheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling"></a>

```java
public void putScheduling(DataprocJobScheduling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

---

##### `putSparkConfig` <a name="putSparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig"></a>

```java
public void putSparkConfig(DataprocJobSparkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

---

##### `putSparksqlConfig` <a name="putSparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig"></a>

```java
public void putSparksqlConfig(DataprocJobSparksqlConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts"></a>

```java
public void putTimeouts(DataprocJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>

---

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetHadoopConfig` <a name="resetHadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetHadoopConfig"></a>

```java
public void resetHadoopConfig()
```

##### `resetHiveConfig` <a name="resetHiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetHiveConfig"></a>

```java
public void resetHiveConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPigConfig` <a name="resetPigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetPigConfig"></a>

```java
public void resetPigConfig()
```

##### `resetPrestoConfig` <a name="resetPrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetPrestoConfig"></a>

```java
public void resetPrestoConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetPysparkConfig` <a name="resetPysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetPysparkConfig"></a>

```java
public void resetPysparkConfig()
```

##### `resetReference` <a name="resetReference" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetReference"></a>

```java
public void resetReference()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetScheduling` <a name="resetScheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetScheduling"></a>

```java
public void resetScheduling()
```

##### `resetSparkConfig` <a name="resetSparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetSparkConfig"></a>

```java
public void resetSparkConfig()
```

##### `resetSparksqlConfig` <a name="resetSparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetSparksqlConfig"></a>

```java
public void resetSparksqlConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataprocJob.DataprocJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJob;

DataprocJob.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJob;

DataprocJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJob;

DataprocJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJob;

DataprocJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataprocJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataprocJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataprocJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataprocJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocJob.DataprocJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataprocJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.driverControlsFilesUri">driverControlsFilesUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.driverOutputResourceUri">driverOutputResourceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfig">hadoopConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference">DataprocJobHadoopConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfig">hiveConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference">DataprocJobHiveConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfig">pigConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference">DataprocJobPigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference">DataprocJobPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfig">prestoConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference">DataprocJobPrestoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfig">pysparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference">DataprocJobPysparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.reference">reference</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference">DataprocJobReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference">DataprocJobSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfig">sparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference">DataprocJobSparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfig">sparksqlConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference">DataprocJobSparksqlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList">DataprocJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference">DataprocJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfigInput">hadoopConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfigInput">hiveConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfigInput">pigConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.placementInput">placementInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfigInput">prestoConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfigInput">pysparkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.referenceInput">referenceInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.schedulingInput">schedulingInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfigInput">sparkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfigInput">sparksqlConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `driverControlsFilesUri`<sup>Required</sup> <a name="driverControlsFilesUri" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.driverControlsFilesUri"></a>

```java
public java.lang.String getDriverControlsFilesUri();
```

- *Type:* java.lang.String

---

##### `driverOutputResourceUri`<sup>Required</sup> <a name="driverOutputResourceUri" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.driverOutputResourceUri"></a>

```java
public java.lang.String getDriverOutputResourceUri();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hadoopConfig`<sup>Required</sup> <a name="hadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfig"></a>

```java
public DataprocJobHadoopConfigOutputReference getHadoopConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference">DataprocJobHadoopConfigOutputReference</a>

---

##### `hiveConfig`<sup>Required</sup> <a name="hiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfig"></a>

```java
public DataprocJobHiveConfigOutputReference getHiveConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference">DataprocJobHiveConfigOutputReference</a>

---

##### `pigConfig`<sup>Required</sup> <a name="pigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfig"></a>

```java
public DataprocJobPigConfigOutputReference getPigConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference">DataprocJobPigConfigOutputReference</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.placement"></a>

```java
public DataprocJobPlacementOutputReference getPlacement();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference">DataprocJobPlacementOutputReference</a>

---

##### `prestoConfig`<sup>Required</sup> <a name="prestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfig"></a>

```java
public DataprocJobPrestoConfigOutputReference getPrestoConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference">DataprocJobPrestoConfigOutputReference</a>

---

##### `pysparkConfig`<sup>Required</sup> <a name="pysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfig"></a>

```java
public DataprocJobPysparkConfigOutputReference getPysparkConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference">DataprocJobPysparkConfigOutputReference</a>

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.reference"></a>

```java
public DataprocJobReferenceOutputReference getReference();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference">DataprocJobReferenceOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.scheduling"></a>

```java
public DataprocJobSchedulingOutputReference getScheduling();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference">DataprocJobSchedulingOutputReference</a>

---

##### `sparkConfig`<sup>Required</sup> <a name="sparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfig"></a>

```java
public DataprocJobSparkConfigOutputReference getSparkConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference">DataprocJobSparkConfigOutputReference</a>

---

##### `sparksqlConfig`<sup>Required</sup> <a name="sparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfig"></a>

```java
public DataprocJobSparksqlConfigOutputReference getSparksqlConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference">DataprocJobSparksqlConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.status"></a>

```java
public DataprocJobStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList">DataprocJobStatusList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.timeouts"></a>

```java
public DataprocJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference">DataprocJobTimeoutsOutputReference</a>

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDeleteInput"></a>

```java
public java.lang.Object getForceDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hadoopConfigInput`<sup>Optional</sup> <a name="hadoopConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfigInput"></a>

```java
public DataprocJobHadoopConfig getHadoopConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

---

##### `hiveConfigInput`<sup>Optional</sup> <a name="hiveConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfigInput"></a>

```java
public DataprocJobHiveConfig getHiveConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pigConfigInput`<sup>Optional</sup> <a name="pigConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfigInput"></a>

```java
public DataprocJobPigConfig getPigConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.placementInput"></a>

```java
public DataprocJobPlacement getPlacementInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

---

##### `prestoConfigInput`<sup>Optional</sup> <a name="prestoConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfigInput"></a>

```java
public DataprocJobPrestoConfig getPrestoConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pysparkConfigInput`<sup>Optional</sup> <a name="pysparkConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfigInput"></a>

```java
public DataprocJobPysparkConfig getPysparkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

---

##### `referenceInput`<sup>Optional</sup> <a name="referenceInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.referenceInput"></a>

```java
public DataprocJobReference getReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `schedulingInput`<sup>Optional</sup> <a name="schedulingInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.schedulingInput"></a>

```java
public DataprocJobScheduling getSchedulingInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

---

##### `sparkConfigInput`<sup>Optional</sup> <a name="sparkConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfigInput"></a>

```java
public DataprocJobSparkConfig getSparkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

---

##### `sparksqlConfigInput`<sup>Optional</sup> <a name="sparksqlConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfigInput"></a>

```java
public DataprocJobSparksqlConfig getSparksqlConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocJobConfig <a name="DataprocJobConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobConfig;

DataprocJobConfig.builder()
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
    .placement(DataprocJobPlacement)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .hadoopConfig(DataprocJobHadoopConfig)
//  .hiveConfig(DataprocJobHiveConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .pigConfig(DataprocJobPigConfig)
//  .prestoConfig(DataprocJobPrestoConfig)
//  .project(java.lang.String)
//  .pysparkConfig(DataprocJobPysparkConfig)
//  .reference(DataprocJobReference)
//  .region(java.lang.String)
//  .scheduling(DataprocJobScheduling)
//  .sparkConfig(DataprocJobSparkConfig)
//  .sparksqlConfig(DataprocJobSparksqlConfig)
//  .timeouts(DataprocJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | By default, you can only delete inactive jobs within Dataproc. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hadoopConfig">hadoopConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | hadoop_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hiveConfig">hiveConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | hive_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#id DataprocJob#id}. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. The labels to associate with this job. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pigConfig">pigConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | pig_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.prestoConfig">prestoConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | presto_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project in which the cluster can be found and jobs subsequently run against. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pysparkConfig">pysparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | pyspark_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.reference">reference</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | reference block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Cloud Dataproc region. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparkConfig">sparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparksqlConfig">sparksqlConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | sparksql_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.placement"></a>

```java
public DataprocJobPlacement getPlacement();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#placement DataprocJob#placement}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

By default, you can only delete inactive jobs within Dataproc.

Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#force_delete DataprocJob#force_delete}

---

##### `hadoopConfig`<sup>Optional</sup> <a name="hadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hadoopConfig"></a>

```java
public DataprocJobHadoopConfig getHadoopConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

hadoop_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#hadoop_config DataprocJob#hadoop_config}

---

##### `hiveConfig`<sup>Optional</sup> <a name="hiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hiveConfig"></a>

```java
public DataprocJobHiveConfig getHiveConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

hive_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#hive_config DataprocJob#hive_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#id DataprocJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. The labels to associate with this job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#labels DataprocJob#labels}

---

##### `pigConfig`<sup>Optional</sup> <a name="pigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pigConfig"></a>

```java
public DataprocJobPigConfig getPigConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

pig_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#pig_config DataprocJob#pig_config}

---

##### `prestoConfig`<sup>Optional</sup> <a name="prestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.prestoConfig"></a>

```java
public DataprocJobPrestoConfig getPrestoConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

presto_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#presto_config DataprocJob#presto_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project in which the cluster can be found and jobs subsequently run against.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#project DataprocJob#project}

---

##### `pysparkConfig`<sup>Optional</sup> <a name="pysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pysparkConfig"></a>

```java
public DataprocJobPysparkConfig getPysparkConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

pyspark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#pyspark_config DataprocJob#pyspark_config}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.reference"></a>

```java
public DataprocJobReference getReference();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#reference DataprocJob#reference}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Cloud Dataproc region.

This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#region DataprocJob#region}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.scheduling"></a>

```java
public DataprocJobScheduling getScheduling();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#scheduling DataprocJob#scheduling}

---

##### `sparkConfig`<sup>Optional</sup> <a name="sparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparkConfig"></a>

```java
public DataprocJobSparkConfig getSparkConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#spark_config DataprocJob#spark_config}

---

##### `sparksqlConfig`<sup>Optional</sup> <a name="sparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparksqlConfig"></a>

```java
public DataprocJobSparksqlConfig getSparksqlConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

sparksql_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#sparksql_config DataprocJob#sparksql_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.timeouts"></a>

```java
public DataprocJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#timeouts DataprocJob#timeouts}

---

### DataprocJobHadoopConfig <a name="DataprocJobHadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobHadoopConfig;

DataprocJobHadoopConfig.builder()
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .loggingConfig(DataprocJobHadoopConfigLoggingConfig)
//  .mainClass(java.lang.String)
//  .mainJarFileUri(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | The class containing the main method of the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of jar file containing the driver jar. Conflicts with main_class. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values, used to configure Spark. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#archive_uris DataprocJob#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#args DataprocJob#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#file_uris DataprocJob#file_uris}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.loggingConfig"></a>

```java
public DataprocJobHadoopConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#main_class DataprocJob#main_class}

---

##### `mainJarFileUri`<sup>Optional</sup> <a name="mainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#main_jar_file_uri DataprocJob#main_jar_file_uri}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

### DataprocJobHadoopConfigLoggingConfig <a name="DataprocJobHadoopConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobHadoopConfigLoggingConfig;

DataprocJobHadoopConfigLoggingConfig.builder()
    .driverLogLevels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobHiveConfig <a name="DataprocJobHiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobHiveConfig;

DataprocJobHiveConfig.builder()
//  .continueOnFailure(java.lang.Boolean)
//  .continueOnFailure(IResolvable)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .queryFileUri(java.lang.String)
//  .queryList(java.util.List<java.lang.String>)
//  .scriptVariables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.continueOnFailure">continueOnFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names and values, used to configure Hive. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of query variable names to values (equivalent to the Hive command: SET name="value";). |

---

##### `continueOnFailure`<sup>Optional</sup> <a name="continueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.continueOnFailure"></a>

```java
public java.lang.Object getContinueOnFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks.

Can contain Hive SerDes and UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names and values, used to configure Hive.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `queryFileUri`<sup>Optional</sup> <a name="queryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `queryList`<sup>Optional</sup> <a name="queryList" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

##### `scriptVariables`<sup>Optional</sup> <a name="scriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#script_variables DataprocJob#script_variables}

---

### DataprocJobPigConfig <a name="DataprocJobPigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPigConfig;

DataprocJobPigConfig.builder()
//  .continueOnFailure(java.lang.Boolean)
//  .continueOnFailure(IResolvable)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .loggingConfig(DataprocJobPigConfigLoggingConfig)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .queryFileUri(java.lang.String)
//  .queryList(java.util.List<java.lang.String>)
//  .scriptVariables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.continueOnFailure">continueOnFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values, used to configure Pig. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of query variable names to values (equivalent to the Pig command: name=[value]). |

---

##### `continueOnFailure`<sup>Optional</sup> <a name="continueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.continueOnFailure"></a>

```java
public java.lang.Object getContinueOnFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks.

Can contain Pig UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.loggingConfig"></a>

```java
public DataprocJobPigConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values, used to configure Pig.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `queryFileUri`<sup>Optional</sup> <a name="queryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `queryList`<sup>Optional</sup> <a name="queryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

##### `scriptVariables`<sup>Optional</sup> <a name="scriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of query variable names to values (equivalent to the Pig command: name=[value]).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#script_variables DataprocJob#script_variables}

---

### DataprocJobPigConfigLoggingConfig <a name="DataprocJobPigConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPigConfigLoggingConfig;

DataprocJobPigConfigLoggingConfig.builder()
    .driverLogLevels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobPlacement <a name="DataprocJobPlacement" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPlacement;

DataprocJobPlacement.builder()
    .clusterName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | The name of the cluster where the job will be submitted. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacement.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

The name of the cluster where the job will be submitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#cluster_name DataprocJob#cluster_name}

---

### DataprocJobPrestoConfig <a name="DataprocJobPrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPrestoConfig;

DataprocJobPrestoConfig.builder()
//  .clientTags(java.util.List<java.lang.String>)
//  .continueOnFailure(java.lang.Boolean)
//  .continueOnFailure(IResolvable)
//  .loggingConfig(DataprocJobPrestoConfigLoggingConfig)
//  .outputFormat(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .queryFileUri(java.lang.String)
//  .queryList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.clientTags">clientTags</a></code> | <code>java.util.List<java.lang.String></code> | Presto client tags to attach to this query. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.continueOnFailure">continueOnFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | The format in which query output will be displayed. See the Presto documentation for supported output formats. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the script that contains SQL queries. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri. |

---

##### `clientTags`<sup>Optional</sup> <a name="clientTags" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.clientTags"></a>

```java
public java.util.List<java.lang.String> getClientTags();
```

- *Type:* java.util.List<java.lang.String>

Presto client tags to attach to this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#client_tags DataprocJob#client_tags}

---

##### `continueOnFailure`<sup>Optional</sup> <a name="continueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.continueOnFailure"></a>

```java
public java.lang.Object getContinueOnFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to continue executing queries if a query fails.

Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.loggingConfig"></a>

```java
public DataprocJobPrestoConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

The format in which query output will be displayed. See the Presto documentation for supported output formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#output_format DataprocJob#output_format}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values.

Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `queryFileUri`<sup>Optional</sup> <a name="queryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `queryList`<sup>Optional</sup> <a name="queryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

### DataprocJobPrestoConfigLoggingConfig <a name="DataprocJobPrestoConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPrestoConfigLoggingConfig;

DataprocJobPrestoConfigLoggingConfig.builder()
    .driverLogLevels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobPysparkConfig <a name="DataprocJobPysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPysparkConfig;

DataprocJobPysparkConfig.builder()
    .mainPythonFileUri(java.lang.String)
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .loggingConfig(DataprocJobPysparkConfigLoggingConfig)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .pythonFileUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.mainPythonFileUri">mainPythonFileUri</a></code> | <code>java.lang.String</code> | Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.pythonFileUris">pythonFileUris</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |

---

##### `mainPythonFileUri`<sup>Required</sup> <a name="mainPythonFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.mainPythonFileUri"></a>

```java
public java.lang.String getMainPythonFileUri();
```

- *Type:* java.lang.String

Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#main_python_file_uri DataprocJob#main_python_file_uri}

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#archive_uris DataprocJob#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Optional.

The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#args DataprocJob#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

Optional.

HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#file_uris DataprocJob#file_uris}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.loggingConfig"></a>

```java
public DataprocJobPysparkConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `pythonFileUris`<sup>Optional</sup> <a name="pythonFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.pythonFileUris"></a>

```java
public java.util.List<java.lang.String> getPythonFileUris();
```

- *Type:* java.util.List<java.lang.String>

Optional.

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#python_file_uris DataprocJob#python_file_uris}

---

### DataprocJobPysparkConfigLoggingConfig <a name="DataprocJobPysparkConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPysparkConfigLoggingConfig;

DataprocJobPysparkConfigLoggingConfig.builder()
    .driverLogLevels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobReference <a name="DataprocJobReference" id="@cdktf/provider-google.dataprocJob.DataprocJobReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobReference;

DataprocJobReference.builder()
//  .jobId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | The job ID, which must be unique within the project. |

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktf/provider-google.dataprocJob.DataprocJobReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

The job ID, which must be unique within the project.

The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#job_id DataprocJob#job_id}

---

### DataprocJobScheduling <a name="DataprocJobScheduling" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobScheduling;

DataprocJobScheduling.builder()
    .maxFailuresPerHour(java.lang.Number)
    .maxFailuresTotal(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresPerHour">maxFailuresPerHour</a></code> | <code>java.lang.Number</code> | Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresTotal">maxFailuresTotal</a></code> | <code>java.lang.Number</code> | Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. |

---

##### `maxFailuresPerHour`<sup>Required</sup> <a name="maxFailuresPerHour" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresPerHour"></a>

```java
public java.lang.Number getMaxFailuresPerHour();
```

- *Type:* java.lang.Number

Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#max_failures_per_hour DataprocJob#max_failures_per_hour}

---

##### `maxFailuresTotal`<sup>Required</sup> <a name="maxFailuresTotal" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresTotal"></a>

```java
public java.lang.Number getMaxFailuresTotal();
```

- *Type:* java.lang.Number

Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#max_failures_total DataprocJob#max_failures_total}

---

### DataprocJobSparkConfig <a name="DataprocJobSparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobSparkConfig;

DataprocJobSparkConfig.builder()
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .loggingConfig(DataprocJobSparkConfigLoggingConfig)
//  .mainClass(java.lang.String)
//  .mainJarFileUri(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | The class containing the main method of the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of jar file containing the driver jar. Conflicts with main_class. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values, used to configure Spark. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#archive_uris DataprocJob#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#args DataprocJob#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#file_uris DataprocJob#file_uris}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.loggingConfig"></a>

```java
public DataprocJobSparkConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#main_class DataprocJob#main_class}

---

##### `mainJarFileUri`<sup>Optional</sup> <a name="mainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#main_jar_file_uri DataprocJob#main_jar_file_uri}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

### DataprocJobSparkConfigLoggingConfig <a name="DataprocJobSparkConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobSparkConfigLoggingConfig;

DataprocJobSparkConfigLoggingConfig.builder()
    .driverLogLevels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobSparksqlConfig <a name="DataprocJobSparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobSparksqlConfig;

DataprocJobSparksqlConfig.builder()
//  .jarFileUris(java.util.List<java.lang.String>)
//  .loggingConfig(DataprocJobSparksqlConfigLoggingConfig)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .queryFileUri(java.lang.String)
//  .queryList(java.util.List<java.lang.String>)
//  .scriptVariables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values, used to configure Spark SQL's SparkConf. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the script that contains SQL queries. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). |

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.loggingConfig"></a>

```java
public DataprocJobSparksqlConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values, used to configure Spark SQL's SparkConf.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#properties DataprocJob#properties}

---

##### `queryFileUri`<sup>Optional</sup> <a name="queryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `queryList`<sup>Optional</sup> <a name="queryList" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#query_list DataprocJob#query_list}

---

##### `scriptVariables`<sup>Optional</sup> <a name="scriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#script_variables DataprocJob#script_variables}

---

### DataprocJobSparksqlConfigLoggingConfig <a name="DataprocJobSparksqlConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobSparksqlConfigLoggingConfig;

DataprocJobSparksqlConfigLoggingConfig.builder()
    .driverLogLevels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobStatus <a name="DataprocJobStatus" id="@cdktf/provider-google.dataprocJob.DataprocJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobStatus;

DataprocJobStatus.builder()
    .build();
```


### DataprocJobTimeouts <a name="DataprocJobTimeouts" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobTimeouts;

DataprocJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#create DataprocJob#create}. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#delete DataprocJob#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#create DataprocJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/dataproc_job#delete DataprocJob#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocJobHadoopConfigLoggingConfigOutputReference <a name="DataprocJobHadoopConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobHadoopConfigLoggingConfigOutputReference;

new DataprocJobHadoopConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driverLogLevelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driverLogLevelsInput`<sup>Optional</sup> <a name="driverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobHadoopConfigLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

---


### DataprocJobHadoopConfigOutputReference <a name="DataprocJobHadoopConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobHadoopConfigOutputReference;

new DataprocJobHadoopConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainJarFileUri">resetMainJarFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(DataprocJobHadoopConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

---

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainClass"></a>

```java
public void resetMainClass()
```

##### `resetMainJarFileUri` <a name="resetMainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainJarFileUri"></a>

```java
public void resetMainJarFileUri()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference">DataprocJobHadoopConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUriInput">mainJarFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfig"></a>

```java
public DataprocJobHadoopConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference">DataprocJobHadoopConfigLoggingConfigOutputReference</a>

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfigInput"></a>

```java
public DataprocJobHadoopConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClassInput"></a>

```java
public java.lang.String getMainClassInput();
```

- *Type:* java.lang.String

---

##### `mainJarFileUriInput`<sup>Optional</sup> <a name="mainJarFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUriInput"></a>

```java
public java.lang.String getMainJarFileUriInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

---

##### `mainJarFileUri`<sup>Required</sup> <a name="mainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobHadoopConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

---


### DataprocJobHiveConfigOutputReference <a name="DataprocJobHiveConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobHiveConfigOutputReference;

new DataprocJobHiveConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetContinueOnFailure">resetContinueOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryFileUri">resetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryList">resetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetScriptVariables">resetScriptVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinueOnFailure` <a name="resetContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetContinueOnFailure"></a>

```java
public void resetContinueOnFailure()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetQueryFileUri` <a name="resetQueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryFileUri"></a>

```java
public void resetQueryFileUri()
```

##### `resetQueryList` <a name="resetQueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryList"></a>

```java
public void resetQueryList()
```

##### `resetScriptVariables` <a name="resetScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetScriptVariables"></a>

```java
public void resetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailureInput">continueOnFailureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUriInput">queryFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryListInput">queryListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariablesInput">scriptVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailure">continueOnFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `continueOnFailureInput`<sup>Optional</sup> <a name="continueOnFailureInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailureInput"></a>

```java
public java.lang.Object getContinueOnFailureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUriInput`<sup>Optional</sup> <a name="queryFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUriInput"></a>

```java
public java.lang.String getQueryFileUriInput();
```

- *Type:* java.lang.String

---

##### `queryListInput`<sup>Optional</sup> <a name="queryListInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryListInput"></a>

```java
public java.util.List<java.lang.String> getQueryListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptVariablesInput`<sup>Optional</sup> <a name="scriptVariablesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `continueOnFailure`<sup>Required</sup> <a name="continueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailure"></a>

```java
public java.lang.Object getContinueOnFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUri`<sup>Required</sup> <a name="queryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

---

##### `queryList`<sup>Required</sup> <a name="queryList" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptVariables`<sup>Required</sup> <a name="scriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobHiveConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

---


### DataprocJobPigConfigLoggingConfigOutputReference <a name="DataprocJobPigConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPigConfigLoggingConfigOutputReference;

new DataprocJobPigConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driverLogLevelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driverLogLevelsInput`<sup>Optional</sup> <a name="driverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobPigConfigLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

---


### DataprocJobPigConfigOutputReference <a name="DataprocJobPigConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPigConfigOutputReference;

new DataprocJobPigConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetContinueOnFailure">resetContinueOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryFileUri">resetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryList">resetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetScriptVariables">resetScriptVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(DataprocJobPigConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

---

##### `resetContinueOnFailure` <a name="resetContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetContinueOnFailure"></a>

```java
public void resetContinueOnFailure()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetQueryFileUri` <a name="resetQueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryFileUri"></a>

```java
public void resetQueryFileUri()
```

##### `resetQueryList` <a name="resetQueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryList"></a>

```java
public void resetQueryList()
```

##### `resetScriptVariables` <a name="resetScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetScriptVariables"></a>

```java
public void resetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference">DataprocJobPigConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailureInput">continueOnFailureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUriInput">queryFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryListInput">queryListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariablesInput">scriptVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailure">continueOnFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfig"></a>

```java
public DataprocJobPigConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference">DataprocJobPigConfigLoggingConfigOutputReference</a>

---

##### `continueOnFailureInput`<sup>Optional</sup> <a name="continueOnFailureInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailureInput"></a>

```java
public java.lang.Object getContinueOnFailureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfigInput"></a>

```java
public DataprocJobPigConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUriInput`<sup>Optional</sup> <a name="queryFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUriInput"></a>

```java
public java.lang.String getQueryFileUriInput();
```

- *Type:* java.lang.String

---

##### `queryListInput`<sup>Optional</sup> <a name="queryListInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryListInput"></a>

```java
public java.util.List<java.lang.String> getQueryListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptVariablesInput`<sup>Optional</sup> <a name="scriptVariablesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `continueOnFailure`<sup>Required</sup> <a name="continueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailure"></a>

```java
public java.lang.Object getContinueOnFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUri`<sup>Required</sup> <a name="queryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

---

##### `queryList`<sup>Required</sup> <a name="queryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptVariables`<sup>Required</sup> <a name="scriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobPigConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

---


### DataprocJobPlacementOutputReference <a name="DataprocJobPlacementOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPlacementOutputReference;

new DataprocJobPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterUuid">clusterUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterUuid"></a>

```java
public java.lang.String getClusterUuid();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.internalValue"></a>

```java
public DataprocJobPlacement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

---


### DataprocJobPrestoConfigLoggingConfigOutputReference <a name="DataprocJobPrestoConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPrestoConfigLoggingConfigOutputReference;

new DataprocJobPrestoConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driverLogLevelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driverLogLevelsInput`<sup>Optional</sup> <a name="driverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobPrestoConfigLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

---


### DataprocJobPrestoConfigOutputReference <a name="DataprocJobPrestoConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPrestoConfigOutputReference;

new DataprocJobPrestoConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetClientTags">resetClientTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetContinueOnFailure">resetContinueOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryFileUri">resetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryList">resetQueryList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(DataprocJobPrestoConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

---

##### `resetClientTags` <a name="resetClientTags" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetClientTags"></a>

```java
public void resetClientTags()
```

##### `resetContinueOnFailure` <a name="resetContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetContinueOnFailure"></a>

```java
public void resetContinueOnFailure()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetOutputFormat"></a>

```java
public void resetOutputFormat()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetQueryFileUri` <a name="resetQueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryFileUri"></a>

```java
public void resetQueryFileUri()
```

##### `resetQueryList` <a name="resetQueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryList"></a>

```java
public void resetQueryList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference">DataprocJobPrestoConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTagsInput">clientTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailureInput">continueOnFailureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUriInput">queryFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryListInput">queryListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTags">clientTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailure">continueOnFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfig"></a>

```java
public DataprocJobPrestoConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference">DataprocJobPrestoConfigLoggingConfigOutputReference</a>

---

##### `clientTagsInput`<sup>Optional</sup> <a name="clientTagsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTagsInput"></a>

```java
public java.util.List<java.lang.String> getClientTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `continueOnFailureInput`<sup>Optional</sup> <a name="continueOnFailureInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailureInput"></a>

```java
public java.lang.Object getContinueOnFailureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfigInput"></a>

```java
public DataprocJobPrestoConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormatInput"></a>

```java
public java.lang.String getOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUriInput`<sup>Optional</sup> <a name="queryFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUriInput"></a>

```java
public java.lang.String getQueryFileUriInput();
```

- *Type:* java.lang.String

---

##### `queryListInput`<sup>Optional</sup> <a name="queryListInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryListInput"></a>

```java
public java.util.List<java.lang.String> getQueryListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientTags`<sup>Required</sup> <a name="clientTags" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTags"></a>

```java
public java.util.List<java.lang.String> getClientTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `continueOnFailure`<sup>Required</sup> <a name="continueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailure"></a>

```java
public java.lang.Object getContinueOnFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUri`<sup>Required</sup> <a name="queryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

---

##### `queryList`<sup>Required</sup> <a name="queryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobPrestoConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

---


### DataprocJobPysparkConfigLoggingConfigOutputReference <a name="DataprocJobPysparkConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPysparkConfigLoggingConfigOutputReference;

new DataprocJobPysparkConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driverLogLevelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driverLogLevelsInput`<sup>Optional</sup> <a name="driverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobPysparkConfigLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

---


### DataprocJobPysparkConfigOutputReference <a name="DataprocJobPysparkConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobPysparkConfigOutputReference;

new DataprocJobPysparkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetPythonFileUris">resetPythonFileUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(DataprocJobPysparkConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

---

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetPythonFileUris` <a name="resetPythonFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetPythonFileUris"></a>

```java
public void resetPythonFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference">DataprocJobPysparkConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUriInput">mainPythonFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUrisInput">pythonFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUri">mainPythonFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUris">pythonFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfig"></a>

```java
public DataprocJobPysparkConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference">DataprocJobPysparkConfigLoggingConfigOutputReference</a>

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfigInput"></a>

```java
public DataprocJobPysparkConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

---

##### `mainPythonFileUriInput`<sup>Optional</sup> <a name="mainPythonFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUriInput"></a>

```java
public java.lang.String getMainPythonFileUriInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pythonFileUrisInput`<sup>Optional</sup> <a name="pythonFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getPythonFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainPythonFileUri`<sup>Required</sup> <a name="mainPythonFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUri"></a>

```java
public java.lang.String getMainPythonFileUri();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pythonFileUris`<sup>Required</sup> <a name="pythonFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUris"></a>

```java
public java.util.List<java.lang.String> getPythonFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobPysparkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

---


### DataprocJobReferenceOutputReference <a name="DataprocJobReferenceOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobReferenceOutputReference;

new DataprocJobReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resetJobId">resetJobId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJobId` <a name="resetJobId" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resetJobId"></a>

```java
public void resetJobId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobIdInput">jobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobIdInput"></a>

```java
public java.lang.String getJobIdInput();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.internalValue"></a>

```java
public DataprocJobReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

---


### DataprocJobSchedulingOutputReference <a name="DataprocJobSchedulingOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobSchedulingOutputReference;

new DataprocJobSchedulingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHourInput">maxFailuresPerHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotalInput">maxFailuresTotalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHour">maxFailuresPerHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotal">maxFailuresTotal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxFailuresPerHourInput`<sup>Optional</sup> <a name="maxFailuresPerHourInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHourInput"></a>

```java
public java.lang.Number getMaxFailuresPerHourInput();
```

- *Type:* java.lang.Number

---

##### `maxFailuresTotalInput`<sup>Optional</sup> <a name="maxFailuresTotalInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotalInput"></a>

```java
public java.lang.Number getMaxFailuresTotalInput();
```

- *Type:* java.lang.Number

---

##### `maxFailuresPerHour`<sup>Required</sup> <a name="maxFailuresPerHour" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHour"></a>

```java
public java.lang.Number getMaxFailuresPerHour();
```

- *Type:* java.lang.Number

---

##### `maxFailuresTotal`<sup>Required</sup> <a name="maxFailuresTotal" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotal"></a>

```java
public java.lang.Number getMaxFailuresTotal();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.internalValue"></a>

```java
public DataprocJobScheduling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

---


### DataprocJobSparkConfigLoggingConfigOutputReference <a name="DataprocJobSparkConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobSparkConfigLoggingConfigOutputReference;

new DataprocJobSparkConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driverLogLevelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driverLogLevelsInput`<sup>Optional</sup> <a name="driverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobSparkConfigLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

---


### DataprocJobSparkConfigOutputReference <a name="DataprocJobSparkConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobSparkConfigOutputReference;

new DataprocJobSparkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainJarFileUri">resetMainJarFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(DataprocJobSparkConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

---

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainClass"></a>

```java
public void resetMainClass()
```

##### `resetMainJarFileUri` <a name="resetMainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainJarFileUri"></a>

```java
public void resetMainJarFileUri()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference">DataprocJobSparkConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUriInput">mainJarFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfig"></a>

```java
public DataprocJobSparkConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference">DataprocJobSparkConfigLoggingConfigOutputReference</a>

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfigInput"></a>

```java
public DataprocJobSparkConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClassInput"></a>

```java
public java.lang.String getMainClassInput();
```

- *Type:* java.lang.String

---

##### `mainJarFileUriInput`<sup>Optional</sup> <a name="mainJarFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUriInput"></a>

```java
public java.lang.String getMainJarFileUriInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

---

##### `mainJarFileUri`<sup>Required</sup> <a name="mainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobSparkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

---


### DataprocJobSparksqlConfigLoggingConfigOutputReference <a name="DataprocJobSparksqlConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobSparksqlConfigLoggingConfigOutputReference;

new DataprocJobSparksqlConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driverLogLevelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driverLogLevelsInput`<sup>Optional</sup> <a name="driverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobSparksqlConfigLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

---


### DataprocJobSparksqlConfigOutputReference <a name="DataprocJobSparksqlConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobSparksqlConfigOutputReference;

new DataprocJobSparksqlConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryFileUri">resetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryList">resetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetScriptVariables">resetScriptVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(DataprocJobSparksqlConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

---

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetQueryFileUri` <a name="resetQueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryFileUri"></a>

```java
public void resetQueryFileUri()
```

##### `resetQueryList` <a name="resetQueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryList"></a>

```java
public void resetQueryList()
```

##### `resetScriptVariables` <a name="resetScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetScriptVariables"></a>

```java
public void resetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference">DataprocJobSparksqlConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUriInput">queryFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryListInput">queryListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariablesInput">scriptVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfig"></a>

```java
public DataprocJobSparksqlConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference">DataprocJobSparksqlConfigLoggingConfigOutputReference</a>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfigInput"></a>

```java
public DataprocJobSparksqlConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUriInput`<sup>Optional</sup> <a name="queryFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUriInput"></a>

```java
public java.lang.String getQueryFileUriInput();
```

- *Type:* java.lang.String

---

##### `queryListInput`<sup>Optional</sup> <a name="queryListInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryListInput"></a>

```java
public java.util.List<java.lang.String> getQueryListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptVariablesInput`<sup>Optional</sup> <a name="scriptVariablesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUri`<sup>Required</sup> <a name="queryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

---

##### `queryList`<sup>Required</sup> <a name="queryList" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptVariables`<sup>Required</sup> <a name="scriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.internalValue"></a>

```java
public DataprocJobSparksqlConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

---


### DataprocJobStatusList <a name="DataprocJobStatusList" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobStatusList;

new DataprocJobStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.get"></a>

```java
public DataprocJobStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataprocJobStatusOutputReference <a name="DataprocJobStatusOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobStatusOutputReference;

new DataprocJobStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.stateStartTime">stateStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.substate">substate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatus">DataprocJobStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateStartTime`<sup>Required</sup> <a name="stateStartTime" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.stateStartTime"></a>

```java
public java.lang.String getStateStartTime();
```

- *Type:* java.lang.String

---

##### `substate`<sup>Required</sup> <a name="substate" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.substate"></a>

```java
public java.lang.String getSubstate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.internalValue"></a>

```java
public DataprocJobStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatus">DataprocJobStatus</a>

---


### DataprocJobTimeoutsOutputReference <a name="DataprocJobTimeoutsOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_job.DataprocJobTimeoutsOutputReference;

new DataprocJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>

---



