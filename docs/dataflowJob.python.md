# `dataflowJob` Submodule <a name="`dataflowJob` Submodule" id="@cdktf/provider-google.dataflowJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowJob <a name="DataflowJob" id="@cdktf/provider-google.dataflowJob.DataflowJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job google_dataflow_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataflow_job

dataflowJob.DataflowJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  temp_gcs_location: str,
  template_gcs_path: str,
  additional_experiments: typing.List[str] = None,
  enable_streaming_engine: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ip_configuration: str = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  machine_type: str = None,
  max_workers: typing.Union[int, float] = None,
  network: str = None,
  on_delete: str = None,
  parameters: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  service_account_email: str = None,
  skip_wait_on_job_termination: typing.Union[bool, IResolvable] = None,
  subnetwork: str = None,
  timeouts: DataflowJobTimeouts = None,
  transform_name_mapping: typing.Mapping[str] = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique name for the resource, required by Dataflow. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.tempGcsLocation">temp_gcs_location</a></code> | <code>str</code> | A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.templateGcsPath">template_gcs_path</a></code> | <code>str</code> | The Google Cloud Storage path to the Dataflow job template. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.additionalExperiments">additional_experiments</a></code> | <code>typing.List[str]</code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.enableStreamingEngine">enable_streaming_engine</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#id DataflowJob#id}. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.ipConfiguration">ip_configuration</a></code> | <code>str</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.machineType">machine_type</a></code> | <code>str</code> | The machine type to use for the job. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | The number of workers permitted to work on the job. More workers may improve processing speed at additional cost. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.network">network</a></code> | <code>str</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.onDelete">on_delete</a></code> | <code>str</code> | One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Key/Value pairs to be passed to the Dataflow job (as used in the template). |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.project">project</a></code> | <code>str</code> | The project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.region">region</a></code> | <code>str</code> | The region in which the created job should run. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.skipWaitOnJobTermination">skip_wait_on_job_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>str</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts">DataflowJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.transformNameMapping">transform_name_mapping</a></code> | <code>typing.Mapping[str]</code> | Only applicable when updating a pipeline. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The zone in which the created job should run. If it is not provided, the provider zone is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.name"></a>

- *Type:* str

A unique name for the resource, required by Dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#name DataflowJob#name}

---

##### `temp_gcs_location`<sup>Required</sup> <a name="temp_gcs_location" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.tempGcsLocation"></a>

- *Type:* str

A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#temp_gcs_location DataflowJob#temp_gcs_location}

---

##### `template_gcs_path`<sup>Required</sup> <a name="template_gcs_path" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.templateGcsPath"></a>

- *Type:* str

The Google Cloud Storage path to the Dataflow job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#template_gcs_path DataflowJob#template_gcs_path}

---

##### `additional_experiments`<sup>Optional</sup> <a name="additional_experiments" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.additionalExperiments"></a>

- *Type:* typing.List[str]

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#additional_experiments DataflowJob#additional_experiments}

---

##### `enable_streaming_engine`<sup>Optional</sup> <a name="enable_streaming_engine" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.enableStreamingEngine"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#enable_streaming_engine DataflowJob#enable_streaming_engine}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#id DataflowJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_configuration`<sup>Optional</sup> <a name="ip_configuration" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.ipConfiguration"></a>

- *Type:* str

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#ip_configuration DataflowJob#ip_configuration}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#kms_key_name DataflowJob#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#labels DataflowJob#labels}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.machineType"></a>

- *Type:* str

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#machine_type DataflowJob#machine_type}

---

##### `max_workers`<sup>Optional</sup> <a name="max_workers" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.maxWorkers"></a>

- *Type:* typing.Union[int, float]

The number of workers permitted to work on the job. More workers may improve processing speed at additional cost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#max_workers DataflowJob#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.network"></a>

- *Type:* str

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#network DataflowJob#network}

---

##### `on_delete`<sup>Optional</sup> <a name="on_delete" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.onDelete"></a>

- *Type:* str

One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#on_delete DataflowJob#on_delete}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Key/Value pairs to be passed to the Dataflow job (as used in the template).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#parameters DataflowJob#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.project"></a>

- *Type:* str

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#project DataflowJob#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.region"></a>

- *Type:* str

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#region DataflowJob#region}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.serviceAccountEmail"></a>

- *Type:* str

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#service_account_email DataflowJob#service_account_email}

---

##### `skip_wait_on_job_termination`<sup>Optional</sup> <a name="skip_wait_on_job_termination" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.skipWaitOnJobTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#skip_wait_on_job_termination DataflowJob#skip_wait_on_job_termination}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.subnetwork"></a>

- *Type:* str

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#subnetwork DataflowJob#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts">DataflowJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#timeouts DataflowJob#timeouts}

---

##### `transform_name_mapping`<sup>Optional</sup> <a name="transform_name_mapping" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.transformNameMapping"></a>

- *Type:* typing.Mapping[str]

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#transform_name_mapping DataflowJob#transform_name_mapping}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.zone"></a>

- *Type:* str

The zone in which the created job should run. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#zone DataflowJob#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetAdditionalExperiments">reset_additional_experiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetEnableStreamingEngine">reset_enable_streaming_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetIpConfiguration">reset_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetMaxWorkers">reset_max_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetOnDelete">reset_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetSkipWaitOnJobTermination">reset_skip_wait_on_job_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetTransformNameMapping">reset_transform_name_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataflowJob.DataflowJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataflowJob.DataflowJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataflowJob.DataflowJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataflowJob.DataflowJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataflowJob.DataflowJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataflowJob.DataflowJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataflowJob.DataflowJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataflowJob.DataflowJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataflowJob.DataflowJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataflowJob.DataflowJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataflowJob.DataflowJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataflowJob.DataflowJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataflowJob.DataflowJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataflowJob.DataflowJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataflowJob.DataflowJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataflowJob.DataflowJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataflowJob.DataflowJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataflowJob.DataflowJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataflowJob.DataflowJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataflowJob.DataflowJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataflowJob.DataflowJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataflowJob.DataflowJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataflowJob.DataflowJob.putTimeouts"></a>

```python
def put_timeouts(
  update: str = None
) -> None
```

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataflowJob.DataflowJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#update DataflowJob#update}.

---

##### `reset_additional_experiments` <a name="reset_additional_experiments" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetAdditionalExperiments"></a>

```python
def reset_additional_experiments() -> None
```

##### `reset_enable_streaming_engine` <a name="reset_enable_streaming_engine" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetEnableStreamingEngine"></a>

```python
def reset_enable_streaming_engine() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_configuration` <a name="reset_ip_configuration" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetIpConfiguration"></a>

```python
def reset_ip_configuration() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_max_workers` <a name="reset_max_workers" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetMaxWorkers"></a>

```python
def reset_max_workers() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_on_delete` <a name="reset_on_delete" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetOnDelete"></a>

```python
def reset_on_delete() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```

##### `reset_skip_wait_on_job_termination` <a name="reset_skip_wait_on_job_termination" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetSkipWaitOnJobTermination"></a>

```python
def reset_skip_wait_on_job_termination() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transform_name_mapping` <a name="reset_transform_name_mapping" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetTransformNameMapping"></a>

```python
def reset_transform_name_mapping() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataflowJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataflowJob.DataflowJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataflow_job

dataflowJob.DataflowJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataflowJob.DataflowJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataflowJob.DataflowJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataflow_job

dataflowJob.DataflowJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataflowJob.DataflowJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataflowJob.DataflowJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataflow_job

dataflowJob.DataflowJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataflowJob.DataflowJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataflowJob.DataflowJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dataflow_job

dataflowJob.DataflowJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataflowJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataflowJob.DataflowJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataflowJob.DataflowJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataflowJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataflowJob.DataflowJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataflowJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataflowJob.DataflowJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataflowJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference">DataflowJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.additionalExperimentsInput">additional_experiments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.enableStreamingEngineInput">enable_streaming_engine_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.ipConfigurationInput">ip_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.maxWorkersInput">max_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.onDeleteInput">on_delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.skipWaitOnJobTerminationInput">skip_wait_on_job_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.tempGcsLocationInput">temp_gcs_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.templateGcsPathInput">template_gcs_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts">DataflowJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.transformNameMappingInput">transform_name_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.additionalExperiments">additional_experiments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.enableStreamingEngine">enable_streaming_engine</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.ipConfiguration">ip_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.onDelete">on_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.skipWaitOnJobTermination">skip_wait_on_job_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.tempGcsLocation">temp_gcs_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.templateGcsPath">template_gcs_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.transformNameMapping">transform_name_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.timeouts"></a>

```python
timeouts: DataflowJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference">DataflowJobTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `additional_experiments_input`<sup>Optional</sup> <a name="additional_experiments_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.additionalExperimentsInput"></a>

```python
additional_experiments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_streaming_engine_input`<sup>Optional</sup> <a name="enable_streaming_engine_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.enableStreamingEngineInput"></a>

```python
enable_streaming_engine_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_configuration_input`<sup>Optional</sup> <a name="ip_configuration_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.ipConfigurationInput"></a>

```python
ip_configuration_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `max_workers_input`<sup>Optional</sup> <a name="max_workers_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.maxWorkersInput"></a>

```python
max_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `on_delete_input`<sup>Optional</sup> <a name="on_delete_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.onDeleteInput"></a>

```python
on_delete_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `skip_wait_on_job_termination_input`<sup>Optional</sup> <a name="skip_wait_on_job_termination_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.skipWaitOnJobTerminationInput"></a>

```python
skip_wait_on_job_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `temp_gcs_location_input`<sup>Optional</sup> <a name="temp_gcs_location_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.tempGcsLocationInput"></a>

```python
temp_gcs_location_input: str
```

- *Type:* str

---

##### `template_gcs_path_input`<sup>Optional</sup> <a name="template_gcs_path_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.templateGcsPathInput"></a>

```python
template_gcs_path_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataflowJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts">DataflowJobTimeouts</a>]

---

##### `transform_name_mapping_input`<sup>Optional</sup> <a name="transform_name_mapping_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.transformNameMappingInput"></a>

```python
transform_name_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `additional_experiments`<sup>Required</sup> <a name="additional_experiments" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.additionalExperiments"></a>

```python
additional_experiments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_streaming_engine`<sup>Required</sup> <a name="enable_streaming_engine" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.enableStreamingEngine"></a>

```python
enable_streaming_engine: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.ipConfiguration"></a>

```python
ip_configuration: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `max_workers`<sup>Required</sup> <a name="max_workers" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `on_delete`<sup>Required</sup> <a name="on_delete" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.onDelete"></a>

```python
on_delete: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `skip_wait_on_job_termination`<sup>Required</sup> <a name="skip_wait_on_job_termination" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.skipWaitOnJobTermination"></a>

```python
skip_wait_on_job_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `temp_gcs_location`<sup>Required</sup> <a name="temp_gcs_location" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.tempGcsLocation"></a>

```python
temp_gcs_location: str
```

- *Type:* str

---

##### `template_gcs_path`<sup>Required</sup> <a name="template_gcs_path" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.templateGcsPath"></a>

```python
template_gcs_path: str
```

- *Type:* str

---

##### `transform_name_mapping`<sup>Required</sup> <a name="transform_name_mapping" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.transformNameMapping"></a>

```python
transform_name_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowJobConfig <a name="DataflowJobConfig" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataflow_job

dataflowJob.DataflowJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  temp_gcs_location: str,
  template_gcs_path: str,
  additional_experiments: typing.List[str] = None,
  enable_streaming_engine: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ip_configuration: str = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  machine_type: str = None,
  max_workers: typing.Union[int, float] = None,
  network: str = None,
  on_delete: str = None,
  parameters: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  service_account_email: str = None,
  skip_wait_on_job_termination: typing.Union[bool, IResolvable] = None,
  subnetwork: str = None,
  timeouts: DataflowJobTimeouts = None,
  transform_name_mapping: typing.Mapping[str] = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.name">name</a></code> | <code>str</code> | A unique name for the resource, required by Dataflow. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.tempGcsLocation">temp_gcs_location</a></code> | <code>str</code> | A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.templateGcsPath">template_gcs_path</a></code> | <code>str</code> | The Google Cloud Storage path to the Dataflow job template. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.additionalExperiments">additional_experiments</a></code> | <code>typing.List[str]</code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.enableStreamingEngine">enable_streaming_engine</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#id DataflowJob#id}. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.ipConfiguration">ip_configuration</a></code> | <code>str</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.machineType">machine_type</a></code> | <code>str</code> | The machine type to use for the job. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | The number of workers permitted to work on the job. More workers may improve processing speed at additional cost. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.network">network</a></code> | <code>str</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.onDelete">on_delete</a></code> | <code>str</code> | One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Key/Value pairs to be passed to the Dataflow job (as used in the template). |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.project">project</a></code> | <code>str</code> | The project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.region">region</a></code> | <code>str</code> | The region in which the created job should run. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.skipWaitOnJobTermination">skip_wait_on_job_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts">DataflowJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.transformNameMapping">transform_name_mapping</a></code> | <code>typing.Mapping[str]</code> | Only applicable when updating a pipeline. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.zone">zone</a></code> | <code>str</code> | The zone in which the created job should run. If it is not provided, the provider zone is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique name for the resource, required by Dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#name DataflowJob#name}

---

##### `temp_gcs_location`<sup>Required</sup> <a name="temp_gcs_location" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.tempGcsLocation"></a>

```python
temp_gcs_location: str
```

- *Type:* str

A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#temp_gcs_location DataflowJob#temp_gcs_location}

---

##### `template_gcs_path`<sup>Required</sup> <a name="template_gcs_path" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.templateGcsPath"></a>

```python
template_gcs_path: str
```

- *Type:* str

The Google Cloud Storage path to the Dataflow job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#template_gcs_path DataflowJob#template_gcs_path}

---

##### `additional_experiments`<sup>Optional</sup> <a name="additional_experiments" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.additionalExperiments"></a>

```python
additional_experiments: typing.List[str]
```

- *Type:* typing.List[str]

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#additional_experiments DataflowJob#additional_experiments}

---

##### `enable_streaming_engine`<sup>Optional</sup> <a name="enable_streaming_engine" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.enableStreamingEngine"></a>

```python
enable_streaming_engine: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#enable_streaming_engine DataflowJob#enable_streaming_engine}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#id DataflowJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_configuration`<sup>Optional</sup> <a name="ip_configuration" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.ipConfiguration"></a>

```python
ip_configuration: str
```

- *Type:* str

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#ip_configuration DataflowJob#ip_configuration}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#kms_key_name DataflowJob#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#labels DataflowJob#labels}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#machine_type DataflowJob#machine_type}

---

##### `max_workers`<sup>Optional</sup> <a name="max_workers" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of workers permitted to work on the job. More workers may improve processing speed at additional cost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#max_workers DataflowJob#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#network DataflowJob#network}

---

##### `on_delete`<sup>Optional</sup> <a name="on_delete" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.onDelete"></a>

```python
on_delete: str
```

- *Type:* str

One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#on_delete DataflowJob#on_delete}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Key/Value pairs to be passed to the Dataflow job (as used in the template).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#parameters DataflowJob#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#project DataflowJob#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#region DataflowJob#region}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#service_account_email DataflowJob#service_account_email}

---

##### `skip_wait_on_job_termination`<sup>Optional</sup> <a name="skip_wait_on_job_termination" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.skipWaitOnJobTermination"></a>

```python
skip_wait_on_job_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#skip_wait_on_job_termination DataflowJob#skip_wait_on_job_termination}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#subnetwork DataflowJob#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.timeouts"></a>

```python
timeouts: DataflowJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts">DataflowJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#timeouts DataflowJob#timeouts}

---

##### `transform_name_mapping`<sup>Optional</sup> <a name="transform_name_mapping" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.transformNameMapping"></a>

```python
transform_name_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#transform_name_mapping DataflowJob#transform_name_mapping}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone in which the created job should run. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#zone DataflowJob#zone}

---

### DataflowJobTimeouts <a name="DataflowJobTimeouts" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataflow_job

dataflowJob.DataflowJobTimeouts(
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#update DataflowJob#update}. |

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/dataflow_job#update DataflowJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowJobTimeoutsOutputReference <a name="DataflowJobTimeoutsOutputReference" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataflow_job

dataflowJob.DataflowJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts">DataflowJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataflowJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts">DataflowJobTimeouts</a>]

---



