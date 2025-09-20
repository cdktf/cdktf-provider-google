# `cloudRunV2WorkerPool` Submodule <a name="`cloudRunV2WorkerPool` Submodule" id="@cdktf/provider-google.cloudRunV2WorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunV2WorkerPool <a name="CloudRunV2WorkerPool" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool google_cloud_run_v2_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPool(
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
  template: CloudRunV2WorkerPoolTemplate,
  annotations: typing.Mapping[str] = None,
  binary_authorization: CloudRunV2WorkerPoolBinaryAuthorization = None,
  client: str = None,
  client_version: str = None,
  custom_audiences: typing.List[str] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  instance_splits: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolInstanceSplits]] = None,
  labels: typing.Mapping[str] = None,
  launch_stage: str = None,
  project: str = None,
  scaling: CloudRunV2WorkerPoolScaling = None,
  timeouts: CloudRunV2WorkerPoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the cloud run worker pool. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the WorkerPool. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.client">client</a></code> | <code>str</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.clientVersion">client_version</a></code> | <code>str</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.customAudiences">custom_audiences</a></code> | <code>typing.List[str]</code> | One or more custom audiences that you want this worker pool to support. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description of the WorkerPool. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#id CloudRunV2WorkerPool#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.instanceSplits">instance_splits</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits">CloudRunV2WorkerPoolInstanceSplits</a>]]</code> | instance_splits block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.launchStage">launch_stage</a></code> | <code>str</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#project CloudRunV2WorkerPool#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a></code> | scaling block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts">CloudRunV2WorkerPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.location"></a>

- *Type:* str

The location of the cloud run worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#location CloudRunV2WorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.name"></a>

- *Type:* str

Name of the WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#name CloudRunV2WorkerPool#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#template CloudRunV2WorkerPool#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 WorkerPool.

This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#annotations CloudRunV2WorkerPool#annotations}

---

##### `binary_authorization`<sup>Optional</sup> <a name="binary_authorization" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.binaryAuthorization"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#binary_authorization CloudRunV2WorkerPool#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.client"></a>

- *Type:* str

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#client CloudRunV2WorkerPool#client}

---

##### `client_version`<sup>Optional</sup> <a name="client_version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.clientVersion"></a>

- *Type:* str

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#client_version CloudRunV2WorkerPool#client_version}

---

##### `custom_audiences`<sup>Optional</sup> <a name="custom_audiences" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.customAudiences"></a>

- *Type:* typing.List[str]

One or more custom audiences that you want this worker pool to support.

Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#custom_audiences CloudRunV2WorkerPool#custom_audiences}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the service.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the service,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the WorkerPool will fail.
When the field is set to false, deleting the WorkerPool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#deletion_protection CloudRunV2WorkerPool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.description"></a>

- *Type:* str

User-provided description of the WorkerPool. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#description CloudRunV2WorkerPool#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#id CloudRunV2WorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_splits`<sup>Optional</sup> <a name="instance_splits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.instanceSplits"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits">CloudRunV2WorkerPoolInstanceSplits</a>]]

instance_splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#instance_splits CloudRunV2WorkerPool#instance_splits}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with  'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 WorkerPool.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#labels CloudRunV2WorkerPool#labels}

---

##### `launch_stage`<sup>Optional</sup> <a name="launch_stage" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.launchStage"></a>

- *Type:* str

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#launch_stage CloudRunV2WorkerPool#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#project CloudRunV2WorkerPool#project}.

---

##### `scaling`<sup>Optional</sup> <a name="scaling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.scaling"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#scaling CloudRunV2WorkerPool#scaling}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts">CloudRunV2WorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#timeouts CloudRunV2WorkerPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putBinaryAuthorization">put_binary_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putInstanceSplits">put_instance_splits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putScaling">put_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate">put_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetBinaryAuthorization">reset_binary_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetClient">reset_client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetClientVersion">reset_client_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetCustomAudiences">reset_custom_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetInstanceSplits">reset_instance_splits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetLaunchStage">reset_launch_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetScaling">reset_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_binary_authorization` <a name="put_binary_authorization" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putBinaryAuthorization"></a>

```python
def put_binary_authorization(
  breakglass_justification: str = None,
  policy: str = None,
  use_default: typing.Union[bool, IResolvable] = None
) -> None
```

###### `breakglass_justification`<sup>Optional</sup> <a name="breakglass_justification" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putBinaryAuthorization.parameter.breakglassJustification"></a>

- *Type:* str

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#breakglass_justification CloudRunV2WorkerPool#breakglass_justification}

---

###### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putBinaryAuthorization.parameter.policy"></a>

- *Type:* str

The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#policy CloudRunV2WorkerPool#policy}

---

###### `use_default`<sup>Optional</sup> <a name="use_default" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putBinaryAuthorization.parameter.useDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#use_default CloudRunV2WorkerPool#use_default}

---

##### `put_instance_splits` <a name="put_instance_splits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putInstanceSplits"></a>

```python
def put_instance_splits(
  value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolInstanceSplits]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putInstanceSplits.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits">CloudRunV2WorkerPoolInstanceSplits</a>]]

---

##### `put_scaling` <a name="put_scaling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putScaling"></a>

```python
def put_scaling(
  manual_instance_count: typing.Union[int, float] = None,
  max_instance_count: typing.Union[int, float] = None,
  min_instance_count: typing.Union[int, float] = None,
  scaling_mode: str = None
) -> None
```

###### `manual_instance_count`<sup>Optional</sup> <a name="manual_instance_count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putScaling.parameter.manualInstanceCount"></a>

- *Type:* typing.Union[int, float]

The total number of instances in manual scaling mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#manual_instance_count CloudRunV2WorkerPool#manual_instance_count}

---

###### `max_instance_count`<sup>Optional</sup> <a name="max_instance_count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putScaling.parameter.maxInstanceCount"></a>

- *Type:* typing.Union[int, float]

The maximum count of instances distributed among revisions based on the specified instance split percentages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#max_instance_count CloudRunV2WorkerPool#max_instance_count}

---

###### `min_instance_count`<sup>Optional</sup> <a name="min_instance_count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putScaling.parameter.minInstanceCount"></a>

- *Type:* typing.Union[int, float]

The minimum count of instances distributed among revisions based on the specified instance split percentages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#min_instance_count CloudRunV2WorkerPool#min_instance_count}

---

###### `scaling_mode`<sup>Optional</sup> <a name="scaling_mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putScaling.parameter.scalingMode"></a>

- *Type:* str

The scaling mode for the worker pool. It defaults to MANUAL. Possible values: ["AUTOMATIC", "MANUAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#scaling_mode CloudRunV2WorkerPool#scaling_mode}

---

##### `put_template` <a name="put_template" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate"></a>

```python
def put_template(
  annotations: typing.Mapping[str] = None,
  containers: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainers]] = None,
  encryption_key: str = None,
  encryption_key_revocation_action: str = None,
  encryption_key_shutdown_duration: str = None,
  gpu_zonal_redundancy_disabled: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  node_selector: CloudRunV2WorkerPoolTemplateNodeSelector = None,
  revision: str = None,
  service_account: str = None,
  volumes: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVolumes]] = None,
  vpc_access: CloudRunV2WorkerPoolTemplateVpcAccess = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#annotations CloudRunV2WorkerPool#annotations}

---

###### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.containers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers">CloudRunV2WorkerPoolTemplateContainers</a>]]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#containers CloudRunV2WorkerPool#containers}

---

###### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.encryptionKey"></a>

- *Type:* str

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#encryption_key CloudRunV2WorkerPool#encryption_key}

---

###### `encryption_key_revocation_action`<sup>Optional</sup> <a name="encryption_key_revocation_action" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.encryptionKeyRevocationAction"></a>

- *Type:* str

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#encryption_key_revocation_action CloudRunV2WorkerPool#encryption_key_revocation_action}

---

###### `encryption_key_shutdown_duration`<sup>Optional</sup> <a name="encryption_key_shutdown_duration" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.encryptionKeyShutdownDuration"></a>

- *Type:* str

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#encryption_key_shutdown_duration CloudRunV2WorkerPool#encryption_key_shutdown_duration}

---

###### `gpu_zonal_redundancy_disabled`<sup>Optional</sup> <a name="gpu_zonal_redundancy_disabled" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.gpuZonalRedundancyDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if GPU zonal redundancy is disabled on this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#gpu_zonal_redundancy_disabled CloudRunV2WorkerPool#gpu_zonal_redundancy_disabled}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#labels CloudRunV2WorkerPool#labels}

---

###### `node_selector`<sup>Optional</sup> <a name="node_selector" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.nodeSelector"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a>

node_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#node_selector CloudRunV2WorkerPool#node_selector}

---

###### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.revision"></a>

- *Type:* str

The unique name for the revision.

If this field is omitted, it will be automatically generated based on the WorkerPool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#revision CloudRunV2WorkerPool#revision}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.serviceAccount"></a>

- *Type:* str

Email address of the IAM service account associated with the revision of the WorkerPool.

The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#service_account CloudRunV2WorkerPool#service_account}

---

###### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.volumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes">CloudRunV2WorkerPoolTemplateVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#volumes CloudRunV2WorkerPool#volumes}

---

###### `vpc_access`<sup>Optional</sup> <a name="vpc_access" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTemplate.parameter.vpcAccess"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#vpc_access CloudRunV2WorkerPool#vpc_access}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#create CloudRunV2WorkerPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#delete CloudRunV2WorkerPool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#update CloudRunV2WorkerPool#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_binary_authorization` <a name="reset_binary_authorization" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetBinaryAuthorization"></a>

```python
def reset_binary_authorization() -> None
```

##### `reset_client` <a name="reset_client" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetClient"></a>

```python
def reset_client() -> None
```

##### `reset_client_version` <a name="reset_client_version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetClientVersion"></a>

```python
def reset_client_version() -> None
```

##### `reset_custom_audiences` <a name="reset_custom_audiences" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetCustomAudiences"></a>

```python
def reset_custom_audiences() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_splits` <a name="reset_instance_splits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetInstanceSplits"></a>

```python
def reset_instance_splits() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_launch_stage` <a name="reset_launch_stage" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetLaunchStage"></a>

```python
def reset_launch_stage() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_scaling` <a name="reset_scaling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetScaling"></a>

```python
def reset_scaling() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudRunV2WorkerPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudRunV2WorkerPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudRunV2WorkerPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudRunV2WorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudRunV2WorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference">CloudRunV2WorkerPoolBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList">CloudRunV2WorkerPoolConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.generation">generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.instanceSplits">instance_splits</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList">CloudRunV2WorkerPoolInstanceSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.instanceSplitStatuses">instance_split_statuses</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList">CloudRunV2WorkerPoolInstanceSplitStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.lastModifier">last_modifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.latestCreatedRevision">latest_created_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.latestReadyRevision">latest_ready_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.observedGeneration">observed_generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference">CloudRunV2WorkerPoolScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference">CloudRunV2WorkerPoolTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terminalCondition">terminal_condition</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList">CloudRunV2WorkerPoolTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference">CloudRunV2WorkerPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.binaryAuthorizationInput">binary_authorization_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.clientInput">client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.clientVersionInput">client_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.customAudiencesInput">custom_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.instanceSplitsInput">instance_splits_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits">CloudRunV2WorkerPoolInstanceSplits</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.launchStageInput">launch_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.scalingInput">scaling_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.templateInput">template_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts">CloudRunV2WorkerPoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.client">client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.clientVersion">client_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.customAudiences">custom_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.launchStage">launch_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `binary_authorization`<sup>Required</sup> <a name="binary_authorization" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.binaryAuthorization"></a>

```python
binary_authorization: CloudRunV2WorkerPoolBinaryAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference">CloudRunV2WorkerPoolBinaryAuthorizationOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.conditions"></a>

```python
conditions: CloudRunV2WorkerPoolConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList">CloudRunV2WorkerPoolConditionsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.generation"></a>

```python
generation: str
```

- *Type:* str

---

##### `instance_splits`<sup>Required</sup> <a name="instance_splits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.instanceSplits"></a>

```python
instance_splits: CloudRunV2WorkerPoolInstanceSplitsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList">CloudRunV2WorkerPoolInstanceSplitsList</a>

---

##### `instance_split_statuses`<sup>Required</sup> <a name="instance_split_statuses" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.instanceSplitStatuses"></a>

```python
instance_split_statuses: CloudRunV2WorkerPoolInstanceSplitStatusesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList">CloudRunV2WorkerPoolInstanceSplitStatusesList</a>

---

##### `last_modifier`<sup>Required</sup> <a name="last_modifier" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.lastModifier"></a>

```python
last_modifier: str
```

- *Type:* str

---

##### `latest_created_revision`<sup>Required</sup> <a name="latest_created_revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.latestCreatedRevision"></a>

```python
latest_created_revision: str
```

- *Type:* str

---

##### `latest_ready_revision`<sup>Required</sup> <a name="latest_ready_revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.latestReadyRevision"></a>

```python
latest_ready_revision: str
```

- *Type:* str

---

##### `observed_generation`<sup>Required</sup> <a name="observed_generation" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.observedGeneration"></a>

```python
observed_generation: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `scaling`<sup>Required</sup> <a name="scaling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.scaling"></a>

```python
scaling: CloudRunV2WorkerPoolScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference">CloudRunV2WorkerPoolScalingOutputReference</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.template"></a>

```python
template: CloudRunV2WorkerPoolTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference">CloudRunV2WorkerPoolTemplateOutputReference</a>

---

##### `terminal_condition`<sup>Required</sup> <a name="terminal_condition" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terminalCondition"></a>

```python
terminal_condition: CloudRunV2WorkerPoolTerminalConditionList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList">CloudRunV2WorkerPoolTerminalConditionList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.timeouts"></a>

```python
timeouts: CloudRunV2WorkerPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference">CloudRunV2WorkerPoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `binary_authorization_input`<sup>Optional</sup> <a name="binary_authorization_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.binaryAuthorizationInput"></a>

```python
binary_authorization_input: CloudRunV2WorkerPoolBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a>

---

##### `client_input`<sup>Optional</sup> <a name="client_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.clientInput"></a>

```python
client_input: str
```

- *Type:* str

---

##### `client_version_input`<sup>Optional</sup> <a name="client_version_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.clientVersionInput"></a>

```python
client_version_input: str
```

- *Type:* str

---

##### `custom_audiences_input`<sup>Optional</sup> <a name="custom_audiences_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.customAudiencesInput"></a>

```python
custom_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_splits_input`<sup>Optional</sup> <a name="instance_splits_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.instanceSplitsInput"></a>

```python
instance_splits_input: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolInstanceSplits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits">CloudRunV2WorkerPoolInstanceSplits</a>]]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `launch_stage_input`<sup>Optional</sup> <a name="launch_stage_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.launchStageInput"></a>

```python
launch_stage_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `scaling_input`<sup>Optional</sup> <a name="scaling_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.scalingInput"></a>

```python
scaling_input: CloudRunV2WorkerPoolScaling
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a>

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.templateInput"></a>

```python
template_input: CloudRunV2WorkerPoolTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudRunV2WorkerPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts">CloudRunV2WorkerPoolTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.client"></a>

```python
client: str
```

- *Type:* str

---

##### `client_version`<sup>Required</sup> <a name="client_version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

---

##### `custom_audiences`<sup>Required</sup> <a name="custom_audiences" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.customAudiences"></a>

```python
custom_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `launch_stage`<sup>Required</sup> <a name="launch_stage" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.launchStage"></a>

```python
launch_stage: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunV2WorkerPoolBinaryAuthorization <a name="CloudRunV2WorkerPoolBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization(
  breakglass_justification: str = None,
  policy: str = None,
  use_default: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.property.breakglassJustification">breakglass_justification</a></code> | <code>str</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.property.policy">policy</a></code> | <code>str</code> | The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.property.useDefault">use_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `breakglass_justification`<sup>Optional</sup> <a name="breakglass_justification" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.property.breakglassJustification"></a>

```python
breakglass_justification: str
```

- *Type:* str

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#breakglass_justification CloudRunV2WorkerPool#breakglass_justification}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.property.policy"></a>

```python
policy: str
```

- *Type:* str

The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#policy CloudRunV2WorkerPool#policy}

---

##### `use_default`<sup>Optional</sup> <a name="use_default" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization.property.useDefault"></a>

```python
use_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#use_default CloudRunV2WorkerPool#use_default}

---

### CloudRunV2WorkerPoolConditions <a name="CloudRunV2WorkerPoolConditions" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditions()
```


### CloudRunV2WorkerPoolConfig <a name="CloudRunV2WorkerPoolConfig" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  template: CloudRunV2WorkerPoolTemplate,
  annotations: typing.Mapping[str] = None,
  binary_authorization: CloudRunV2WorkerPoolBinaryAuthorization = None,
  client: str = None,
  client_version: str = None,
  custom_audiences: typing.List[str] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  instance_splits: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolInstanceSplits]] = None,
  labels: typing.Mapping[str] = None,
  launch_stage: str = None,
  project: str = None,
  scaling: CloudRunV2WorkerPoolScaling = None,
  timeouts: CloudRunV2WorkerPoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.location">location</a></code> | <code>str</code> | The location of the cloud run worker pool. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.name">name</a></code> | <code>str</code> | Name of the WorkerPool. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.client">client</a></code> | <code>str</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.clientVersion">client_version</a></code> | <code>str</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.customAudiences">custom_audiences</a></code> | <code>typing.List[str]</code> | One or more custom audiences that you want this worker pool to support. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.description">description</a></code> | <code>str</code> | User-provided description of the WorkerPool. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#id CloudRunV2WorkerPool#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.instanceSplits">instance_splits</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits">CloudRunV2WorkerPoolInstanceSplits</a>]]</code> | instance_splits block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.launchStage">launch_stage</a></code> | <code>str</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#project CloudRunV2WorkerPool#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a></code> | scaling block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts">CloudRunV2WorkerPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the cloud run worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#location CloudRunV2WorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#name CloudRunV2WorkerPool#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.template"></a>

```python
template: CloudRunV2WorkerPoolTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#template CloudRunV2WorkerPool#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 WorkerPool.

This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#annotations CloudRunV2WorkerPool#annotations}

---

##### `binary_authorization`<sup>Optional</sup> <a name="binary_authorization" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.binaryAuthorization"></a>

```python
binary_authorization: CloudRunV2WorkerPoolBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#binary_authorization CloudRunV2WorkerPool#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.client"></a>

```python
client: str
```

- *Type:* str

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#client CloudRunV2WorkerPool#client}

---

##### `client_version`<sup>Optional</sup> <a name="client_version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#client_version CloudRunV2WorkerPool#client_version}

---

##### `custom_audiences`<sup>Optional</sup> <a name="custom_audiences" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.customAudiences"></a>

```python
custom_audiences: typing.List[str]
```

- *Type:* typing.List[str]

One or more custom audiences that you want this worker pool to support.

Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#custom_audiences CloudRunV2WorkerPool#custom_audiences}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the service.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the service,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the WorkerPool will fail.
When the field is set to false, deleting the WorkerPool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#deletion_protection CloudRunV2WorkerPool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description of the WorkerPool. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#description CloudRunV2WorkerPool#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#id CloudRunV2WorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_splits`<sup>Optional</sup> <a name="instance_splits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.instanceSplits"></a>

```python
instance_splits: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolInstanceSplits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits">CloudRunV2WorkerPoolInstanceSplits</a>]]

instance_splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#instance_splits CloudRunV2WorkerPool#instance_splits}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with  'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 WorkerPool.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#labels CloudRunV2WorkerPool#labels}

---

##### `launch_stage`<sup>Optional</sup> <a name="launch_stage" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.launchStage"></a>

```python
launch_stage: str
```

- *Type:* str

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#launch_stage CloudRunV2WorkerPool#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#project CloudRunV2WorkerPool#project}.

---

##### `scaling`<sup>Optional</sup> <a name="scaling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.scaling"></a>

```python
scaling: CloudRunV2WorkerPoolScaling
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#scaling CloudRunV2WorkerPool#scaling}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConfig.property.timeouts"></a>

```python
timeouts: CloudRunV2WorkerPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts">CloudRunV2WorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#timeouts CloudRunV2WorkerPool#timeouts}

---

### CloudRunV2WorkerPoolInstanceSplits <a name="CloudRunV2WorkerPoolInstanceSplits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits(
  percent: typing.Union[int, float] = None,
  revision: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | Specifies percent of the instance split to this Revision. This defaults to zero if unspecified. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.property.revision">revision</a></code> | <code>str</code> | Revision to which to assign this portion of instances, if split allocation is by revision. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.property.type">type</a></code> | <code>str</code> | The allocation type for this instance split. Possible values: ["INSTANCE_SPLIT_ALLOCATION_TYPE_LATEST", "INSTANCE_SPLIT_ALLOCATION_TYPE_REVISION"]. |

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies percent of the instance split to this Revision. This defaults to zero if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#percent CloudRunV2WorkerPool#percent}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.property.revision"></a>

```python
revision: str
```

- *Type:* str

Revision to which to assign this portion of instances, if split allocation is by revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#revision CloudRunV2WorkerPool#revision}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits.property.type"></a>

```python
type: str
```

- *Type:* str

The allocation type for this instance split. Possible values: ["INSTANCE_SPLIT_ALLOCATION_TYPE_LATEST", "INSTANCE_SPLIT_ALLOCATION_TYPE_REVISION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#type CloudRunV2WorkerPool#type}

---

### CloudRunV2WorkerPoolInstanceSplitStatuses <a name="CloudRunV2WorkerPoolInstanceSplitStatuses" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatuses.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatuses()
```


### CloudRunV2WorkerPoolScaling <a name="CloudRunV2WorkerPoolScaling" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling(
  manual_instance_count: typing.Union[int, float] = None,
  max_instance_count: typing.Union[int, float] = None,
  min_instance_count: typing.Union[int, float] = None,
  scaling_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.manualInstanceCount">manual_instance_count</a></code> | <code>typing.Union[int, float]</code> | The total number of instances in manual scaling mode. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | The maximum count of instances distributed among revisions based on the specified instance split percentages. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | The minimum count of instances distributed among revisions based on the specified instance split percentages. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.scalingMode">scaling_mode</a></code> | <code>str</code> | The scaling mode for the worker pool. It defaults to MANUAL. Possible values: ["AUTOMATIC", "MANUAL"]. |

---

##### `manual_instance_count`<sup>Optional</sup> <a name="manual_instance_count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.manualInstanceCount"></a>

```python
manual_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total number of instances in manual scaling mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#manual_instance_count CloudRunV2WorkerPool#manual_instance_count}

---

##### `max_instance_count`<sup>Optional</sup> <a name="max_instance_count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum count of instances distributed among revisions based on the specified instance split percentages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#max_instance_count CloudRunV2WorkerPool#max_instance_count}

---

##### `min_instance_count`<sup>Optional</sup> <a name="min_instance_count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum count of instances distributed among revisions based on the specified instance split percentages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#min_instance_count CloudRunV2WorkerPool#min_instance_count}

---

##### `scaling_mode`<sup>Optional</sup> <a name="scaling_mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling.property.scalingMode"></a>

```python
scaling_mode: str
```

- *Type:* str

The scaling mode for the worker pool. It defaults to MANUAL. Possible values: ["AUTOMATIC", "MANUAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#scaling_mode CloudRunV2WorkerPool#scaling_mode}

---

### CloudRunV2WorkerPoolTemplate <a name="CloudRunV2WorkerPoolTemplate" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate(
  annotations: typing.Mapping[str] = None,
  containers: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainers]] = None,
  encryption_key: str = None,
  encryption_key_revocation_action: str = None,
  encryption_key_shutdown_duration: str = None,
  gpu_zonal_redundancy_disabled: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  node_selector: CloudRunV2WorkerPoolTemplateNodeSelector = None,
  revision: str = None,
  service_account: str = None,
  volumes: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVolumes]] = None,
  vpc_access: CloudRunV2WorkerPoolTemplateVpcAccess = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.containers">containers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers">CloudRunV2WorkerPoolTemplateContainers</a>]]</code> | containers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.encryptionKey">encryption_key</a></code> | <code>str</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.encryptionKeyRevocationAction">encryption_key_revocation_action</a></code> | <code>str</code> | The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.encryptionKeyShutdownDuration">encryption_key_shutdown_duration</a></code> | <code>str</code> | If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.gpuZonalRedundancyDisabled">gpu_zonal_redundancy_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if GPU zonal redundancy is disabled on this revision. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.nodeSelector">node_selector</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a></code> | node_selector block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.revision">revision</a></code> | <code>str</code> | The unique name for the revision. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.serviceAccount">service_account</a></code> | <code>str</code> | Email address of the IAM service account associated with the revision of the WorkerPool. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.volumes">volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes">CloudRunV2WorkerPoolTemplateVolumes</a>]]</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.vpcAccess">vpc_access</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#annotations CloudRunV2WorkerPool#annotations}

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.containers"></a>

```python
containers: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers">CloudRunV2WorkerPoolTemplateContainers</a>]]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#containers CloudRunV2WorkerPool#containers}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#encryption_key CloudRunV2WorkerPool#encryption_key}

---

##### `encryption_key_revocation_action`<sup>Optional</sup> <a name="encryption_key_revocation_action" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.encryptionKeyRevocationAction"></a>

```python
encryption_key_revocation_action: str
```

- *Type:* str

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#encryption_key_revocation_action CloudRunV2WorkerPool#encryption_key_revocation_action}

---

##### `encryption_key_shutdown_duration`<sup>Optional</sup> <a name="encryption_key_shutdown_duration" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.encryptionKeyShutdownDuration"></a>

```python
encryption_key_shutdown_duration: str
```

- *Type:* str

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#encryption_key_shutdown_duration CloudRunV2WorkerPool#encryption_key_shutdown_duration}

---

##### `gpu_zonal_redundancy_disabled`<sup>Optional</sup> <a name="gpu_zonal_redundancy_disabled" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.gpuZonalRedundancyDisabled"></a>

```python
gpu_zonal_redundancy_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if GPU zonal redundancy is disabled on this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#gpu_zonal_redundancy_disabled CloudRunV2WorkerPool#gpu_zonal_redundancy_disabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#labels CloudRunV2WorkerPool#labels}

---

##### `node_selector`<sup>Optional</sup> <a name="node_selector" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.nodeSelector"></a>

```python
node_selector: CloudRunV2WorkerPoolTemplateNodeSelector
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a>

node_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#node_selector CloudRunV2WorkerPool#node_selector}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.revision"></a>

```python
revision: str
```

- *Type:* str

The unique name for the revision.

If this field is omitted, it will be automatically generated based on the WorkerPool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#revision CloudRunV2WorkerPool#revision}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Email address of the IAM service account associated with the revision of the WorkerPool.

The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#service_account CloudRunV2WorkerPool#service_account}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.volumes"></a>

```python
volumes: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes">CloudRunV2WorkerPoolTemplateVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#volumes CloudRunV2WorkerPool#volumes}

---

##### `vpc_access`<sup>Optional</sup> <a name="vpc_access" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate.property.vpcAccess"></a>

```python
vpc_access: CloudRunV2WorkerPoolTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#vpc_access CloudRunV2WorkerPool#vpc_access}

---

### CloudRunV2WorkerPoolTemplateContainers <a name="CloudRunV2WorkerPoolTemplateContainers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers(
  image: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  depends_on: typing.List[str] = None,
  env: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainersEnv]] = None,
  name: str = None,
  resources: CloudRunV2WorkerPoolTemplateContainersResources = None,
  volume_mounts: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainersVolumeMounts]] = None,
  working_dir: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.image">image</a></code> | <code>str</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.args">args</a></code> | <code>typing.List[str]</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.command">command</a></code> | <code>typing.List[str]</code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | Containers which should be started before this container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.env">env</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv">CloudRunV2WorkerPoolTemplateContainersEnv</a>]]</code> | env block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.name">name</a></code> | <code>str</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.volumeMounts">volume_mounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts">CloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>]]</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.workingDir">working_dir</a></code> | <code>str</code> | Container's working directory. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.image"></a>

```python
image: str
```

- *Type:* str

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#image CloudRunV2WorkerPool#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#args CloudRunV2WorkerPool#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#command CloudRunV2WorkerPool#command}

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

Containers which should be started before this container.

If specified the container will wait to start until all containers with the listed names are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#depends_on CloudRunV2WorkerPool#depends_on}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.env"></a>

```python
env: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainersEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv">CloudRunV2WorkerPoolTemplateContainersEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#env CloudRunV2WorkerPool#env}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#name CloudRunV2WorkerPool#name}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.resources"></a>

```python
resources: CloudRunV2WorkerPoolTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#resources CloudRunV2WorkerPool#resources}

---

##### `volume_mounts`<sup>Optional</sup> <a name="volume_mounts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.volumeMounts"></a>

```python
volume_mounts: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts">CloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>]]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#volume_mounts CloudRunV2WorkerPool#volume_mounts}

---

##### `working_dir`<sup>Optional</sup> <a name="working_dir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#working_dir CloudRunV2WorkerPool#working_dir}

---

### CloudRunV2WorkerPoolTemplateContainersEnv <a name="CloudRunV2WorkerPoolTemplateContainersEnv" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv(
  name: str,
  value: str = None,
  value_source: CloudRunV2WorkerPoolTemplateContainersEnvValueSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.property.name">name</a></code> | <code>str</code> | Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.property.value">value</a></code> | <code>str</code> | Literal value of the environment variable. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.property.valueSource">value_source</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#name CloudRunV2WorkerPool#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.property.value"></a>

```python
value: str
```

- *Type:* str

Literal value of the environment variable.

Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#value CloudRunV2WorkerPool#value}

---

##### `value_source`<sup>Optional</sup> <a name="value_source" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv.property.valueSource"></a>

```python
value_source: CloudRunV2WorkerPoolTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#value_source CloudRunV2WorkerPool#value_source}

---

### CloudRunV2WorkerPoolTemplateContainersEnvValueSource <a name="CloudRunV2WorkerPoolTemplateContainersEnvValueSource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource(
  secret_key_ref: CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource.property.secretKeyRef">secret_key_ref</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secret_key_ref`<sup>Optional</sup> <a name="secret_key_ref" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```python
secret_key_ref: CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#secret_key_ref CloudRunV2WorkerPool#secret_key_ref}

---

### CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef <a name="CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef(
  secret: str,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.secret">secret</a></code> | <code>str</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.version">version</a></code> | <code>str</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```python
secret: str
```

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#secret CloudRunV2WorkerPool#secret}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```python
version: str
```

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#version CloudRunV2WorkerPool#version}

---

### CloudRunV2WorkerPoolTemplateContainersResources <a name="CloudRunV2WorkerPoolTemplateContainersResources" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources(
  limits: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | Only memory, CPU, and nvidia.com/gpu are supported. Use key 'cpu' for CPU limit, 'memory' for memory limit, 'nvidia.com/gpu' for gpu limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Only memory, CPU, and nvidia.com/gpu are supported. Use key 'cpu' for CPU limit, 'memory' for memory limit, 'nvidia.com/gpu' for gpu limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#limits CloudRunV2WorkerPool#limits}

---

### CloudRunV2WorkerPoolTemplateContainersVolumeMounts <a name="CloudRunV2WorkerPoolTemplateContainersVolumeMounts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts(
  mount_path: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.mountPath">mount_path</a></code> | <code>str</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.name">name</a></code> | <code>str</code> | This must match the Name of a Volume. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#mount_path CloudRunV2WorkerPool#mount_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.name"></a>

```python
name: str
```

- *Type:* str

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#name CloudRunV2WorkerPool#name}

---

### CloudRunV2WorkerPoolTemplateNodeSelector <a name="CloudRunV2WorkerPoolTemplateNodeSelector" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector(
  accelerator: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector.property.accelerator">accelerator</a></code> | <code>str</code> | The GPU to attach to an instance. See https://cloud.google.com/run/docs/configuring/services/gpu for configuring GPU. |

---

##### `accelerator`<sup>Required</sup> <a name="accelerator" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector.property.accelerator"></a>

```python
accelerator: str
```

- *Type:* str

The GPU to attach to an instance. See https://cloud.google.com/run/docs/configuring/services/gpu for configuring GPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#accelerator CloudRunV2WorkerPool#accelerator}

---

### CloudRunV2WorkerPoolTemplateVolumes <a name="CloudRunV2WorkerPoolTemplateVolumes" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes(
  name: str,
  cloud_sql_instance: CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance = None,
  empty_dir: CloudRunV2WorkerPoolTemplateVolumesEmptyDir = None,
  gcs: CloudRunV2WorkerPoolTemplateVolumesGcs = None,
  nfs: CloudRunV2WorkerPoolTemplateVolumesNfs = None,
  secret: CloudRunV2WorkerPoolTemplateVolumesSecret = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.name">name</a></code> | <code>str</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.emptyDir">empty_dir</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | secret block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.name"></a>

```python
name: str
```

- *Type:* str

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#name CloudRunV2WorkerPool#name}

---

##### `cloud_sql_instance`<sup>Optional</sup> <a name="cloud_sql_instance" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#cloud_sql_instance CloudRunV2WorkerPool#cloud_sql_instance}

---

##### `empty_dir`<sup>Optional</sup> <a name="empty_dir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.emptyDir"></a>

```python
empty_dir: CloudRunV2WorkerPoolTemplateVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#empty_dir CloudRunV2WorkerPool#empty_dir}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.gcs"></a>

```python
gcs: CloudRunV2WorkerPoolTemplateVolumesGcs
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#gcs CloudRunV2WorkerPool#gcs}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.nfs"></a>

```python
nfs: CloudRunV2WorkerPoolTemplateVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#nfs CloudRunV2WorkerPool#nfs}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes.property.secret"></a>

```python
secret: CloudRunV2WorkerPoolTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#secret CloudRunV2WorkerPool#secret}

---

### CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance <a name="CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance(
  instances: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.property.instances">instances</a></code> | <code>typing.List[str]</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#instances CloudRunV2WorkerPool#instances}

---

### CloudRunV2WorkerPoolTemplateVolumesEmptyDir <a name="CloudRunV2WorkerPoolTemplateVolumesEmptyDir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir(
  medium: str = None,
  size_limit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.medium">medium</a></code> | <code>str</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.sizeLimit">size_limit</a></code> | <code>str</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `medium`<sup>Optional</sup> <a name="medium" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.medium"></a>

```python
medium: str
```

- *Type:* str

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#medium CloudRunV2WorkerPool#medium}

---

##### `size_limit`<sup>Optional</sup> <a name="size_limit" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.sizeLimit"></a>

```python
size_limit: str
```

- *Type:* str

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#size_limit CloudRunV2WorkerPool#size_limit}

---

### CloudRunV2WorkerPoolTemplateVolumesGcs <a name="CloudRunV2WorkerPoolTemplateVolumesGcs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs(
  bucket: str,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs.property.bucket">bucket</a></code> | <code>str</code> | GCS Bucket name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, mount the GCS bucket as read-only. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#bucket CloudRunV2WorkerPool#bucket}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#read_only CloudRunV2WorkerPool#read_only}

---

### CloudRunV2WorkerPoolTemplateVolumesNfs <a name="CloudRunV2WorkerPoolTemplateVolumesNfs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs(
  path: str,
  server: str,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.property.path">path</a></code> | <code>str</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.property.server">server</a></code> | <code>str</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, mount the NFS volume as read only. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.property.path"></a>

```python
path: str
```

- *Type:* str

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#path CloudRunV2WorkerPool#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.property.server"></a>

```python
server: str
```

- *Type:* str

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#server CloudRunV2WorkerPool#server}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#read_only CloudRunV2WorkerPool#read_only}

---

### CloudRunV2WorkerPoolTemplateVolumesSecret <a name="CloudRunV2WorkerPoolTemplateVolumesSecret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret(
  secret: str,
  default_mode: typing.Union[int, float] = None,
  items: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVolumesSecretItems]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.property.secret">secret</a></code> | <code>str</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.property.defaultMode">default_mode</a></code> | <code>typing.Union[int, float]</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems">CloudRunV2WorkerPoolTemplateVolumesSecretItems</a>]]</code> | items block. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.property.secret"></a>

```python
secret: str
```

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#secret CloudRunV2WorkerPool#secret}

---

##### `default_mode`<sup>Optional</sup> <a name="default_mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.property.defaultMode"></a>

```python
default_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#default_mode CloudRunV2WorkerPool#default_mode}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVolumesSecretItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems">CloudRunV2WorkerPoolTemplateVolumesSecretItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#items CloudRunV2WorkerPool#items}

---

### CloudRunV2WorkerPoolTemplateVolumesSecretItems <a name="CloudRunV2WorkerPoolTemplateVolumesSecretItems" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems(
  path: str,
  mode: typing.Union[int, float] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.property.path">path</a></code> | <code>str</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.property.mode">mode</a></code> | <code>typing.Union[int, float]</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.property.version">version</a></code> | <code>str</code> | The Cloud Secret Manager secret version. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.property.path"></a>

```python
path: str
```

- *Type:* str

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#path CloudRunV2WorkerPool#path}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.property.mode"></a>

```python
mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#mode CloudRunV2WorkerPool#mode}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems.property.version"></a>

```python
version: str
```

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#version CloudRunV2WorkerPool#version}

---

### CloudRunV2WorkerPoolTemplateVpcAccess <a name="CloudRunV2WorkerPoolTemplateVpcAccess" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess(
  egress: str = None,
  network_interfaces: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess.property.egress">egress</a></code> | <code>str</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess.property.networkInterfaces">network_interfaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>]]</code> | network_interfaces block. |

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess.property.egress"></a>

```python
egress: str
```

- *Type:* str

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#egress CloudRunV2WorkerPool#egress}

---

##### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess.property.networkInterfaces"></a>

```python
network_interfaces: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#network_interfaces CloudRunV2WorkerPool#network_interfaces}

---

### CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces <a name="CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces(
  network: str = None,
  subnetwork: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.network">network</a></code> | <code>str</code> | The VPC network that the Cloud Run resource will be able to send traffic to. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.subnetwork">subnetwork</a></code> | <code>str</code> | The VPC subnetwork that the Cloud Run resource will get IPs from. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.tags">tags</a></code> | <code>typing.List[str]</code> | Network tags applied to this Cloud Run WorkerPool. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.network"></a>

```python
network: str
```

- *Type:* str

The VPC network that the Cloud Run resource will be able to send traffic to.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
looked up from the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#network CloudRunV2WorkerPool#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The VPC subnetwork that the Cloud Run resource will get IPs from.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
subnetwork with the same name with the network will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#subnetwork CloudRunV2WorkerPool#subnetwork}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Network tags applied to this Cloud Run WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#tags CloudRunV2WorkerPool#tags}

---

### CloudRunV2WorkerPoolTerminalCondition <a name="CloudRunV2WorkerPoolTerminalCondition" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalCondition()
```


### CloudRunV2WorkerPoolTimeouts <a name="CloudRunV2WorkerPoolTimeouts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#create CloudRunV2WorkerPool#create}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#delete CloudRunV2WorkerPool#delete}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#update CloudRunV2WorkerPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#create CloudRunV2WorkerPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#delete CloudRunV2WorkerPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#update CloudRunV2WorkerPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudRunV2WorkerPoolBinaryAuthorizationOutputReference <a name="CloudRunV2WorkerPoolBinaryAuthorizationOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetBreakglassJustification">reset_breakglass_justification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetUseDefault">reset_use_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_breakglass_justification` <a name="reset_breakglass_justification" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```python
def reset_breakglass_justification() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_use_default` <a name="reset_use_default" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetUseDefault"></a>

```python
def reset_use_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustificationInput">breakglass_justification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefaultInput">use_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustification">breakglass_justification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefault">use_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `breakglass_justification_input`<sup>Optional</sup> <a name="breakglass_justification_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```python
breakglass_justification_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `use_default_input`<sup>Optional</sup> <a name="use_default_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```python
use_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `breakglass_justification`<sup>Required</sup> <a name="breakglass_justification" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```python
breakglass_justification: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `use_default`<sup>Required</sup> <a name="use_default" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefault"></a>

```python
use_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolBinaryAuthorization">CloudRunV2WorkerPoolBinaryAuthorization</a>

---


### CloudRunV2WorkerPoolConditionsList <a name="CloudRunV2WorkerPoolConditionsList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2WorkerPoolConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudRunV2WorkerPoolConditionsOutputReference <a name="CloudRunV2WorkerPoolConditionsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.executionReason">execution_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.revisionReason">revision_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditions">CloudRunV2WorkerPoolConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_reason`<sup>Required</sup> <a name="execution_reason" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.executionReason"></a>

```python
execution_reason: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `revision_reason`<sup>Required</sup> <a name="revision_reason" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.revisionReason"></a>

```python
revision_reason: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditionsOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolConditions
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolConditions">CloudRunV2WorkerPoolConditions</a>

---


### CloudRunV2WorkerPoolInstanceSplitsList <a name="CloudRunV2WorkerPoolInstanceSplitsList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2WorkerPoolInstanceSplitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits">CloudRunV2WorkerPoolInstanceSplits</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolInstanceSplits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits">CloudRunV2WorkerPoolInstanceSplits</a>]]

---


### CloudRunV2WorkerPoolInstanceSplitsOutputReference <a name="CloudRunV2WorkerPoolInstanceSplitsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resetPercent">reset_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resetRevision">reset_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_percent` <a name="reset_percent" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resetPercent"></a>

```python
def reset_percent() -> None
```

##### `reset_revision` <a name="reset_revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percentInput">percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits">CloudRunV2WorkerPoolInstanceSplits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percent_input`<sup>Optional</sup> <a name="percent_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percentInput"></a>

```python
percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2WorkerPoolInstanceSplits]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplits">CloudRunV2WorkerPoolInstanceSplits</a>]

---


### CloudRunV2WorkerPoolInstanceSplitStatusesList <a name="CloudRunV2WorkerPoolInstanceSplitStatusesList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference <a name="CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatuses">CloudRunV2WorkerPoolInstanceSplitStatuses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolInstanceSplitStatuses
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolInstanceSplitStatuses">CloudRunV2WorkerPoolInstanceSplitStatuses</a>

---


### CloudRunV2WorkerPoolScalingOutputReference <a name="CloudRunV2WorkerPoolScalingOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetManualInstanceCount">reset_manual_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetMaxInstanceCount">reset_max_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetMinInstanceCount">reset_min_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetScalingMode">reset_scaling_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_manual_instance_count` <a name="reset_manual_instance_count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetManualInstanceCount"></a>

```python
def reset_manual_instance_count() -> None
```

##### `reset_max_instance_count` <a name="reset_max_instance_count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetMaxInstanceCount"></a>

```python
def reset_max_instance_count() -> None
```

##### `reset_min_instance_count` <a name="reset_min_instance_count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetMinInstanceCount"></a>

```python
def reset_min_instance_count() -> None
```

##### `reset_scaling_mode` <a name="reset_scaling_mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.resetScalingMode"></a>

```python
def reset_scaling_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCountInput">manual_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCountInput">max_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCountInput">min_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.scalingModeInput">scaling_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCount">manual_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.scalingMode">scaling_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual_instance_count_input`<sup>Optional</sup> <a name="manual_instance_count_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCountInput"></a>

```python
manual_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instance_count_input`<sup>Optional</sup> <a name="max_instance_count_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCountInput"></a>

```python
max_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count_input`<sup>Optional</sup> <a name="min_instance_count_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCountInput"></a>

```python
min_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_mode_input`<sup>Optional</sup> <a name="scaling_mode_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.scalingModeInput"></a>

```python
scaling_mode_input: str
```

- *Type:* str

---

##### `manual_instance_count`<sup>Required</sup> <a name="manual_instance_count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCount"></a>

```python
manual_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_mode`<sup>Required</sup> <a name="scaling_mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.scalingMode"></a>

```python
scaling_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScalingOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolScaling
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolScaling">CloudRunV2WorkerPoolScaling</a>

---


### CloudRunV2WorkerPoolTemplateContainersEnvList <a name="CloudRunV2WorkerPoolTemplateContainersEnvList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2WorkerPoolTemplateContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv">CloudRunV2WorkerPoolTemplateContainersEnv</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainersEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv">CloudRunV2WorkerPoolTemplateContainersEnv</a>]]

---


### CloudRunV2WorkerPoolTemplateContainersEnvOutputReference <a name="CloudRunV2WorkerPoolTemplateContainersEnvOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.putValueSource">put_value_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValueSource">reset_value_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_source` <a name="put_value_source" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.putValueSource"></a>

```python
def put_value_source(
  secret_key_ref: CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef = None
) -> None
```

###### `secret_key_ref`<sup>Optional</sup> <a name="secret_key_ref" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.putValueSource.parameter.secretKeyRef"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#secret_key_ref CloudRunV2WorkerPool#secret_key_ref}

---

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_source` <a name="reset_value_source" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValueSource"></a>

```python
def reset_value_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSource">value_source</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSourceInput">value_source_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv">CloudRunV2WorkerPoolTemplateContainersEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_source`<sup>Required</sup> <a name="value_source" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSource"></a>

```python
value_source: CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value_source_input`<sup>Optional</sup> <a name="value_source_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```python
value_source_input: CloudRunV2WorkerPoolTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2WorkerPoolTemplateContainersEnv]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv">CloudRunV2WorkerPoolTemplateContainersEnv</a>]

---


### CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference <a name="CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">put_secret_key_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">reset_secret_key_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_key_ref` <a name="put_secret_key_ref" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```python
def put_secret_key_ref(
  secret: str,
  version: str = None
) -> None
```

###### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.secret"></a>

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#secret CloudRunV2WorkerPool#secret}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.version"></a>

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#version CloudRunV2WorkerPool#version}

---

##### `reset_secret_key_ref` <a name="reset_secret_key_ref" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```python
def reset_secret_key_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">secret_key_ref</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">secret_key_ref_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_key_ref`<sup>Required</sup> <a name="secret_key_ref" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```python
secret_key_ref: CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `secret_key_ref_input`<sup>Optional</sup> <a name="secret_key_ref_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```python
secret_key_ref_input: CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSource">CloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---


### CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### CloudRunV2WorkerPoolTemplateContainersList <a name="CloudRunV2WorkerPoolTemplateContainersList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2WorkerPoolTemplateContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers">CloudRunV2WorkerPoolTemplateContainers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers">CloudRunV2WorkerPoolTemplateContainers</a>]]

---


### CloudRunV2WorkerPoolTemplateContainersOutputReference <a name="CloudRunV2WorkerPoolTemplateContainersOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putVolumeMounts">put_volume_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetDependsOn">reset_depends_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetVolumeMounts">reset_volume_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetWorkingDir">reset_working_dir</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putEnv"></a>

```python
def put_env(
  value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainersEnv]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv">CloudRunV2WorkerPoolTemplateContainersEnv</a>]]

---

##### `put_resources` <a name="put_resources" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putResources"></a>

```python
def put_resources(
  limits: typing.Mapping[str] = None
) -> None
```

###### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putResources.parameter.limits"></a>

- *Type:* typing.Mapping[str]

Only memory, CPU, and nvidia.com/gpu are supported. Use key 'cpu' for CPU limit, 'memory' for memory limit, 'nvidia.com/gpu' for gpu limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#limits CloudRunV2WorkerPool#limits}

---

##### `put_volume_mounts` <a name="put_volume_mounts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putVolumeMounts"></a>

```python
def put_volume_mounts(
  value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainersVolumeMounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts">CloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>]]

---

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_depends_on` <a name="reset_depends_on" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetDependsOn"></a>

```python
def reset_depends_on() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_volume_mounts` <a name="reset_volume_mounts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetVolumeMounts"></a>

```python
def reset_volume_mounts() -> None
```

##### `reset_working_dir` <a name="reset_working_dir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.resetWorkingDir"></a>

```python
def reset_working_dir() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList">CloudRunV2WorkerPoolTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference">CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMounts">volume_mounts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList">CloudRunV2WorkerPoolTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOnInput">depends_on_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.envInput">env_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv">CloudRunV2WorkerPoolTemplateContainersEnv</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.resourcesInput">resources_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMountsInput">volume_mounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts">CloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDirInput">working_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDir">working_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers">CloudRunV2WorkerPoolTemplateContainers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.env"></a>

```python
env: CloudRunV2WorkerPoolTemplateContainersEnvList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnvList">CloudRunV2WorkerPoolTemplateContainersEnvList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.resources"></a>

```python
resources: CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference">CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference</a>

---

##### `volume_mounts`<sup>Required</sup> <a name="volume_mounts" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMounts"></a>

```python
volume_mounts: CloudRunV2WorkerPoolTemplateContainersVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList">CloudRunV2WorkerPoolTemplateContainersVolumeMountsList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `depends_on_input`<sup>Optional</sup> <a name="depends_on_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOnInput"></a>

```python
depends_on_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.envInput"></a>

```python
env_input: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainersEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersEnv">CloudRunV2WorkerPoolTemplateContainersEnv</a>]]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.resourcesInput"></a>

```python
resources_input: CloudRunV2WorkerPoolTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a>

---

##### `volume_mounts_input`<sup>Optional</sup> <a name="volume_mounts_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMountsInput"></a>

```python
volume_mounts_input: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts">CloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>]]

---

##### `working_dir_input`<sup>Optional</sup> <a name="working_dir_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDirInput"></a>

```python
working_dir_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `depends_on`<sup>Required</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `working_dir`<sup>Required</sup> <a name="working_dir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2WorkerPoolTemplateContainers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers">CloudRunV2WorkerPoolTemplateContainers</a>]

---


### CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference <a name="CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resetLimits">reset_limits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limitsInput">limits_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```python
limits_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersResources">CloudRunV2WorkerPoolTemplateContainersResources</a>

---


### CloudRunV2WorkerPoolTemplateContainersVolumeMountsList <a name="CloudRunV2WorkerPoolTemplateContainersVolumeMountsList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts">CloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts">CloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>]]

---


### CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference <a name="CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts">CloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2WorkerPoolTemplateContainersVolumeMounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersVolumeMounts">CloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>]

---


### CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference <a name="CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.acceleratorInput">accelerator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.accelerator">accelerator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_input`<sup>Optional</sup> <a name="accelerator_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.acceleratorInput"></a>

```python
accelerator_input: str
```

- *Type:* str

---

##### `accelerator`<sup>Required</sup> <a name="accelerator" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.accelerator"></a>

```python
accelerator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolTemplateNodeSelector
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a>

---


### CloudRunV2WorkerPoolTemplateOutputReference <a name="CloudRunV2WorkerPoolTemplateOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putContainers">put_containers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putNodeSelector">put_node_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess">put_vpc_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetContainers">reset_containers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyRevocationAction">reset_encryption_key_revocation_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyShutdownDuration">reset_encryption_key_shutdown_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetGpuZonalRedundancyDisabled">reset_gpu_zonal_redundancy_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetNodeSelector">reset_node_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetRevision">reset_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetVpcAccess">reset_vpc_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_containers` <a name="put_containers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putContainers"></a>

```python
def put_containers(
  value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers">CloudRunV2WorkerPoolTemplateContainers</a>]]

---

##### `put_node_selector` <a name="put_node_selector" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putNodeSelector"></a>

```python
def put_node_selector(
  accelerator: str
) -> None
```

###### `accelerator`<sup>Required</sup> <a name="accelerator" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putNodeSelector.parameter.accelerator"></a>

- *Type:* str

The GPU to attach to an instance. See https://cloud.google.com/run/docs/configuring/services/gpu for configuring GPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#accelerator CloudRunV2WorkerPool#accelerator}

---

##### `put_volumes` <a name="put_volumes" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVolumes"></a>

```python
def put_volumes(
  value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes">CloudRunV2WorkerPoolTemplateVolumes</a>]]

---

##### `put_vpc_access` <a name="put_vpc_access" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess"></a>

```python
def put_vpc_access(
  egress: str = None,
  network_interfaces: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces]] = None
) -> None
```

###### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess.parameter.egress"></a>

- *Type:* str

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#egress CloudRunV2WorkerPool#egress}

---

###### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess.parameter.networkInterfaces"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#network_interfaces CloudRunV2WorkerPool#network_interfaces}

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_containers` <a name="reset_containers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetContainers"></a>

```python
def reset_containers() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_encryption_key_revocation_action` <a name="reset_encryption_key_revocation_action" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyRevocationAction"></a>

```python
def reset_encryption_key_revocation_action() -> None
```

##### `reset_encryption_key_shutdown_duration` <a name="reset_encryption_key_shutdown_duration" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyShutdownDuration"></a>

```python
def reset_encryption_key_shutdown_duration() -> None
```

##### `reset_gpu_zonal_redundancy_disabled` <a name="reset_gpu_zonal_redundancy_disabled" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetGpuZonalRedundancyDisabled"></a>

```python
def reset_gpu_zonal_redundancy_disabled() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_node_selector` <a name="reset_node_selector" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetNodeSelector"></a>

```python
def reset_node_selector() -> None
```

##### `reset_revision` <a name="reset_revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```

##### `reset_vpc_access` <a name="reset_vpc_access" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.resetVpcAccess"></a>

```python
def reset_vpc_access() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList">CloudRunV2WorkerPoolTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelector">node_selector</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference">CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList">CloudRunV2WorkerPoolTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccess">vpc_access</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference">CloudRunV2WorkerPoolTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.containersInput">containers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers">CloudRunV2WorkerPoolTemplateContainers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationActionInput">encryption_key_revocation_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDurationInput">encryption_key_shutdown_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabledInput">gpu_zonal_redundancy_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelectorInput">node_selector_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.volumesInput">volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes">CloudRunV2WorkerPoolTemplateVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccessInput">vpc_access_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationAction">encryption_key_revocation_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDuration">encryption_key_shutdown_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabled">gpu_zonal_redundancy_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.containers"></a>

```python
containers: CloudRunV2WorkerPoolTemplateContainersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainersList">CloudRunV2WorkerPoolTemplateContainersList</a>

---

##### `node_selector`<sup>Required</sup> <a name="node_selector" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelector"></a>

```python
node_selector: CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference">CloudRunV2WorkerPoolTemplateNodeSelectorOutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.volumes"></a>

```python
volumes: CloudRunV2WorkerPoolTemplateVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList">CloudRunV2WorkerPoolTemplateVolumesList</a>

---

##### `vpc_access`<sup>Required</sup> <a name="vpc_access" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccess"></a>

```python
vpc_access: CloudRunV2WorkerPoolTemplateVpcAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference">CloudRunV2WorkerPoolTemplateVpcAccessOutputReference</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `containers_input`<sup>Optional</sup> <a name="containers_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.containersInput"></a>

```python
containers_input: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateContainers">CloudRunV2WorkerPoolTemplateContainers</a>]]

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `encryption_key_revocation_action_input`<sup>Optional</sup> <a name="encryption_key_revocation_action_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationActionInput"></a>

```python
encryption_key_revocation_action_input: str
```

- *Type:* str

---

##### `encryption_key_shutdown_duration_input`<sup>Optional</sup> <a name="encryption_key_shutdown_duration_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDurationInput"></a>

```python
encryption_key_shutdown_duration_input: str
```

- *Type:* str

---

##### `gpu_zonal_redundancy_disabled_input`<sup>Optional</sup> <a name="gpu_zonal_redundancy_disabled_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabledInput"></a>

```python
gpu_zonal_redundancy_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_selector_input`<sup>Optional</sup> <a name="node_selector_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelectorInput"></a>

```python
node_selector_input: CloudRunV2WorkerPoolTemplateNodeSelector
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateNodeSelector">CloudRunV2WorkerPoolTemplateNodeSelector</a>

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.volumesInput"></a>

```python
volumes_input: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes">CloudRunV2WorkerPoolTemplateVolumes</a>]]

---

##### `vpc_access_input`<sup>Optional</sup> <a name="vpc_access_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccessInput"></a>

```python
vpc_access_input: CloudRunV2WorkerPoolTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `encryption_key_revocation_action`<sup>Required</sup> <a name="encryption_key_revocation_action" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationAction"></a>

```python
encryption_key_revocation_action: str
```

- *Type:* str

---

##### `encryption_key_shutdown_duration`<sup>Required</sup> <a name="encryption_key_shutdown_duration" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDuration"></a>

```python
encryption_key_shutdown_duration: str
```

- *Type:* str

---

##### `gpu_zonal_redundancy_disabled`<sup>Required</sup> <a name="gpu_zonal_redundancy_disabled" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabled"></a>

```python
gpu_zonal_redundancy_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplate">CloudRunV2WorkerPoolTemplate</a>

---


### CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">reset_instances</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instances` <a name="reset_instances" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```python
def reset_instances() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">instances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```python
instances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---


### CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetMedium">reset_medium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetSizeLimit">reset_size_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_medium` <a name="reset_medium" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetMedium"></a>

```python
def reset_medium() -> None
```

##### `reset_size_limit` <a name="reset_size_limit" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```python
def reset_size_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.mediumInput">medium_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput">size_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimit">size_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `medium_input`<sup>Optional</sup> <a name="medium_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.mediumInput"></a>

```python
medium_input: str
```

- *Type:* str

---

##### `size_limit_input`<sup>Optional</sup> <a name="size_limit_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```python
size_limit_input: str
```

- *Type:* str

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.medium"></a>

```python
medium: str
```

- *Type:* str

---

##### `size_limit`<sup>Required</sup> <a name="size_limit" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```python
size_limit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolTemplateVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---


### CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolTemplateVolumesGcs
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a>

---


### CloudRunV2WorkerPoolTemplateVolumesList <a name="CloudRunV2WorkerPoolTemplateVolumesList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2WorkerPoolTemplateVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes">CloudRunV2WorkerPoolTemplateVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes">CloudRunV2WorkerPoolTemplateVolumes</a>]]

---


### CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolTemplateVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a>

---


### CloudRunV2WorkerPoolTemplateVolumesOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putCloudSqlInstance">put_cloud_sql_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir">put_empty_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs">put_gcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs">put_nfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetCloudSqlInstance">reset_cloud_sql_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetEmptyDir">reset_empty_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetGcs">reset_gcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetNfs">reset_nfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetSecret">reset_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_sql_instance` <a name="put_cloud_sql_instance" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```python
def put_cloud_sql_instance(
  instances: typing.List[str] = None
) -> None
```

###### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putCloudSqlInstance.parameter.instances"></a>

- *Type:* typing.List[str]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#instances CloudRunV2WorkerPool#instances}

---

##### `put_empty_dir` <a name="put_empty_dir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir"></a>

```python
def put_empty_dir(
  medium: str = None,
  size_limit: str = None
) -> None
```

###### `medium`<sup>Optional</sup> <a name="medium" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir.parameter.medium"></a>

- *Type:* str

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#medium CloudRunV2WorkerPool#medium}

---

###### `size_limit`<sup>Optional</sup> <a name="size_limit" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir.parameter.sizeLimit"></a>

- *Type:* str

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#size_limit CloudRunV2WorkerPool#size_limit}

---

##### `put_gcs` <a name="put_gcs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs"></a>

```python
def put_gcs(
  bucket: str,
  read_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs.parameter.bucket"></a>

- *Type:* str

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#bucket CloudRunV2WorkerPool#bucket}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#read_only CloudRunV2WorkerPool#read_only}

---

##### `put_nfs` <a name="put_nfs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs"></a>

```python
def put_nfs(
  path: str,
  server: str,
  read_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs.parameter.path"></a>

- *Type:* str

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#path CloudRunV2WorkerPool#path}

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs.parameter.server"></a>

- *Type:* str

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#server CloudRunV2WorkerPool#server}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#read_only CloudRunV2WorkerPool#read_only}

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret"></a>

```python
def put_secret(
  secret: str,
  default_mode: typing.Union[int, float] = None,
  items: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVolumesSecretItems]] = None
) -> None
```

###### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret.parameter.secret"></a>

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#secret CloudRunV2WorkerPool#secret}

---

###### `default_mode`<sup>Optional</sup> <a name="default_mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret.parameter.defaultMode"></a>

- *Type:* typing.Union[int, float]

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#default_mode CloudRunV2WorkerPool#default_mode}

---

###### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems">CloudRunV2WorkerPoolTemplateVolumesSecretItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloud_run_v2_worker_pool#items CloudRunV2WorkerPool#items}

---

##### `reset_cloud_sql_instance` <a name="reset_cloud_sql_instance" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```python
def reset_cloud_sql_instance() -> None
```

##### `reset_empty_dir` <a name="reset_empty_dir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetEmptyDir"></a>

```python
def reset_empty_dir() -> None
```

##### `reset_gcs` <a name="reset_gcs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetGcs"></a>

```python
def reset_gcs() -> None
```

##### `reset_nfs` <a name="reset_nfs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetNfs"></a>

```python
def reset_nfs() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDir">empty_dir</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference">CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference">CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference">CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference">CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstanceInput">cloud_sql_instance_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDirInput">empty_dir_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcsInput">gcs_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfsInput">nfs_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secretInput">secret_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes">CloudRunV2WorkerPoolTemplateVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_sql_instance`<sup>Required</sup> <a name="cloud_sql_instance" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `empty_dir`<sup>Required</sup> <a name="empty_dir" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDir"></a>

```python
empty_dir: CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference">CloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcs"></a>

```python
gcs: CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference">CloudRunV2WorkerPoolTemplateVolumesGcsOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfs"></a>

```python
nfs: CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference">CloudRunV2WorkerPoolTemplateVolumesNfsOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secret"></a>

```python
secret: CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference">CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference</a>

---

##### `cloud_sql_instance_input`<sup>Optional</sup> <a name="cloud_sql_instance_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```python
cloud_sql_instance_input: CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">CloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---

##### `empty_dir_input`<sup>Optional</sup> <a name="empty_dir_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDirInput"></a>

```python
empty_dir_input: CloudRunV2WorkerPoolTemplateVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesEmptyDir">CloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---

##### `gcs_input`<sup>Optional</sup> <a name="gcs_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcsInput"></a>

```python
gcs_input: CloudRunV2WorkerPoolTemplateVolumesGcs
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesGcs">CloudRunV2WorkerPoolTemplateVolumesGcs</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nfs_input`<sup>Optional</sup> <a name="nfs_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfsInput"></a>

```python
nfs_input: CloudRunV2WorkerPoolTemplateVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesNfs">CloudRunV2WorkerPoolTemplateVolumesNfs</a>

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secretInput"></a>

```python
secret_input: CloudRunV2WorkerPoolTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2WorkerPoolTemplateVolumes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumes">CloudRunV2WorkerPoolTemplateVolumes</a>]

---


### CloudRunV2WorkerPoolTemplateVolumesSecretItemsList <a name="CloudRunV2WorkerPoolTemplateVolumesSecretItemsList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems">CloudRunV2WorkerPoolTemplateVolumesSecretItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVolumesSecretItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems">CloudRunV2WorkerPoolTemplateVolumesSecretItems</a>]]

---


### CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.modeInput">mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems">CloudRunV2WorkerPoolTemplateVolumesSecretItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```python
mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```python
mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2WorkerPoolTemplateVolumesSecretItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems">CloudRunV2WorkerPoolTemplateVolumesSecretItems</a>]

---


### CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference <a name="CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.putItems">put_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetDefaultMode">reset_default_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVolumesSecretItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems">CloudRunV2WorkerPoolTemplateVolumesSecretItems</a>]]

---

##### `reset_default_mode` <a name="reset_default_mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```python
def reset_default_mode() -> None
```

##### `reset_items` <a name="reset_items" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList">CloudRunV2WorkerPoolTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultModeInput">default_mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems">CloudRunV2WorkerPoolTemplateVolumesSecretItems</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultMode">default_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.items"></a>

```python
items: CloudRunV2WorkerPoolTemplateVolumesSecretItemsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItemsList">CloudRunV2WorkerPoolTemplateVolumesSecretItemsList</a>

---

##### `default_mode_input`<sup>Optional</sup> <a name="default_mode_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```python
default_mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVolumesSecretItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretItems">CloudRunV2WorkerPoolTemplateVolumesSecretItems</a>]]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `default_mode`<sup>Required</sup> <a name="default_mode" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```python
default_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVolumesSecret">CloudRunV2WorkerPoolTemplateVolumesSecret</a>

---


### CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList <a name="CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>]]

---


### CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference <a name="CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>]

---


### CloudRunV2WorkerPoolTemplateVpcAccessOutputReference <a name="CloudRunV2WorkerPoolTemplateVpcAccessOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.putNetworkInterfaces">put_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetNetworkInterfaces">reset_network_interfaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_interfaces` <a name="put_network_interfaces" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.putNetworkInterfaces"></a>

```python
def put_network_interfaces(
  value: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>]]

---

##### `reset_egress` <a name="reset_egress" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_network_interfaces` <a name="reset_network_interfaces" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetNetworkInterfaces"></a>

```python
def reset_network_interfaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egressInput">egress_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfacesInput">network_interfaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egress">egress</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfaces"></a>

```python
network_interfaces: CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList</a>

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egressInput"></a>

```python
egress_input: str
```

- *Type:* str

---

##### `network_interfaces_input`<sup>Optional</sup> <a name="network_interfaces_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfacesInput"></a>

```python
network_interfaces_input: typing.Union[IResolvable, typing.List[CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">CloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>]]

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egress"></a>

```python
egress: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTemplateVpcAccess">CloudRunV2WorkerPoolTemplateVpcAccess</a>

---


### CloudRunV2WorkerPoolTerminalConditionList <a name="CloudRunV2WorkerPoolTerminalConditionList" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2WorkerPoolTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudRunV2WorkerPoolTerminalConditionOutputReference <a name="CloudRunV2WorkerPoolTerminalConditionOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.executionReason">execution_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.revisionReason">revision_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalCondition">CloudRunV2WorkerPoolTerminalCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_reason`<sup>Required</sup> <a name="execution_reason" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.executionReason"></a>

```python
execution_reason: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `revision_reason`<sup>Required</sup> <a name="revision_reason" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.revisionReason"></a>

```python
revision_reason: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalConditionOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2WorkerPoolTerminalCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTerminalCondition">CloudRunV2WorkerPoolTerminalCondition</a>

---


### CloudRunV2WorkerPoolTimeoutsOutputReference <a name="CloudRunV2WorkerPoolTimeoutsOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_worker_pool

cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts">CloudRunV2WorkerPoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2WorkerPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2WorkerPool.CloudRunV2WorkerPoolTimeouts">CloudRunV2WorkerPoolTimeouts</a>]

---



