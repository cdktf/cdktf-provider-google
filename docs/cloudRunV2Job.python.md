# `cloudRunV2Job` Submodule <a name="`cloudRunV2Job` Submodule" id="@cdktf/provider-google.cloudRunV2Job"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunV2Job <a name="CloudRunV2Job" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job google_cloud_run_v2_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2Job(
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
  name: str,
  template: CloudRunV2JobTemplate,
  annotations: typing.Mapping[str] = None,
  binary_authorization: CloudRunV2JobBinaryAuthorization = None,
  client: str = None,
  client_version: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  launch_stage: str = None,
  project: str = None,
  timeouts: CloudRunV2JobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the cloud run job. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Job. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.client">client</a></code> | <code>str</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.clientVersion">client_version</a></code> | <code>str</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#id CloudRunV2Job#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.launchStage">launch_stage</a></code> | <code>str</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#project CloudRunV2Job#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.location"></a>

- *Type:* str

The location of the cloud run job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#location CloudRunV2Job#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.name"></a>

- *Type:* str

Name of the Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#template CloudRunV2Job#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected on new resources.
All system annotations in v1 now have a corresponding field in v2 Job.

This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#annotations CloudRunV2Job#annotations}

---

##### `binary_authorization`<sup>Optional</sup> <a name="binary_authorization" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.binaryAuthorization"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#binary_authorization CloudRunV2Job#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.client"></a>

- *Type:* str

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#client CloudRunV2Job#client}

---

##### `client_version`<sup>Optional</sup> <a name="client_version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.clientVersion"></a>

- *Type:* str

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#client_version CloudRunV2Job#client_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#id CloudRunV2Job#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#labels CloudRunV2Job#labels}

---

##### `launch_stage`<sup>Optional</sup> <a name="launch_stage" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.launchStage"></a>

- *Type:* str

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#launch_stage CloudRunV2Job#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#project CloudRunV2Job#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#timeouts CloudRunV2Job#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putBinaryAuthorization">put_binary_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTemplate">put_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetBinaryAuthorization">reset_binary_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetClient">reset_client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetClientVersion">reset_client_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetLaunchStage">reset_launch_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_binary_authorization` <a name="put_binary_authorization" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putBinaryAuthorization"></a>

```python
def put_binary_authorization(
  breakglass_justification: str = None,
  use_default: typing.Union[bool, IResolvable] = None
) -> None
```

###### `breakglass_justification`<sup>Optional</sup> <a name="breakglass_justification" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putBinaryAuthorization.parameter.breakglassJustification"></a>

- *Type:* str

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#breakglass_justification CloudRunV2Job#breakglass_justification}

---

###### `use_default`<sup>Optional</sup> <a name="use_default" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putBinaryAuthorization.parameter.useDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#use_default CloudRunV2Job#use_default}

---

##### `put_template` <a name="put_template" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTemplate"></a>

```python
def put_template(
  template: CloudRunV2JobTemplateTemplate,
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  parallelism: typing.Union[int, float] = None,
  task_count: typing.Union[int, float] = None
) -> None
```

###### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTemplate.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#template CloudRunV2Job#template}

---

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTemplate.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#annotations CloudRunV2Job#annotations}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTemplate.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter,
or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or
https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 ExecutionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#labels CloudRunV2Job#labels}

---

###### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTemplate.parameter.parallelism"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum desired number of tasks the execution should run at given time.

Must be <= taskCount. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#parallelism CloudRunV2Job#parallelism}

---

###### `task_count`<sup>Optional</sup> <a name="task_count" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTemplate.parameter.taskCount"></a>

- *Type:* typing.Union[int, float]

Specifies the desired number of tasks the execution should run.

Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#task_count CloudRunV2Job#task_count}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#create CloudRunV2Job#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#delete CloudRunV2Job#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#update CloudRunV2Job#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_binary_authorization` <a name="reset_binary_authorization" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetBinaryAuthorization"></a>

```python
def reset_binary_authorization() -> None
```

##### `reset_client` <a name="reset_client" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetClient"></a>

```python
def reset_client() -> None
```

##### `reset_client_version` <a name="reset_client_version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetClientVersion"></a>

```python
def reset_client_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_launch_stage` <a name="reset_launch_stage" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetLaunchStage"></a>

```python
def reset_launch_stage() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudRunV2Job resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2Job.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2Job.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2Job.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2Job.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudRunV2Job resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudRunV2Job to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudRunV2Job that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudRunV2Job to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference">CloudRunV2JobBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList">CloudRunV2JobConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.executionCount">execution_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.generation">generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.lastModifier">last_modifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.latestCreatedExecution">latest_created_execution</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList">CloudRunV2JobLatestCreatedExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.observedGeneration">observed_generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference">CloudRunV2JobTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terminalCondition">terminal_condition</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList">CloudRunV2JobTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference">CloudRunV2JobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.binaryAuthorizationInput">binary_authorization_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.clientInput">client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.clientVersionInput">client_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.launchStageInput">launch_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.templateInput">template_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.client">client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.clientVersion">client_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.launchStage">launch_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `binary_authorization`<sup>Required</sup> <a name="binary_authorization" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.binaryAuthorization"></a>

```python
binary_authorization: CloudRunV2JobBinaryAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference">CloudRunV2JobBinaryAuthorizationOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.conditions"></a>

```python
conditions: CloudRunV2JobConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList">CloudRunV2JobConditionsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `execution_count`<sup>Required</sup> <a name="execution_count" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.executionCount"></a>

```python
execution_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.generation"></a>

```python
generation: str
```

- *Type:* str

---

##### `last_modifier`<sup>Required</sup> <a name="last_modifier" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.lastModifier"></a>

```python
last_modifier: str
```

- *Type:* str

---

##### `latest_created_execution`<sup>Required</sup> <a name="latest_created_execution" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.latestCreatedExecution"></a>

```python
latest_created_execution: CloudRunV2JobLatestCreatedExecutionList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList">CloudRunV2JobLatestCreatedExecutionList</a>

---

##### `observed_generation`<sup>Required</sup> <a name="observed_generation" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.observedGeneration"></a>

```python
observed_generation: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.template"></a>

```python
template: CloudRunV2JobTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference">CloudRunV2JobTemplateOutputReference</a>

---

##### `terminal_condition`<sup>Required</sup> <a name="terminal_condition" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terminalCondition"></a>

```python
terminal_condition: CloudRunV2JobTerminalConditionList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList">CloudRunV2JobTerminalConditionList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.timeouts"></a>

```python
timeouts: CloudRunV2JobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference">CloudRunV2JobTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `binary_authorization_input`<sup>Optional</sup> <a name="binary_authorization_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.binaryAuthorizationInput"></a>

```python
binary_authorization_input: CloudRunV2JobBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a>

---

##### `client_input`<sup>Optional</sup> <a name="client_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.clientInput"></a>

```python
client_input: str
```

- *Type:* str

---

##### `client_version_input`<sup>Optional</sup> <a name="client_version_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.clientVersionInput"></a>

```python
client_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `launch_stage_input`<sup>Optional</sup> <a name="launch_stage_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.launchStageInput"></a>

```python
launch_stage_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.templateInput"></a>

```python
template_input: CloudRunV2JobTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudRunV2JobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.client"></a>

```python
client: str
```

- *Type:* str

---

##### `client_version`<sup>Required</sup> <a name="client_version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `launch_stage`<sup>Required</sup> <a name="launch_stage" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.launchStage"></a>

```python
launch_stage: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunV2JobBinaryAuthorization <a name="CloudRunV2JobBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobBinaryAuthorization(
  breakglass_justification: str = None,
  use_default: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization.property.breakglassJustification">breakglass_justification</a></code> | <code>str</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization.property.useDefault">use_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `breakglass_justification`<sup>Optional</sup> <a name="breakglass_justification" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization.property.breakglassJustification"></a>

```python
breakglass_justification: str
```

- *Type:* str

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#breakglass_justification CloudRunV2Job#breakglass_justification}

---

##### `use_default`<sup>Optional</sup> <a name="use_default" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization.property.useDefault"></a>

```python
use_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#use_default CloudRunV2Job#use_default}

---

### CloudRunV2JobConditions <a name="CloudRunV2JobConditions" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobConditions()
```


### CloudRunV2JobConfig <a name="CloudRunV2JobConfig" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  template: CloudRunV2JobTemplate,
  annotations: typing.Mapping[str] = None,
  binary_authorization: CloudRunV2JobBinaryAuthorization = None,
  client: str = None,
  client_version: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  launch_stage: str = None,
  project: str = None,
  timeouts: CloudRunV2JobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.location">location</a></code> | <code>str</code> | The location of the cloud run job. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.name">name</a></code> | <code>str</code> | Name of the Job. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.client">client</a></code> | <code>str</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.clientVersion">client_version</a></code> | <code>str</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#id CloudRunV2Job#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.launchStage">launch_stage</a></code> | <code>str</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#project CloudRunV2Job#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the cloud run job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#location CloudRunV2Job#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.template"></a>

```python
template: CloudRunV2JobTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#template CloudRunV2Job#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected on new resources.
All system annotations in v1 now have a corresponding field in v2 Job.

This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#annotations CloudRunV2Job#annotations}

---

##### `binary_authorization`<sup>Optional</sup> <a name="binary_authorization" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.binaryAuthorization"></a>

```python
binary_authorization: CloudRunV2JobBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#binary_authorization CloudRunV2Job#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.client"></a>

```python
client: str
```

- *Type:* str

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#client CloudRunV2Job#client}

---

##### `client_version`<sup>Optional</sup> <a name="client_version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#client_version CloudRunV2Job#client_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#id CloudRunV2Job#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#labels CloudRunV2Job#labels}

---

##### `launch_stage`<sup>Optional</sup> <a name="launch_stage" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.launchStage"></a>

```python
launch_stage: str
```

- *Type:* str

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#launch_stage CloudRunV2Job#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#project CloudRunV2Job#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.timeouts"></a>

```python
timeouts: CloudRunV2JobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#timeouts CloudRunV2Job#timeouts}

---

### CloudRunV2JobLatestCreatedExecution <a name="CloudRunV2JobLatestCreatedExecution" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecution.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobLatestCreatedExecution()
```


### CloudRunV2JobTemplate <a name="CloudRunV2JobTemplate" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplate(
  template: CloudRunV2JobTemplateTemplate,
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  parallelism: typing.Union[int, float] = None,
  task_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum desired number of tasks the execution should run at given time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | Specifies the desired number of tasks the execution should run. |

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.template"></a>

```python
template: CloudRunV2JobTemplateTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#template CloudRunV2Job#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#annotations CloudRunV2Job#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter,
or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or
https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 ExecutionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#labels CloudRunV2Job#labels}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum desired number of tasks the execution should run at given time.

Must be <= taskCount. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#parallelism CloudRunV2Job#parallelism}

---

##### `task_count`<sup>Optional</sup> <a name="task_count" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the desired number of tasks the execution should run.

Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#task_count CloudRunV2Job#task_count}

---

### CloudRunV2JobTemplateTemplate <a name="CloudRunV2JobTemplateTemplate" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplate(
  containers: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainers]] = None,
  encryption_key: str = None,
  execution_environment: str = None,
  max_retries: typing.Union[int, float] = None,
  service_account: str = None,
  timeout: str = None,
  volumes: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVolumes]] = None,
  vpc_access: CloudRunV2JobTemplateTemplateVpcAccess = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.containers">containers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>]]</code> | containers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.encryptionKey">encryption_key</a></code> | <code>str</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.executionEnvironment">execution_environment</a></code> | <code>str</code> | The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Number of retries allowed per Task, before marking this Task failed. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.serviceAccount">service_account</a></code> | <code>str</code> | Email address of the IAM service account associated with the Task of a Job. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.timeout">timeout</a></code> | <code>str</code> | Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.volumes">volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>]]</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.vpcAccess">vpc_access</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.containers"></a>

```python
containers: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>]]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#containers CloudRunV2Job#containers}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#encryption_key CloudRunV2Job#encryption_key}

---

##### `execution_environment`<sup>Optional</sup> <a name="execution_environment" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.executionEnvironment"></a>

```python
execution_environment: str
```

- *Type:* str

The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#execution_environment CloudRunV2Job#execution_environment}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of retries allowed per Task, before marking this Task failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#max_retries CloudRunV2Job#max_retries}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Email address of the IAM service account associated with the Task of a Job.

The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#service_account CloudRunV2Job#service_account}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers.

This applies per attempt of a task, meaning each retry can run for the full timeout.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#timeout CloudRunV2Job#timeout}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.volumes"></a>

```python
volumes: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#volumes CloudRunV2Job#volumes}

---

##### `vpc_access`<sup>Optional</sup> <a name="vpc_access" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.vpcAccess"></a>

```python
vpc_access: CloudRunV2JobTemplateTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#vpc_access CloudRunV2Job#vpc_access}

---

### CloudRunV2JobTemplateTemplateContainers <a name="CloudRunV2JobTemplateTemplateContainers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers(
  image: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  env: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersEnv]] = None,
  name: str = None,
  ports: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersPorts]] = None,
  resources: CloudRunV2JobTemplateTemplateContainersResources = None,
  volume_mounts: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersVolumeMounts]] = None,
  working_dir: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.image">image</a></code> | <code>str</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.args">args</a></code> | <code>typing.List[str]</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.command">command</a></code> | <code>typing.List[str]</code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.env">env</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>]]</code> | env block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.name">name</a></code> | <code>str</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.ports">ports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>]]</code> | ports block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.volumeMounts">volume_mounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>]]</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.workingDir">working_dir</a></code> | <code>str</code> | Container's working directory. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.image"></a>

```python
image: str
```

- *Type:* str

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#image CloudRunV2Job#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#args CloudRunV2Job#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#command CloudRunV2Job#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.env"></a>

```python
env: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#env CloudRunV2Job#env}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.ports"></a>

```python
ports: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>]]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#ports CloudRunV2Job#ports}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.resources"></a>

```python
resources: CloudRunV2JobTemplateTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#resources CloudRunV2Job#resources}

---

##### `volume_mounts`<sup>Optional</sup> <a name="volume_mounts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.volumeMounts"></a>

```python
volume_mounts: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>]]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#volume_mounts CloudRunV2Job#volume_mounts}

---

##### `working_dir`<sup>Optional</sup> <a name="working_dir" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#working_dir CloudRunV2Job#working_dir}

---

### CloudRunV2JobTemplateTemplateContainersEnv <a name="CloudRunV2JobTemplateTemplateContainersEnv" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv(
  name: str,
  value: str = None,
  value_source: CloudRunV2JobTemplateTemplateContainersEnvValueSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.property.name">name</a></code> | <code>str</code> | Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.property.value">value</a></code> | <code>str</code> | Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.property.valueSource">value_source</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.property.value"></a>

```python
value: str
```

- *Type:* str

Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#value CloudRunV2Job#value}

---

##### `value_source`<sup>Optional</sup> <a name="value_source" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.property.valueSource"></a>

```python
value_source: CloudRunV2JobTemplateTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#value_source CloudRunV2Job#value_source}

---

### CloudRunV2JobTemplateTemplateContainersEnvValueSource <a name="CloudRunV2JobTemplateTemplateContainersEnvValueSource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource(
  secret_key_ref: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource.property.secretKeyRef">secret_key_ref</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secret_key_ref`<sup>Optional</sup> <a name="secret_key_ref" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```python
secret_key_ref: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#secret_key_ref CloudRunV2Job#secret_key_ref}

---

### CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef <a name="CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef(
  secret: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.secret">secret</a></code> | <code>str</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.version">version</a></code> | <code>str</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```python
secret: str
```

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#secret CloudRunV2Job#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```python
version: str
```

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#version CloudRunV2Job#version}

---

### CloudRunV2JobTemplateTemplateContainersPorts <a name="CloudRunV2JobTemplateTemplateContainersPorts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts(
  container_port: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts.property.name">name</a></code> | <code>str</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `container_port`<sup>Optional</sup> <a name="container_port" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#container_port CloudRunV2Job#container_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts.property.name"></a>

```python
name: str
```

- *Type:* str

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

### CloudRunV2JobTemplateTemplateContainersResources <a name="CloudRunV2JobTemplateTemplateContainersResources" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources(
  limits: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | Only memory and CPU are supported. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Only memory and CPU are supported.

Use key 'cpu' for CPU limit and 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#limits CloudRunV2Job#limits}

---

### CloudRunV2JobTemplateTemplateContainersVolumeMounts <a name="CloudRunV2JobTemplateTemplateContainersVolumeMounts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts(
  mount_path: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts.property.mountPath">mount_path</a></code> | <code>str</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts.property.name">name</a></code> | <code>str</code> | This must match the Name of a Volume. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#mount_path CloudRunV2Job#mount_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts.property.name"></a>

```python
name: str
```

- *Type:* str

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

### CloudRunV2JobTemplateTemplateVolumes <a name="CloudRunV2JobTemplateTemplateVolumes" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes(
  name: str,
  cloud_sql_instance: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance = None,
  secret: CloudRunV2JobTemplateTemplateVolumesSecret = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.property.name">name</a></code> | <code>str</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a></code> | secret block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.property.name"></a>

```python
name: str
```

- *Type:* str

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

##### `cloud_sql_instance`<sup>Optional</sup> <a name="cloud_sql_instance" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#cloud_sql_instance CloudRunV2Job#cloud_sql_instance}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.property.secret"></a>

```python
secret: CloudRunV2JobTemplateTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#secret CloudRunV2Job#secret}

---

### CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance <a name="CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance(
  instances: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance.property.instances">instances</a></code> | <code>typing.List[str]</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#instances CloudRunV2Job#instances}

---

### CloudRunV2JobTemplateTemplateVolumesSecret <a name="CloudRunV2JobTemplateTemplateVolumesSecret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret(
  secret: str,
  default_mode: typing.Union[int, float] = None,
  items: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVolumesSecretItems]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.property.secret">secret</a></code> | <code>str</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.property.defaultMode">default_mode</a></code> | <code>typing.Union[int, float]</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>]]</code> | items block. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.property.secret"></a>

```python
secret: str
```

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#secret CloudRunV2Job#secret}

---

##### `default_mode`<sup>Optional</sup> <a name="default_mode" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.property.defaultMode"></a>

```python
default_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#default_mode CloudRunV2Job#default_mode}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVolumesSecretItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#items CloudRunV2Job#items}

---

### CloudRunV2JobTemplateTemplateVolumesSecretItems <a name="CloudRunV2JobTemplateTemplateVolumesSecretItems" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems(
  path: str,
  version: str,
  mode: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.property.path">path</a></code> | <code>str</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.property.version">version</a></code> | <code>str</code> | The Cloud Secret Manager secret version. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.property.mode">mode</a></code> | <code>typing.Union[int, float]</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.property.path"></a>

```python
path: str
```

- *Type:* str

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#path CloudRunV2Job#path}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.property.version"></a>

```python
version: str
```

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#version CloudRunV2Job#version}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.property.mode"></a>

```python
mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#mode CloudRunV2Job#mode}

---

### CloudRunV2JobTemplateTemplateVpcAccess <a name="CloudRunV2JobTemplateTemplateVpcAccess" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess(
  connector: str = None,
  egress: str = None,
  network_interfaces: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess.property.connector">connector</a></code> | <code>str</code> | VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess.property.egress">egress</a></code> | <code>str</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess.property.networkInterfaces">network_interfaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>]]</code> | network_interfaces block. |

---

##### `connector`<sup>Optional</sup> <a name="connector" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess.property.connector"></a>

```python
connector: str
```

- *Type:* str

VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#connector CloudRunV2Job#connector}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess.property.egress"></a>

```python
egress: str
```

- *Type:* str

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#egress CloudRunV2Job#egress}

---

##### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess.property.networkInterfaces"></a>

```python
network_interfaces: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#network_interfaces CloudRunV2Job#network_interfaces}

---

### CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces <a name="CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces(
  network: str = None,
  subnetwork: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.network">network</a></code> | <code>str</code> | The VPC network that the Cloud Run resource will be able to send traffic to. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.subnetwork">subnetwork</a></code> | <code>str</code> | The VPC subnetwork that the Cloud Run resource will get IPs from. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.tags">tags</a></code> | <code>typing.List[str]</code> | Network tags applied to this Cloud Run job. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.network"></a>

```python
network: str
```

- *Type:* str

The VPC network that the Cloud Run resource will be able to send traffic to.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
looked up from the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#network CloudRunV2Job#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The VPC subnetwork that the Cloud Run resource will get IPs from.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
subnetwork with the same name with the network will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#subnetwork CloudRunV2Job#subnetwork}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Network tags applied to this Cloud Run job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#tags CloudRunV2Job#tags}

---

### CloudRunV2JobTerminalCondition <a name="CloudRunV2JobTerminalCondition" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTerminalCondition()
```


### CloudRunV2JobTimeouts <a name="CloudRunV2JobTimeouts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#create CloudRunV2Job#create}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#delete CloudRunV2Job#delete}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#update CloudRunV2Job#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#create CloudRunV2Job#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#delete CloudRunV2Job#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#update CloudRunV2Job#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudRunV2JobBinaryAuthorizationOutputReference <a name="CloudRunV2JobBinaryAuthorizationOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resetBreakglassJustification">reset_breakglass_justification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resetUseDefault">reset_use_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_breakglass_justification` <a name="reset_breakglass_justification" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```python
def reset_breakglass_justification() -> None
```

##### `reset_use_default` <a name="reset_use_default" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resetUseDefault"></a>

```python
def reset_use_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustificationInput">breakglass_justification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.useDefaultInput">use_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustification">breakglass_justification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.useDefault">use_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `breakglass_justification_input`<sup>Optional</sup> <a name="breakglass_justification_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```python
breakglass_justification_input: str
```

- *Type:* str

---

##### `use_default_input`<sup>Optional</sup> <a name="use_default_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```python
use_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `breakglass_justification`<sup>Required</sup> <a name="breakglass_justification" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```python
breakglass_justification: str
```

- *Type:* str

---

##### `use_default`<sup>Required</sup> <a name="use_default" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.useDefault"></a>

```python
use_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2JobBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a>

---


### CloudRunV2JobConditionsList <a name="CloudRunV2JobConditionsList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2JobConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudRunV2JobConditionsOutputReference <a name="CloudRunV2JobConditionsOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.executionReason">execution_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.revisionReason">revision_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditions">CloudRunV2JobConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_reason`<sup>Required</sup> <a name="execution_reason" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.executionReason"></a>

```python
execution_reason: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `revision_reason`<sup>Required</sup> <a name="revision_reason" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.revisionReason"></a>

```python
revision_reason: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2JobConditions
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditions">CloudRunV2JobConditions</a>

---


### CloudRunV2JobLatestCreatedExecutionList <a name="CloudRunV2JobLatestCreatedExecutionList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2JobLatestCreatedExecutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudRunV2JobLatestCreatedExecutionOutputReference <a name="CloudRunV2JobLatestCreatedExecutionOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.completionTime">completion_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecution">CloudRunV2JobLatestCreatedExecution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `completion_time`<sup>Required</sup> <a name="completion_time" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.completionTime"></a>

```python
completion_time: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2JobLatestCreatedExecution
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecution">CloudRunV2JobLatestCreatedExecution</a>

---


### CloudRunV2JobTemplateOutputReference <a name="CloudRunV2JobTemplateOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate">put_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetParallelism">reset_parallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetTaskCount">reset_task_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_template` <a name="put_template" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate"></a>

```python
def put_template(
  containers: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainers]] = None,
  encryption_key: str = None,
  execution_environment: str = None,
  max_retries: typing.Union[int, float] = None,
  service_account: str = None,
  timeout: str = None,
  volumes: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVolumes]] = None,
  vpc_access: CloudRunV2JobTemplateTemplateVpcAccess = None
) -> None
```

###### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate.parameter.containers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>]]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#containers CloudRunV2Job#containers}

---

###### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate.parameter.encryptionKey"></a>

- *Type:* str

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#encryption_key CloudRunV2Job#encryption_key}

---

###### `execution_environment`<sup>Optional</sup> <a name="execution_environment" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate.parameter.executionEnvironment"></a>

- *Type:* str

The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#execution_environment CloudRunV2Job#execution_environment}

---

###### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Number of retries allowed per Task, before marking this Task failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#max_retries CloudRunV2Job#max_retries}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate.parameter.serviceAccount"></a>

- *Type:* str

Email address of the IAM service account associated with the Task of a Job.

The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#service_account CloudRunV2Job#service_account}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate.parameter.timeout"></a>

- *Type:* str

Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers.

This applies per attempt of a task, meaning each retry can run for the full timeout.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#timeout CloudRunV2Job#timeout}

---

###### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate.parameter.volumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#volumes CloudRunV2Job#volumes}

---

###### `vpc_access`<sup>Optional</sup> <a name="vpc_access" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate.parameter.vpcAccess"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#vpc_access CloudRunV2Job#vpc_access}

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_parallelism` <a name="reset_parallelism" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetParallelism"></a>

```python
def reset_parallelism() -> None
```

##### `reset_task_count` <a name="reset_task_count" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetTaskCount"></a>

```python
def reset_task_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference">CloudRunV2JobTemplateTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.parallelismInput">parallelism_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.taskCountInput">task_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.templateInput">template_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.template"></a>

```python
template: CloudRunV2JobTemplateTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference">CloudRunV2JobTemplateTemplateOutputReference</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `parallelism_input`<sup>Optional</sup> <a name="parallelism_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.parallelismInput"></a>

```python
parallelism_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_count_input`<sup>Optional</sup> <a name="task_count_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.taskCountInput"></a>

```python
task_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.templateInput"></a>

```python
template_input: CloudRunV2JobTemplateTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_count`<sup>Required</sup> <a name="task_count" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2JobTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a>

---


### CloudRunV2JobTemplateTemplateContainersEnvList <a name="CloudRunV2JobTemplateTemplateContainersEnvList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2JobTemplateTemplateContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>]]

---


### CloudRunV2JobTemplateTemplateContainersEnvOutputReference <a name="CloudRunV2JobTemplateTemplateContainersEnvOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.putValueSource">put_value_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValueSource">reset_value_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_source` <a name="put_value_source" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.putValueSource"></a>

```python
def put_value_source(
  secret_key_ref: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef = None
) -> None
```

###### `secret_key_ref`<sup>Optional</sup> <a name="secret_key_ref" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.putValueSource.parameter.secretKeyRef"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#secret_key_ref CloudRunV2Job#secret_key_ref}

---

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_source` <a name="reset_value_source" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValueSource"></a>

```python
def reset_value_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSource">value_source</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference">CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSourceInput">value_source_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_source`<sup>Required</sup> <a name="value_source" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSource"></a>

```python
value_source: CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference">CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value_source_input`<sup>Optional</sup> <a name="value_source_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```python
value_source_input: CloudRunV2JobTemplateTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2JobTemplateTemplateContainersEnv]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>]

---


### CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference <a name="CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">put_secret_key_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">reset_secret_key_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_key_ref` <a name="put_secret_key_ref" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```python
def put_secret_key_ref(
  secret: str,
  version: str
) -> None
```

###### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.secret"></a>

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#secret CloudRunV2Job#secret}

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.version"></a>

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#version CloudRunV2Job#version}

---

##### `reset_secret_key_ref` <a name="reset_secret_key_ref" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```python
def reset_secret_key_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">secret_key_ref</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">secret_key_ref_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_key_ref`<sup>Required</sup> <a name="secret_key_ref" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```python
secret_key_ref: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `secret_key_ref_input`<sup>Optional</sup> <a name="secret_key_ref_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```python
secret_key_ref_input: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2JobTemplateTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

---


### CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### CloudRunV2JobTemplateTemplateContainersList <a name="CloudRunV2JobTemplateTemplateContainersList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2JobTemplateTemplateContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>]]

---


### CloudRunV2JobTemplateTemplateContainersOutputReference <a name="CloudRunV2JobTemplateTemplateContainersOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putPorts">put_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putVolumeMounts">put_volume_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetVolumeMounts">reset_volume_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetWorkingDir">reset_working_dir</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putEnv"></a>

```python
def put_env(
  value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersEnv]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>]]

---

##### `put_ports` <a name="put_ports" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putPorts"></a>

```python
def put_ports(
  value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersPorts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>]]

---

##### `put_resources` <a name="put_resources" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putResources"></a>

```python
def put_resources(
  limits: typing.Mapping[str] = None
) -> None
```

###### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putResources.parameter.limits"></a>

- *Type:* typing.Mapping[str]

Only memory and CPU are supported.

Use key 'cpu' for CPU limit and 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#limits CloudRunV2Job#limits}

---

##### `put_volume_mounts` <a name="put_volume_mounts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putVolumeMounts"></a>

```python
def put_volume_mounts(
  value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersVolumeMounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>]]

---

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_volume_mounts` <a name="reset_volume_mounts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetVolumeMounts"></a>

```python
def reset_volume_mounts() -> None
```

##### `reset_working_dir` <a name="reset_working_dir" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetWorkingDir"></a>

```python
def reset_working_dir() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList">CloudRunV2JobTemplateTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList">CloudRunV2JobTemplateTemplateContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference">CloudRunV2JobTemplateTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMounts">volume_mounts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList">CloudRunV2JobTemplateTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.envInput">env_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.portsInput">ports_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.resourcesInput">resources_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMountsInput">volume_mounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDirInput">working_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDir">working_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.env"></a>

```python
env: CloudRunV2JobTemplateTemplateContainersEnvList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList">CloudRunV2JobTemplateTemplateContainersEnvList</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.ports"></a>

```python
ports: CloudRunV2JobTemplateTemplateContainersPortsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList">CloudRunV2JobTemplateTemplateContainersPortsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.resources"></a>

```python
resources: CloudRunV2JobTemplateTemplateContainersResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference">CloudRunV2JobTemplateTemplateContainersResourcesOutputReference</a>

---

##### `volume_mounts`<sup>Required</sup> <a name="volume_mounts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMounts"></a>

```python
volume_mounts: CloudRunV2JobTemplateTemplateContainersVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList">CloudRunV2JobTemplateTemplateContainersVolumeMountsList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.envInput"></a>

```python
env_input: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>]]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.portsInput"></a>

```python
ports_input: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>]]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.resourcesInput"></a>

```python
resources_input: CloudRunV2JobTemplateTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a>

---

##### `volume_mounts_input`<sup>Optional</sup> <a name="volume_mounts_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMountsInput"></a>

```python
volume_mounts_input: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>]]

---

##### `working_dir_input`<sup>Optional</sup> <a name="working_dir_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDirInput"></a>

```python
working_dir_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `working_dir`<sup>Required</sup> <a name="working_dir" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2JobTemplateTemplateContainers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>]

---


### CloudRunV2JobTemplateTemplateContainersPortsList <a name="CloudRunV2JobTemplateTemplateContainersPortsList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2JobTemplateTemplateContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>]]

---


### CloudRunV2JobTemplateTemplateContainersPortsOutputReference <a name="CloudRunV2JobTemplateTemplateContainersPortsOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetContainerPort">reset_container_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_port` <a name="reset_container_port" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetContainerPort"></a>

```python
def reset_container_port() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPortInput">container_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_port_input`<sup>Optional</sup> <a name="container_port_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPortInput"></a>

```python
container_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2JobTemplateTemplateContainersPorts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>]

---


### CloudRunV2JobTemplateTemplateContainersResourcesOutputReference <a name="CloudRunV2JobTemplateTemplateContainersResourcesOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resetLimits">reset_limits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limitsInput">limits_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```python
limits_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2JobTemplateTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a>

---


### CloudRunV2JobTemplateTemplateContainersVolumeMountsList <a name="CloudRunV2JobTemplateTemplateContainersVolumeMountsList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>]]

---


### CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference <a name="CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2JobTemplateTemplateContainersVolumeMounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>]

---


### CloudRunV2JobTemplateTemplateOutputReference <a name="CloudRunV2JobTemplateTemplateOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putContainers">put_containers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVpcAccess">put_vpc_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetContainers">reset_containers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetExecutionEnvironment">reset_execution_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetVpcAccess">reset_vpc_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_containers` <a name="put_containers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putContainers"></a>

```python
def put_containers(
  value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>]]

---

##### `put_volumes` <a name="put_volumes" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVolumes"></a>

```python
def put_volumes(
  value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>]]

---

##### `put_vpc_access` <a name="put_vpc_access" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVpcAccess"></a>

```python
def put_vpc_access(
  connector: str = None,
  egress: str = None,
  network_interfaces: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces]] = None
) -> None
```

###### `connector`<sup>Optional</sup> <a name="connector" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVpcAccess.parameter.connector"></a>

- *Type:* str

VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#connector CloudRunV2Job#connector}

---

###### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVpcAccess.parameter.egress"></a>

- *Type:* str

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#egress CloudRunV2Job#egress}

---

###### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVpcAccess.parameter.networkInterfaces"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#network_interfaces CloudRunV2Job#network_interfaces}

---

##### `reset_containers` <a name="reset_containers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetContainers"></a>

```python
def reset_containers() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_execution_environment` <a name="reset_execution_environment" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetExecutionEnvironment"></a>

```python
def reset_execution_environment() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```

##### `reset_vpc_access` <a name="reset_vpc_access" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetVpcAccess"></a>

```python
def reset_vpc_access() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList">CloudRunV2JobTemplateTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList">CloudRunV2JobTemplateTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.vpcAccess">vpc_access</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference">CloudRunV2JobTemplateTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.containersInput">containers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironmentInput">execution_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.volumesInput">volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.vpcAccessInput">vpc_access_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironment">execution_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.containers"></a>

```python
containers: CloudRunV2JobTemplateTemplateContainersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList">CloudRunV2JobTemplateTemplateContainersList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.volumes"></a>

```python
volumes: CloudRunV2JobTemplateTemplateVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList">CloudRunV2JobTemplateTemplateVolumesList</a>

---

##### `vpc_access`<sup>Required</sup> <a name="vpc_access" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.vpcAccess"></a>

```python
vpc_access: CloudRunV2JobTemplateTemplateVpcAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference">CloudRunV2JobTemplateTemplateVpcAccessOutputReference</a>

---

##### `containers_input`<sup>Optional</sup> <a name="containers_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.containersInput"></a>

```python
containers_input: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>]]

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `execution_environment_input`<sup>Optional</sup> <a name="execution_environment_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironmentInput"></a>

```python
execution_environment_input: str
```

- *Type:* str

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.volumesInput"></a>

```python
volumes_input: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>]]

---

##### `vpc_access_input`<sup>Optional</sup> <a name="vpc_access_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.vpcAccessInput"></a>

```python
vpc_access_input: CloudRunV2JobTemplateTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a>

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `execution_environment`<sup>Required</sup> <a name="execution_environment" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironment"></a>

```python
execution_environment: str
```

- *Type:* str

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2JobTemplateTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a>

---


### CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference <a name="CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">reset_instances</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instances` <a name="reset_instances" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```python
def reset_instances() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">instances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```python
instances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

---


### CloudRunV2JobTemplateTemplateVolumesList <a name="CloudRunV2JobTemplateTemplateVolumesList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2JobTemplateTemplateVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>]]

---


### CloudRunV2JobTemplateTemplateVolumesOutputReference <a name="CloudRunV2JobTemplateTemplateVolumesOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putCloudSqlInstance">put_cloud_sql_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resetCloudSqlInstance">reset_cloud_sql_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resetSecret">reset_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_sql_instance` <a name="put_cloud_sql_instance" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```python
def put_cloud_sql_instance(
  instances: typing.List[str] = None
) -> None
```

###### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putCloudSqlInstance.parameter.instances"></a>

- *Type:* typing.List[str]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#instances CloudRunV2Job#instances}

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret"></a>

```python
def put_secret(
  secret: str,
  default_mode: typing.Union[int, float] = None,
  items: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVolumesSecretItems]] = None
) -> None
```

###### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret.parameter.secret"></a>

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#secret CloudRunV2Job#secret}

---

###### `default_mode`<sup>Optional</sup> <a name="default_mode" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret.parameter.defaultMode"></a>

- *Type:* typing.Union[int, float]

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#default_mode CloudRunV2Job#default_mode}

---

###### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/cloud_run_v2_job#items CloudRunV2Job#items}

---

##### `reset_cloud_sql_instance` <a name="reset_cloud_sql_instance" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```python
def reset_cloud_sql_instance() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference">CloudRunV2JobTemplateTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstanceInput">cloud_sql_instance_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.secretInput">secret_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_sql_instance`<sup>Required</sup> <a name="cloud_sql_instance" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.secret"></a>

```python
secret: CloudRunV2JobTemplateTemplateVolumesSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference">CloudRunV2JobTemplateTemplateVolumesSecretOutputReference</a>

---

##### `cloud_sql_instance_input`<sup>Optional</sup> <a name="cloud_sql_instance_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```python
cloud_sql_instance_input: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.secretInput"></a>

```python
secret_input: CloudRunV2JobTemplateTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2JobTemplateTemplateVolumes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>]

---


### CloudRunV2JobTemplateTemplateVolumesSecretItemsList <a name="CloudRunV2JobTemplateTemplateVolumesSecretItemsList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVolumesSecretItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>]]

---


### CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference <a name="CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.modeInput">mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```python
mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```python
mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2JobTemplateTemplateVolumesSecretItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>]

---


### CloudRunV2JobTemplateTemplateVolumesSecretOutputReference <a name="CloudRunV2JobTemplateTemplateVolumesSecretOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.putItems">put_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetDefaultMode">reset_default_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVolumesSecretItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>]]

---

##### `reset_default_mode` <a name="reset_default_mode" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```python
def reset_default_mode() -> None
```

##### `reset_items` <a name="reset_items" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList">CloudRunV2JobTemplateTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultModeInput">default_mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultMode">default_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.items"></a>

```python
items: CloudRunV2JobTemplateTemplateVolumesSecretItemsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList">CloudRunV2JobTemplateTemplateVolumesSecretItemsList</a>

---

##### `default_mode_input`<sup>Optional</sup> <a name="default_mode_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```python
default_mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVolumesSecretItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>]]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `default_mode`<sup>Required</sup> <a name="default_mode" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```python
default_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2JobTemplateTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a>

---


### CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList <a name="CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>]]

---


### CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference <a name="CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>]

---


### CloudRunV2JobTemplateTemplateVpcAccessOutputReference <a name="CloudRunV2JobTemplateTemplateVpcAccessOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.putNetworkInterfaces">put_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetConnector">reset_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetNetworkInterfaces">reset_network_interfaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_interfaces` <a name="put_network_interfaces" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.putNetworkInterfaces"></a>

```python
def put_network_interfaces(
  value: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>]]

---

##### `reset_connector` <a name="reset_connector" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetConnector"></a>

```python
def reset_connector() -> None
```

##### `reset_egress` <a name="reset_egress" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_network_interfaces` <a name="reset_network_interfaces" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetNetworkInterfaces"></a>

```python
def reset_network_interfaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList">CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connectorInput">connector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egressInput">egress_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.networkInterfacesInput">network_interfaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connector">connector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egress">egress</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.networkInterfaces"></a>

```python
network_interfaces: CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList">CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList</a>

---

##### `connector_input`<sup>Optional</sup> <a name="connector_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connectorInput"></a>

```python
connector_input: str
```

- *Type:* str

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egressInput"></a>

```python
egress_input: str
```

- *Type:* str

---

##### `network_interfaces_input`<sup>Optional</sup> <a name="network_interfaces_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.networkInterfacesInput"></a>

```python
network_interfaces_input: typing.Union[IResolvable, typing.List[CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">CloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>]]

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connector"></a>

```python
connector: str
```

- *Type:* str

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egress"></a>

```python
egress: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2JobTemplateTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a>

---


### CloudRunV2JobTerminalConditionList <a name="CloudRunV2JobTerminalConditionList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTerminalConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2JobTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudRunV2JobTerminalConditionOutputReference <a name="CloudRunV2JobTerminalConditionOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.executionReason">execution_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.revisionReason">revision_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalCondition">CloudRunV2JobTerminalCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_reason`<sup>Required</sup> <a name="execution_reason" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.executionReason"></a>

```python
execution_reason: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `revision_reason`<sup>Required</sup> <a name="revision_reason" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.revisionReason"></a>

```python
revision_reason: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2JobTerminalCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalCondition">CloudRunV2JobTerminalCondition</a>

---


### CloudRunV2JobTimeoutsOutputReference <a name="CloudRunV2JobTimeoutsOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_job

cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2JobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a>]

---



