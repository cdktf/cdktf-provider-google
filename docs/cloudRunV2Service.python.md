# `cloudRunV2Service` Submodule <a name="`cloudRunV2Service` Submodule" id="@cdktf/provider-google.cloudRunV2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunV2Service <a name="CloudRunV2Service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service google_cloud_run_v2_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2Service(
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
  template: CloudRunV2ServiceTemplate,
  annotations: typing.Mapping[str] = None,
  binary_authorization: CloudRunV2ServiceBinaryAuthorization = None,
  client: str = None,
  client_version: str = None,
  custom_audiences: typing.List[str] = None,
  description: str = None,
  id: str = None,
  ingress: str = None,
  labels: typing.Mapping[str] = None,
  launch_stage: str = None,
  project: str = None,
  timeouts: CloudRunV2ServiceTimeouts = None,
  traffic: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTraffic]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the cloud run service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.client">client</a></code> | <code>str</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.clientVersion">client_version</a></code> | <code>str</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.customAudiences">custom_audiences</a></code> | <code>typing.List[str]</code> | One or more custom audiences that you want this service to support. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description of the Service. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#id CloudRunV2Service#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.ingress">ingress</a></code> | <code>str</code> | Provides the ingress settings for this Service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.launchStage">launch_stage</a></code> | <code>str</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#project CloudRunV2Service#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.traffic">traffic</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>]]</code> | traffic block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.location"></a>

- *Type:* str

The location of the cloud run service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#location CloudRunV2Service#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.name"></a>

- *Type:* str

Name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#template CloudRunV2Service#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 Service.

This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#annotations CloudRunV2Service#annotations}

---

##### `binary_authorization`<sup>Optional</sup> <a name="binary_authorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.binaryAuthorization"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#binary_authorization CloudRunV2Service#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.client"></a>

- *Type:* str

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#client CloudRunV2Service#client}

---

##### `client_version`<sup>Optional</sup> <a name="client_version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.clientVersion"></a>

- *Type:* str

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#client_version CloudRunV2Service#client_version}

---

##### `custom_audiences`<sup>Optional</sup> <a name="custom_audiences" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.customAudiences"></a>

- *Type:* typing.List[str]

One or more custom audiences that you want this service to support.

Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#custom_audiences CloudRunV2Service#custom_audiences}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.description"></a>

- *Type:* str

User-provided description of the Service. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#description CloudRunV2Service#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#id CloudRunV2Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.ingress"></a>

- *Type:* str

Provides the ingress settings for this Service.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#ingress CloudRunV2Service#ingress}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with  'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Service.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#labels CloudRunV2Service#labels}

---

##### `launch_stage`<sup>Optional</sup> <a name="launch_stage" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.launchStage"></a>

- *Type:* str

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#launch_stage CloudRunV2Service#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#project CloudRunV2Service#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#timeouts CloudRunV2Service#timeouts}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.traffic"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>]]

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#traffic CloudRunV2Service#traffic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putBinaryAuthorization">put_binary_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate">put_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTraffic">put_traffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetBinaryAuthorization">reset_binary_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetClient">reset_client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetClientVersion">reset_client_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetCustomAudiences">reset_custom_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetIngress">reset_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLaunchStage">reset_launch_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetTraffic">reset_traffic</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_binary_authorization` <a name="put_binary_authorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putBinaryAuthorization"></a>

```python
def put_binary_authorization(
  breakglass_justification: str = None,
  use_default: typing.Union[bool, IResolvable] = None
) -> None
```

###### `breakglass_justification`<sup>Optional</sup> <a name="breakglass_justification" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putBinaryAuthorization.parameter.breakglassJustification"></a>

- *Type:* str

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#breakglass_justification CloudRunV2Service#breakglass_justification}

---

###### `use_default`<sup>Optional</sup> <a name="use_default" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putBinaryAuthorization.parameter.useDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#use_default CloudRunV2Service#use_default}

---

##### `put_template` <a name="put_template" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate"></a>

```python
def put_template(
  annotations: typing.Mapping[str] = None,
  containers: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainers]] = None,
  encryption_key: str = None,
  execution_environment: str = None,
  labels: typing.Mapping[str] = None,
  max_instance_request_concurrency: typing.Union[int, float] = None,
  revision: str = None,
  scaling: CloudRunV2ServiceTemplateScaling = None,
  service_account: str = None,
  session_affinity: typing.Union[bool, IResolvable] = None,
  timeout: str = None,
  volumes: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVolumes]] = None,
  vpc_access: CloudRunV2ServiceTemplateVpcAccess = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 RevisionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#annotations CloudRunV2Service#annotations}

---

###### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.containers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>]]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#containers CloudRunV2Service#containers}

---

###### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.encryptionKey"></a>

- *Type:* str

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#encryption_key CloudRunV2Service#encryption_key}

---

###### `execution_environment`<sup>Optional</sup> <a name="execution_environment" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.executionEnvironment"></a>

- *Type:* str

The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#execution_environment CloudRunV2Service#execution_environment}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 RevisionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#labels CloudRunV2Service#labels}

---

###### `max_instance_request_concurrency`<sup>Optional</sup> <a name="max_instance_request_concurrency" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.maxInstanceRequestConcurrency"></a>

- *Type:* typing.Union[int, float]

Sets the maximum number of requests that each serving instance can receive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#max_instance_request_concurrency CloudRunV2Service#max_instance_request_concurrency}

---

###### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.revision"></a>

- *Type:* str

The unique name for the revision.

If this field is omitted, it will be automatically generated based on the Service name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#revision CloudRunV2Service#revision}

---

###### `scaling`<sup>Optional</sup> <a name="scaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.scaling"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#scaling CloudRunV2Service#scaling}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.serviceAccount"></a>

- *Type:* str

Email address of the IAM service account associated with the revision of the service.

The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#service_account CloudRunV2Service#service_account}

---

###### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.sessionAffinity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#session_affinity CloudRunV2Service#session_affinity}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.timeout"></a>

- *Type:* str

Max allowed time for an instance to respond to a request.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#timeout CloudRunV2Service#timeout}

---

###### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.volumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#volumes CloudRunV2Service#volumes}

---

###### `vpc_access`<sup>Optional</sup> <a name="vpc_access" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.vpcAccess"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#vpc_access CloudRunV2Service#vpc_access}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#create CloudRunV2Service#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#delete CloudRunV2Service#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#update CloudRunV2Service#update}.

---

##### `put_traffic` <a name="put_traffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTraffic"></a>

```python
def put_traffic(
  value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTraffic]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTraffic.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>]]

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_binary_authorization` <a name="reset_binary_authorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetBinaryAuthorization"></a>

```python
def reset_binary_authorization() -> None
```

##### `reset_client` <a name="reset_client" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetClient"></a>

```python
def reset_client() -> None
```

##### `reset_client_version` <a name="reset_client_version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetClientVersion"></a>

```python
def reset_client_version() -> None
```

##### `reset_custom_audiences` <a name="reset_custom_audiences" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetCustomAudiences"></a>

```python
def reset_custom_audiences() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress` <a name="reset_ingress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetIngress"></a>

```python
def reset_ingress() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_launch_stage` <a name="reset_launch_stage" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLaunchStage"></a>

```python
def reset_launch_stage() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_traffic` <a name="reset_traffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetTraffic"></a>

```python
def reset_traffic() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudRunV2Service resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2Service.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2Service.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2Service.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2Service.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudRunV2Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudRunV2Service to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudRunV2Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudRunV2Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference">CloudRunV2ServiceBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList">CloudRunV2ServiceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.generation">generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.lastModifier">last_modifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.latestCreatedRevision">latest_created_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.latestReadyRevision">latest_ready_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.observedGeneration">observed_generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference">CloudRunV2ServiceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terminalCondition">terminal_condition</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList">CloudRunV2ServiceTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference">CloudRunV2ServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList">CloudRunV2ServiceTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.trafficStatuses">traffic_statuses</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList">CloudRunV2ServiceTrafficStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.binaryAuthorizationInput">binary_authorization_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientInput">client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientVersionInput">client_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.customAudiencesInput">custom_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.ingressInput">ingress_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.launchStageInput">launch_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.templateInput">template_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.trafficInput">traffic_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.client">client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientVersion">client_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.customAudiences">custom_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.ingress">ingress</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.launchStage">launch_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `binary_authorization`<sup>Required</sup> <a name="binary_authorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.binaryAuthorization"></a>

```python
binary_authorization: CloudRunV2ServiceBinaryAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference">CloudRunV2ServiceBinaryAuthorizationOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.conditions"></a>

```python
conditions: CloudRunV2ServiceConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList">CloudRunV2ServiceConditionsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.generation"></a>

```python
generation: str
```

- *Type:* str

---

##### `last_modifier`<sup>Required</sup> <a name="last_modifier" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.lastModifier"></a>

```python
last_modifier: str
```

- *Type:* str

---

##### `latest_created_revision`<sup>Required</sup> <a name="latest_created_revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.latestCreatedRevision"></a>

```python
latest_created_revision: str
```

- *Type:* str

---

##### `latest_ready_revision`<sup>Required</sup> <a name="latest_ready_revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.latestReadyRevision"></a>

```python
latest_ready_revision: str
```

- *Type:* str

---

##### `observed_generation`<sup>Required</sup> <a name="observed_generation" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.observedGeneration"></a>

```python
observed_generation: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.template"></a>

```python
template: CloudRunV2ServiceTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference">CloudRunV2ServiceTemplateOutputReference</a>

---

##### `terminal_condition`<sup>Required</sup> <a name="terminal_condition" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terminalCondition"></a>

```python
terminal_condition: CloudRunV2ServiceTerminalConditionList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList">CloudRunV2ServiceTerminalConditionList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.timeouts"></a>

```python
timeouts: CloudRunV2ServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference">CloudRunV2ServiceTimeoutsOutputReference</a>

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.traffic"></a>

```python
traffic: CloudRunV2ServiceTrafficList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList">CloudRunV2ServiceTrafficList</a>

---

##### `traffic_statuses`<sup>Required</sup> <a name="traffic_statuses" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.trafficStatuses"></a>

```python
traffic_statuses: CloudRunV2ServiceTrafficStatusesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList">CloudRunV2ServiceTrafficStatusesList</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `binary_authorization_input`<sup>Optional</sup> <a name="binary_authorization_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.binaryAuthorizationInput"></a>

```python
binary_authorization_input: CloudRunV2ServiceBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a>

---

##### `client_input`<sup>Optional</sup> <a name="client_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientInput"></a>

```python
client_input: str
```

- *Type:* str

---

##### `client_version_input`<sup>Optional</sup> <a name="client_version_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientVersionInput"></a>

```python
client_version_input: str
```

- *Type:* str

---

##### `custom_audiences_input`<sup>Optional</sup> <a name="custom_audiences_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.customAudiencesInput"></a>

```python
custom_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_input`<sup>Optional</sup> <a name="ingress_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.ingressInput"></a>

```python
ingress_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `launch_stage_input`<sup>Optional</sup> <a name="launch_stage_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.launchStageInput"></a>

```python
launch_stage_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.templateInput"></a>

```python
template_input: CloudRunV2ServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudRunV2ServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a>]

---

##### `traffic_input`<sup>Optional</sup> <a name="traffic_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.trafficInput"></a>

```python
traffic_input: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTraffic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>]]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.client"></a>

```python
client: str
```

- *Type:* str

---

##### `client_version`<sup>Required</sup> <a name="client_version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

---

##### `custom_audiences`<sup>Required</sup> <a name="custom_audiences" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.customAudiences"></a>

```python
custom_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.ingress"></a>

```python
ingress: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `launch_stage`<sup>Required</sup> <a name="launch_stage" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.launchStage"></a>

```python
launch_stage: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunV2ServiceBinaryAuthorization <a name="CloudRunV2ServiceBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization(
  breakglass_justification: str = None,
  use_default: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.property.breakglassJustification">breakglass_justification</a></code> | <code>str</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.property.useDefault">use_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `breakglass_justification`<sup>Optional</sup> <a name="breakglass_justification" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.property.breakglassJustification"></a>

```python
breakglass_justification: str
```

- *Type:* str

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#breakglass_justification CloudRunV2Service#breakglass_justification}

---

##### `use_default`<sup>Optional</sup> <a name="use_default" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.property.useDefault"></a>

```python
use_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#use_default CloudRunV2Service#use_default}

---

### CloudRunV2ServiceConditions <a name="CloudRunV2ServiceConditions" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceConditions()
```


### CloudRunV2ServiceConfig <a name="CloudRunV2ServiceConfig" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  template: CloudRunV2ServiceTemplate,
  annotations: typing.Mapping[str] = None,
  binary_authorization: CloudRunV2ServiceBinaryAuthorization = None,
  client: str = None,
  client_version: str = None,
  custom_audiences: typing.List[str] = None,
  description: str = None,
  id: str = None,
  ingress: str = None,
  labels: typing.Mapping[str] = None,
  launch_stage: str = None,
  project: str = None,
  timeouts: CloudRunV2ServiceTimeouts = None,
  traffic: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTraffic]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.location">location</a></code> | <code>str</code> | The location of the cloud run service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.name">name</a></code> | <code>str</code> | Name of the Service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.client">client</a></code> | <code>str</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.clientVersion">client_version</a></code> | <code>str</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.customAudiences">custom_audiences</a></code> | <code>typing.List[str]</code> | One or more custom audiences that you want this service to support. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.description">description</a></code> | <code>str</code> | User-provided description of the Service. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#id CloudRunV2Service#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.ingress">ingress</a></code> | <code>str</code> | Provides the ingress settings for this Service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.launchStage">launch_stage</a></code> | <code>str</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#project CloudRunV2Service#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.traffic">traffic</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>]]</code> | traffic block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the cloud run service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#location CloudRunV2Service#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.template"></a>

```python
template: CloudRunV2ServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#template CloudRunV2Service#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 Service.

This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#annotations CloudRunV2Service#annotations}

---

##### `binary_authorization`<sup>Optional</sup> <a name="binary_authorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.binaryAuthorization"></a>

```python
binary_authorization: CloudRunV2ServiceBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#binary_authorization CloudRunV2Service#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.client"></a>

```python
client: str
```

- *Type:* str

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#client CloudRunV2Service#client}

---

##### `client_version`<sup>Optional</sup> <a name="client_version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#client_version CloudRunV2Service#client_version}

---

##### `custom_audiences`<sup>Optional</sup> <a name="custom_audiences" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.customAudiences"></a>

```python
custom_audiences: typing.List[str]
```

- *Type:* typing.List[str]

One or more custom audiences that you want this service to support.

Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#custom_audiences CloudRunV2Service#custom_audiences}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description of the Service. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#description CloudRunV2Service#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#id CloudRunV2Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.ingress"></a>

```python
ingress: str
```

- *Type:* str

Provides the ingress settings for this Service.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#ingress CloudRunV2Service#ingress}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with  'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Service.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#labels CloudRunV2Service#labels}

---

##### `launch_stage`<sup>Optional</sup> <a name="launch_stage" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.launchStage"></a>

```python
launch_stage: str
```

- *Type:* str

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#launch_stage CloudRunV2Service#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#project CloudRunV2Service#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.timeouts"></a>

```python
timeouts: CloudRunV2ServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#timeouts CloudRunV2Service#timeouts}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.traffic"></a>

```python
traffic: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTraffic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>]]

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#traffic CloudRunV2Service#traffic}

---

### CloudRunV2ServiceTemplate <a name="CloudRunV2ServiceTemplate" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplate(
  annotations: typing.Mapping[str] = None,
  containers: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainers]] = None,
  encryption_key: str = None,
  execution_environment: str = None,
  labels: typing.Mapping[str] = None,
  max_instance_request_concurrency: typing.Union[int, float] = None,
  revision: str = None,
  scaling: CloudRunV2ServiceTemplateScaling = None,
  service_account: str = None,
  session_affinity: typing.Union[bool, IResolvable] = None,
  timeout: str = None,
  volumes: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVolumes]] = None,
  vpc_access: CloudRunV2ServiceTemplateVpcAccess = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.containers">containers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>]]</code> | containers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.encryptionKey">encryption_key</a></code> | <code>str</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.executionEnvironment">execution_environment</a></code> | <code>str</code> | The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.maxInstanceRequestConcurrency">max_instance_request_concurrency</a></code> | <code>typing.Union[int, float]</code> | Sets the maximum number of requests that each serving instance can receive. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.revision">revision</a></code> | <code>str</code> | The unique name for the revision. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a></code> | scaling block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.serviceAccount">service_account</a></code> | <code>str</code> | Email address of the IAM service account associated with the revision of the service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.sessionAffinity">session_affinity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.timeout">timeout</a></code> | <code>str</code> | Max allowed time for an instance to respond to a request. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.volumes">volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>]]</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.vpcAccess">vpc_access</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 RevisionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#annotations CloudRunV2Service#annotations}

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.containers"></a>

```python
containers: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>]]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#containers CloudRunV2Service#containers}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#encryption_key CloudRunV2Service#encryption_key}

---

##### `execution_environment`<sup>Optional</sup> <a name="execution_environment" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.executionEnvironment"></a>

```python
execution_environment: str
```

- *Type:* str

The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#execution_environment CloudRunV2Service#execution_environment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 RevisionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#labels CloudRunV2Service#labels}

---

##### `max_instance_request_concurrency`<sup>Optional</sup> <a name="max_instance_request_concurrency" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.maxInstanceRequestConcurrency"></a>

```python
max_instance_request_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the maximum number of requests that each serving instance can receive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#max_instance_request_concurrency CloudRunV2Service#max_instance_request_concurrency}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.revision"></a>

```python
revision: str
```

- *Type:* str

The unique name for the revision.

If this field is omitted, it will be automatically generated based on the Service name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#revision CloudRunV2Service#revision}

---

##### `scaling`<sup>Optional</sup> <a name="scaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.scaling"></a>

```python
scaling: CloudRunV2ServiceTemplateScaling
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#scaling CloudRunV2Service#scaling}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Email address of the IAM service account associated with the revision of the service.

The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#service_account CloudRunV2Service#service_account}

---

##### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.sessionAffinity"></a>

```python
session_affinity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#session_affinity CloudRunV2Service#session_affinity}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Max allowed time for an instance to respond to a request.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#timeout CloudRunV2Service#timeout}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.volumes"></a>

```python
volumes: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#volumes CloudRunV2Service#volumes}

---

##### `vpc_access`<sup>Optional</sup> <a name="vpc_access" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.vpcAccess"></a>

```python
vpc_access: CloudRunV2ServiceTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#vpc_access CloudRunV2Service#vpc_access}

---

### CloudRunV2ServiceTemplateContainers <a name="CloudRunV2ServiceTemplateContainers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainers(
  image: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  depends_on: typing.List[str] = None,
  env: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersEnv]] = None,
  liveness_probe: CloudRunV2ServiceTemplateContainersLivenessProbe = None,
  name: str = None,
  ports: CloudRunV2ServiceTemplateContainersPorts = None,
  resources: CloudRunV2ServiceTemplateContainersResources = None,
  startup_probe: CloudRunV2ServiceTemplateContainersStartupProbe = None,
  volume_mounts: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersVolumeMounts]] = None,
  working_dir: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.image">image</a></code> | <code>str</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.args">args</a></code> | <code>typing.List[str]</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.command">command</a></code> | <code>typing.List[str]</code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | Containers which should be started before this container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.env">env</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>]]</code> | env block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.livenessProbe">liveness_probe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.name">name</a></code> | <code>str</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a></code> | ports block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.startupProbe">startup_probe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.volumeMounts">volume_mounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>]]</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.workingDir">working_dir</a></code> | <code>str</code> | Container's working directory. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.image"></a>

```python
image: str
```

- *Type:* str

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#image CloudRunV2Service#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#args CloudRunV2Service#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#command CloudRunV2Service#command}

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

Containers which should be started before this container.

If specified the container will wait to start until all containers with the listed names are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#depends_on CloudRunV2Service#depends_on}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.env"></a>

```python
env: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#env CloudRunV2Service#env}

---

##### `liveness_probe`<sup>Optional</sup> <a name="liveness_probe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.livenessProbe"></a>

```python
liveness_probe: CloudRunV2ServiceTemplateContainersLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#liveness_probe CloudRunV2Service#liveness_probe}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.ports"></a>

```python
ports: CloudRunV2ServiceTemplateContainersPorts
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a>

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#ports CloudRunV2Service#ports}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.resources"></a>

```python
resources: CloudRunV2ServiceTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#resources CloudRunV2Service#resources}

---

##### `startup_probe`<sup>Optional</sup> <a name="startup_probe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.startupProbe"></a>

```python
startup_probe: CloudRunV2ServiceTemplateContainersStartupProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#startup_probe CloudRunV2Service#startup_probe}

---

##### `volume_mounts`<sup>Optional</sup> <a name="volume_mounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.volumeMounts"></a>

```python
volume_mounts: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>]]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#volume_mounts CloudRunV2Service#volume_mounts}

---

##### `working_dir`<sup>Optional</sup> <a name="working_dir" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#working_dir CloudRunV2Service#working_dir}

---

### CloudRunV2ServiceTemplateContainersEnv <a name="CloudRunV2ServiceTemplateContainersEnv" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv(
  name: str,
  value: str = None,
  value_source: CloudRunV2ServiceTemplateContainersEnvValueSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.name">name</a></code> | <code>str</code> | Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.value">value</a></code> | <code>str</code> | Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.valueSource">value_source</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.value"></a>

```python
value: str
```

- *Type:* str

Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#value CloudRunV2Service#value}

---

##### `value_source`<sup>Optional</sup> <a name="value_source" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.valueSource"></a>

```python
value_source: CloudRunV2ServiceTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#value_source CloudRunV2Service#value_source}

---

### CloudRunV2ServiceTemplateContainersEnvValueSource <a name="CloudRunV2ServiceTemplateContainersEnvValueSource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource(
  secret_key_ref: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource.property.secretKeyRef">secret_key_ref</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secret_key_ref`<sup>Optional</sup> <a name="secret_key_ref" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```python
secret_key_ref: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#secret_key_ref CloudRunV2Service#secret_key_ref}

---

### CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef <a name="CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef(
  secret: str,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.secret">secret</a></code> | <code>str</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.version">version</a></code> | <code>str</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```python
secret: str
```

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#secret CloudRunV2Service#secret}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```python
version: str
```

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#version CloudRunV2Service#version}

---

### CloudRunV2ServiceTemplateContainersLivenessProbe <a name="CloudRunV2ServiceTemplateContainersLivenessProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe(
  failure_threshold: typing.Union[int, float] = None,
  grpc: CloudRunV2ServiceTemplateContainersLivenessProbeGrpc = None,
  http_get: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet = None,
  initial_delay_seconds: typing.Union[int, float] = None,
  period_seconds: typing.Union[int, float] = None,
  tcp_socket: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.httpGet">http_get</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.initialDelaySeconds">initial_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.tcpSocket">tcp_socket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds after which the probe times out. |

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#failure_threshold CloudRunV2Service#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.grpc"></a>

```python
grpc: CloudRunV2ServiceTemplateContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#grpc CloudRunV2Service#grpc}

---

##### `http_get`<sup>Optional</sup> <a name="http_get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.httpGet"></a>

```python
http_get: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#http_get CloudRunV2Service#http_get}

---

##### `initial_delay_seconds`<sup>Optional</sup> <a name="initial_delay_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.initialDelaySeconds"></a>

```python
initial_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#initial_delay_seconds CloudRunV2Service#initial_delay_seconds}

---

##### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#period_seconds CloudRunV2Service#period_seconds}

---

##### `tcp_socket`<sup>Optional</sup> <a name="tcp_socket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.tcpSocket"></a>

```python
tcp_socket: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#tcp_socket CloudRunV2Service#tcp_socket}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#timeout_seconds CloudRunV2Service#timeout_seconds}

---

### CloudRunV2ServiceTemplateContainersLivenessProbeGrpc <a name="CloudRunV2ServiceTemplateContainersLivenessProbeGrpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc(
  port: typing.Union[int, float] = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.service">service</a></code> | <code>str</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#service CloudRunV2Service#service}

---

### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet(
  http_headers: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders]] = None,
  path: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.httpHeaders">http_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>]]</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.path">path</a></code> | <code>str</code> | Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number to access on the container. |

---

##### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```python
http_headers: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>]]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#http_headers CloudRunV2Service#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.path"></a>

```python
path: str
```

- *Type:* str

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#path CloudRunV2Service#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}

---

### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders(
  name: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>str</code> | The header field name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>str</code> | The header field value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```python
name: str
```

- *Type:* str

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#value CloudRunV2Service#value}

---

### CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket <a name="CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket(
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number to access on the container. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number to access on the container.

Must be in the range 1 to 65535.
If not specified, defaults to the exposed port of the container, which
is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}

---

### CloudRunV2ServiceTemplateContainersPorts <a name="CloudRunV2ServiceTemplateContainersPorts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts(
  container_port: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.property.name">name</a></code> | <code>str</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `container_port`<sup>Optional</sup> <a name="container_port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#container_port CloudRunV2Service#container_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.property.name"></a>

```python
name: str
```

- *Type:* str

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}

---

### CloudRunV2ServiceTemplateContainersResources <a name="CloudRunV2ServiceTemplateContainersResources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources(
  cpu_idle: typing.Union[bool, IResolvable] = None,
  limits: typing.Mapping[str] = None,
  startup_cpu_boost: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.cpuIdle">cpu_idle</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether CPU is only allocated during requests. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | Only memory and CPU are supported. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.startupCpuBoost">startup_cpu_boost</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency. |

---

##### `cpu_idle`<sup>Optional</sup> <a name="cpu_idle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.cpuIdle"></a>

```python
cpu_idle: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether CPU is only allocated during requests.

True by default if the parent 'resources' field is not set. However, if
'resources' is set, this field must be explicitly set to true to preserve the default behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#cpu_idle CloudRunV2Service#cpu_idle}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Only memory and CPU are supported.

Use key 'cpu' for CPU limit and 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#limits CloudRunV2Service#limits}

---

##### `startup_cpu_boost`<sup>Optional</sup> <a name="startup_cpu_boost" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.startupCpuBoost"></a>

```python
startup_cpu_boost: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#startup_cpu_boost CloudRunV2Service#startup_cpu_boost}

---

### CloudRunV2ServiceTemplateContainersStartupProbe <a name="CloudRunV2ServiceTemplateContainersStartupProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe(
  failure_threshold: typing.Union[int, float] = None,
  grpc: CloudRunV2ServiceTemplateContainersStartupProbeGrpc = None,
  http_get: CloudRunV2ServiceTemplateContainersStartupProbeHttpGet = None,
  initial_delay_seconds: typing.Union[int, float] = None,
  period_seconds: typing.Union[int, float] = None,
  tcp_socket: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.httpGet">http_get</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.initialDelaySeconds">initial_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.tcpSocket">tcp_socket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds after which the probe times out. |

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#failure_threshold CloudRunV2Service#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.grpc"></a>

```python
grpc: CloudRunV2ServiceTemplateContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#grpc CloudRunV2Service#grpc}

---

##### `http_get`<sup>Optional</sup> <a name="http_get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.httpGet"></a>

```python
http_get: CloudRunV2ServiceTemplateContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#http_get CloudRunV2Service#http_get}

---

##### `initial_delay_seconds`<sup>Optional</sup> <a name="initial_delay_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.initialDelaySeconds"></a>

```python
initial_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#initial_delay_seconds CloudRunV2Service#initial_delay_seconds}

---

##### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#period_seconds CloudRunV2Service#period_seconds}

---

##### `tcp_socket`<sup>Optional</sup> <a name="tcp_socket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.tcpSocket"></a>

```python
tcp_socket: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#tcp_socket CloudRunV2Service#tcp_socket}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#timeout_seconds CloudRunV2Service#timeout_seconds}

---

### CloudRunV2ServiceTemplateContainersStartupProbeGrpc <a name="CloudRunV2ServiceTemplateContainersStartupProbeGrpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc(
  port: typing.Union[int, float] = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.service">service</a></code> | <code>str</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#service CloudRunV2Service#service}

---

### CloudRunV2ServiceTemplateContainersStartupProbeHttpGet <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet(
  http_headers: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders]] = None,
  path: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.httpHeaders">http_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>]]</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.path">path</a></code> | <code>str</code> | Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number to access on the container. |

---

##### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.httpHeaders"></a>

```python
http_headers: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>]]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#http_headers CloudRunV2Service#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.path"></a>

```python
path: str
```

- *Type:* str

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#path CloudRunV2Service#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number to access on the container.

Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}

---

### CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders(
  name: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>str</code> | The header field name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>str</code> | The header field value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```python
name: str
```

- *Type:* str

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#value CloudRunV2Service#value}

---

### CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket <a name="CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket(
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number to access on the container. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number to access on the container.

Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}

---

### CloudRunV2ServiceTemplateContainersVolumeMounts <a name="CloudRunV2ServiceTemplateContainersVolumeMounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts(
  mount_path: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.property.mountPath">mount_path</a></code> | <code>str</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.property.name">name</a></code> | <code>str</code> | This must match the Name of a Volume. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#mount_path CloudRunV2Service#mount_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.property.name"></a>

```python
name: str
```

- *Type:* str

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}

---

### CloudRunV2ServiceTemplateScaling <a name="CloudRunV2ServiceTemplateScaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateScaling(
  max_instance_count: typing.Union[int, float] = None,
  min_instance_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Maximum number of serving instances that this resource should have. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Minimum number of serving instances that this resource should have. |

---

##### `max_instance_count`<sup>Optional</sup> <a name="max_instance_count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of serving instances that this resource should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#max_instance_count CloudRunV2Service#max_instance_count}

---

##### `min_instance_count`<sup>Optional</sup> <a name="min_instance_count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of serving instances that this resource should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#min_instance_count CloudRunV2Service#min_instance_count}

---

### CloudRunV2ServiceTemplateVolumes <a name="CloudRunV2ServiceTemplateVolumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumes(
  name: str,
  cloud_sql_instance: CloudRunV2ServiceTemplateVolumesCloudSqlInstance = None,
  gcs: CloudRunV2ServiceTemplateVolumesGcs = None,
  nfs: CloudRunV2ServiceTemplateVolumesNfs = None,
  secret: CloudRunV2ServiceTemplateVolumesSecret = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.name">name</a></code> | <code>str</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs">CloudRunV2ServiceTemplateVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs">CloudRunV2ServiceTemplateVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a></code> | secret block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.name"></a>

```python
name: str
```

- *Type:* str

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `cloud_sql_instance`<sup>Optional</sup> <a name="cloud_sql_instance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: CloudRunV2ServiceTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#cloud_sql_instance CloudRunV2Service#cloud_sql_instance}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.gcs"></a>

```python
gcs: CloudRunV2ServiceTemplateVolumesGcs
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs">CloudRunV2ServiceTemplateVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#gcs CloudRunV2Service#gcs}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.nfs"></a>

```python
nfs: CloudRunV2ServiceTemplateVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs">CloudRunV2ServiceTemplateVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#nfs CloudRunV2Service#nfs}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.secret"></a>

```python
secret: CloudRunV2ServiceTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#secret CloudRunV2Service#secret}

---

### CloudRunV2ServiceTemplateVolumesCloudSqlInstance <a name="CloudRunV2ServiceTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance(
  instances: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance.property.instances">instances</a></code> | <code>typing.List[str]</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#instances CloudRunV2Service#instances}

---

### CloudRunV2ServiceTemplateVolumesGcs <a name="CloudRunV2ServiceTemplateVolumesGcs" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs(
  bucket: str,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs.property.bucket">bucket</a></code> | <code>str</code> | GCS Bucket name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, mount the GCS bucket as read-only. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#bucket CloudRunV2Service#bucket}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#read_only CloudRunV2Service#read_only}

---

### CloudRunV2ServiceTemplateVolumesNfs <a name="CloudRunV2ServiceTemplateVolumesNfs" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs(
  path: str,
  server: str,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs.property.path">path</a></code> | <code>str</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs.property.server">server</a></code> | <code>str</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, mount the NFS volume as read only. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs.property.path"></a>

```python
path: str
```

- *Type:* str

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#path CloudRunV2Service#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs.property.server"></a>

```python
server: str
```

- *Type:* str

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#server CloudRunV2Service#server}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#read_only CloudRunV2Service#read_only}

---

### CloudRunV2ServiceTemplateVolumesSecret <a name="CloudRunV2ServiceTemplateVolumesSecret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret(
  secret: str,
  default_mode: typing.Union[int, float] = None,
  items: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVolumesSecretItems]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.secret">secret</a></code> | <code>str</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.defaultMode">default_mode</a></code> | <code>typing.Union[int, float]</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>]]</code> | items block. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.secret"></a>

```python
secret: str
```

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#secret CloudRunV2Service#secret}

---

##### `default_mode`<sup>Optional</sup> <a name="default_mode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.defaultMode"></a>

```python
default_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#default_mode CloudRunV2Service#default_mode}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVolumesSecretItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#items CloudRunV2Service#items}

---

### CloudRunV2ServiceTemplateVolumesSecretItems <a name="CloudRunV2ServiceTemplateVolumesSecretItems" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems(
  path: str,
  mode: typing.Union[int, float] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.path">path</a></code> | <code>str</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.mode">mode</a></code> | <code>typing.Union[int, float]</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.version">version</a></code> | <code>str</code> | The Cloud Secret Manager secret version. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.path"></a>

```python
path: str
```

- *Type:* str

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#path CloudRunV2Service#path}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.mode"></a>

```python
mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#mode CloudRunV2Service#mode}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.version"></a>

```python
version: str
```

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#version CloudRunV2Service#version}

---

### CloudRunV2ServiceTemplateVpcAccess <a name="CloudRunV2ServiceTemplateVpcAccess" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess(
  connector: str = None,
  egress: str = None,
  network_interfaces: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.connector">connector</a></code> | <code>str</code> | VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.egress">egress</a></code> | <code>str</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.networkInterfaces">network_interfaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces">CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces</a>]]</code> | network_interfaces block. |

---

##### `connector`<sup>Optional</sup> <a name="connector" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.connector"></a>

```python
connector: str
```

- *Type:* str

VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#connector CloudRunV2Service#connector}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.egress"></a>

```python
egress: str
```

- *Type:* str

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#egress CloudRunV2Service#egress}

---

##### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.networkInterfaces"></a>

```python
network_interfaces: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces">CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#network_interfaces CloudRunV2Service#network_interfaces}

---

### CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces <a name="CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces(
  network: str = None,
  subnetwork: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces.property.network">network</a></code> | <code>str</code> | The VPC network that the Cloud Run resource will be able to send traffic to. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces.property.subnetwork">subnetwork</a></code> | <code>str</code> | The VPC subnetwork that the Cloud Run resource will get IPs from. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces.property.tags">tags</a></code> | <code>typing.List[str]</code> | Network tags applied to this Cloud Run service. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces.property.network"></a>

```python
network: str
```

- *Type:* str

The VPC network that the Cloud Run resource will be able to send traffic to.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
looked up from the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#network CloudRunV2Service#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The VPC subnetwork that the Cloud Run resource will get IPs from.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
subnetwork with the same name with the network will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#subnetwork CloudRunV2Service#subnetwork}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Network tags applied to this Cloud Run service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#tags CloudRunV2Service#tags}

---

### CloudRunV2ServiceTerminalCondition <a name="CloudRunV2ServiceTerminalCondition" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTerminalCondition()
```


### CloudRunV2ServiceTimeouts <a name="CloudRunV2ServiceTimeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#create CloudRunV2Service#create}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#delete CloudRunV2Service#delete}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#update CloudRunV2Service#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#create CloudRunV2Service#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#delete CloudRunV2Service#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#update CloudRunV2Service#update}.

---

### CloudRunV2ServiceTraffic <a name="CloudRunV2ServiceTraffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTraffic(
  percent: typing.Union[int, float] = None,
  revision: str = None,
  tag: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | Specifies percent of the traffic to this Revision. This defaults to zero if unspecified. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.revision">revision</a></code> | <code>str</code> | Revision to which to send this portion of traffic, if traffic allocation is by revision. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.tag">tag</a></code> | <code>str</code> | Indicates a string to be part of the URI to exclusively reference this target. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.type">type</a></code> | <code>str</code> | The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"]. |

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#percent CloudRunV2Service#percent}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.revision"></a>

```python
revision: str
```

- *Type:* str

Revision to which to send this portion of traffic, if traffic allocation is by revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#revision CloudRunV2Service#revision}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.tag"></a>

```python
tag: str
```

- *Type:* str

Indicates a string to be part of the URI to exclusively reference this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#tag CloudRunV2Service#tag}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.type"></a>

```python
type: str
```

- *Type:* str

The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#type CloudRunV2Service#type}

---

### CloudRunV2ServiceTrafficStatuses <a name="CloudRunV2ServiceTrafficStatuses" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatuses.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTrafficStatuses()
```


## Classes <a name="Classes" id="Classes"></a>

### CloudRunV2ServiceBinaryAuthorizationOutputReference <a name="CloudRunV2ServiceBinaryAuthorizationOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resetBreakglassJustification">reset_breakglass_justification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resetUseDefault">reset_use_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_breakglass_justification` <a name="reset_breakglass_justification" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```python
def reset_breakglass_justification() -> None
```

##### `reset_use_default` <a name="reset_use_default" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resetUseDefault"></a>

```python
def reset_use_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustificationInput">breakglass_justification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefaultInput">use_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustification">breakglass_justification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefault">use_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `breakglass_justification_input`<sup>Optional</sup> <a name="breakglass_justification_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```python
breakglass_justification_input: str
```

- *Type:* str

---

##### `use_default_input`<sup>Optional</sup> <a name="use_default_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```python
use_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `breakglass_justification`<sup>Required</sup> <a name="breakglass_justification" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```python
breakglass_justification: str
```

- *Type:* str

---

##### `use_default`<sup>Required</sup> <a name="use_default" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefault"></a>

```python
use_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a>

---


### CloudRunV2ServiceConditionsList <a name="CloudRunV2ServiceConditionsList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2ServiceConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudRunV2ServiceConditionsOutputReference <a name="CloudRunV2ServiceConditionsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.executionReason">execution_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.revisionReason">revision_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditions">CloudRunV2ServiceConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_reason`<sup>Required</sup> <a name="execution_reason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.executionReason"></a>

```python
execution_reason: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `revision_reason`<sup>Required</sup> <a name="revision_reason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.revisionReason"></a>

```python
revision_reason: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceConditions
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditions">CloudRunV2ServiceConditions</a>

---


### CloudRunV2ServiceTemplateContainersEnvList <a name="CloudRunV2ServiceTemplateContainersEnvList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2ServiceTemplateContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>]]

---


### CloudRunV2ServiceTemplateContainersEnvOutputReference <a name="CloudRunV2ServiceTemplateContainersEnvOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource">put_value_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resetValueSource">reset_value_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_source` <a name="put_value_source" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource"></a>

```python
def put_value_source(
  secret_key_ref: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef = None
) -> None
```

###### `secret_key_ref`<sup>Optional</sup> <a name="secret_key_ref" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource.parameter.secretKeyRef"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#secret_key_ref CloudRunV2Service#secret_key_ref}

---

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_source` <a name="reset_value_source" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resetValueSource"></a>

```python
def reset_value_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSource">value_source</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference">CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSourceInput">value_source_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_source`<sup>Required</sup> <a name="value_source" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSource"></a>

```python
value_source: CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference">CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value_source_input`<sup>Optional</sup> <a name="value_source_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```python
value_source_input: CloudRunV2ServiceTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2ServiceTemplateContainersEnv]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>]

---


### CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference <a name="CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">put_secret_key_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">reset_secret_key_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_key_ref` <a name="put_secret_key_ref" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```python
def put_secret_key_ref(
  secret: str,
  version: str = None
) -> None
```

###### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.secret"></a>

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#secret CloudRunV2Service#secret}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.version"></a>

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#version CloudRunV2Service#version}

---

##### `reset_secret_key_ref` <a name="reset_secret_key_ref" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```python
def reset_secret_key_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">secret_key_ref</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">secret_key_ref_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_key_ref`<sup>Required</sup> <a name="secret_key_ref" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```python
secret_key_ref: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `secret_key_ref_input`<sup>Optional</sup> <a name="secret_key_ref_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```python
secret_key_ref_input: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a>

---


### CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### CloudRunV2ServiceTemplateContainersList <a name="CloudRunV2ServiceTemplateContainersList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2ServiceTemplateContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>]]

---


### CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

---


### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>]]

---


### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>]

---


### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">put_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">reset_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http_headers` <a name="put_http_headers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```python
def put_http_headers(
  value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>]]

---

##### `reset_http_headers` <a name="reset_http_headers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```python
def reset_http_headers() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">http_headers</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">http_headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_headers`<sup>Required</sup> <a name="http_headers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```python
http_headers: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `http_headers_input`<sup>Optional</sup> <a name="http_headers_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```python
http_headers_input: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>]]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---


### CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc">put_grpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet">put_http_get</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket">put_tcp_socket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetGrpc">reset_grpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetHttpGet">reset_http_get</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetInitialDelaySeconds">reset_initial_delay_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetPeriodSeconds">reset_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTcpSocket">reset_tcp_socket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_grpc` <a name="put_grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc"></a>

```python
def put_grpc(
  port: typing.Union[int, float] = None,
  service: str = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc.parameter.service"></a>

- *Type:* str

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#service CloudRunV2Service#service}

---

##### `put_http_get` <a name="put_http_get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet"></a>

```python
def put_http_get(
  http_headers: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders]] = None,
  path: str = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet.parameter.httpHeaders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>]]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#http_headers CloudRunV2Service#http_headers}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet.parameter.path"></a>

- *Type:* str

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#path CloudRunV2Service#path}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}

---

##### `put_tcp_socket` <a name="put_tcp_socket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket"></a>

```python
def put_tcp_socket(
  port: typing.Union[int, float]
) -> None
```

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number to access on the container.

Must be in the range 1 to 65535.
If not specified, defaults to the exposed port of the container, which
is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}

---

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_grpc` <a name="reset_grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetGrpc"></a>

```python
def reset_grpc() -> None
```

##### `reset_http_get` <a name="reset_http_get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetHttpGet"></a>

```python
def reset_http_get() -> None
```

##### `reset_initial_delay_seconds` <a name="reset_initial_delay_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```python
def reset_initial_delay_seconds() -> None
```

##### `reset_period_seconds` <a name="reset_period_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```python
def reset_period_seconds() -> None
```

##### `reset_tcp_socket` <a name="reset_tcp_socket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTcpSocket"></a>

```python
def reset_tcp_socket() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGet">http_get</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocket">tcp_socket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpcInput">grpc_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGetInput">http_get_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">initial_delay_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSecondsInput">period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocketInput">tcp_socket_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds">initial_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpc"></a>

```python
grpc: CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference</a>

---

##### `http_get`<sup>Required</sup> <a name="http_get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGet"></a>

```python
http_get: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference</a>

---

##### `tcp_socket`<sup>Required</sup> <a name="tcp_socket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocket"></a>

```python
tcp_socket: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference</a>

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grpc_input`<sup>Optional</sup> <a name="grpc_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpcInput"></a>

```python
grpc_input: CloudRunV2ServiceTemplateContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

---

##### `http_get_input`<sup>Optional</sup> <a name="http_get_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```python
http_get_input: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---

##### `initial_delay_seconds_input`<sup>Optional</sup> <a name="initial_delay_seconds_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```python
initial_delay_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds_input`<sup>Optional</sup> <a name="period_seconds_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```python
period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_socket_input`<sup>Optional</sup> <a name="tcp_socket_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocketInput"></a>

```python
tcp_socket_input: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_delay_seconds`<sup>Required</sup> <a name="initial_delay_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```python
initial_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds`<sup>Required</sup> <a name="period_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateContainersLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a>

---


### CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---


### CloudRunV2ServiceTemplateContainersOutputReference <a name="CloudRunV2ServiceTemplateContainersOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe">put_liveness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putPorts">put_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe">put_startup_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts">put_volume_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetDependsOn">reset_depends_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetLivenessProbe">reset_liveness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetStartupProbe">reset_startup_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetVolumeMounts">reset_volume_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetWorkingDir">reset_working_dir</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putEnv"></a>

```python
def put_env(
  value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersEnv]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>]]

---

##### `put_liveness_probe` <a name="put_liveness_probe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe"></a>

```python
def put_liveness_probe(
  failure_threshold: typing.Union[int, float] = None,
  grpc: CloudRunV2ServiceTemplateContainersLivenessProbeGrpc = None,
  http_get: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet = None,
  initial_delay_seconds: typing.Union[int, float] = None,
  period_seconds: typing.Union[int, float] = None,
  tcp_socket: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#failure_threshold CloudRunV2Service#failure_threshold}

---

###### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe.parameter.grpc"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#grpc CloudRunV2Service#grpc}

---

###### `http_get`<sup>Optional</sup> <a name="http_get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe.parameter.httpGet"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#http_get CloudRunV2Service#http_get}

---

###### `initial_delay_seconds`<sup>Optional</sup> <a name="initial_delay_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe.parameter.initialDelaySeconds"></a>

- *Type:* typing.Union[int, float]

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#initial_delay_seconds CloudRunV2Service#initial_delay_seconds}

---

###### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe.parameter.periodSeconds"></a>

- *Type:* typing.Union[int, float]

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#period_seconds CloudRunV2Service#period_seconds}

---

###### `tcp_socket`<sup>Optional</sup> <a name="tcp_socket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe.parameter.tcpSocket"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#tcp_socket CloudRunV2Service#tcp_socket}

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#timeout_seconds CloudRunV2Service#timeout_seconds}

---

##### `put_ports` <a name="put_ports" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putPorts"></a>

```python
def put_ports(
  container_port: typing.Union[int, float] = None,
  name: str = None
) -> None
```

###### `container_port`<sup>Optional</sup> <a name="container_port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putPorts.parameter.containerPort"></a>

- *Type:* typing.Union[int, float]

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#container_port CloudRunV2Service#container_port}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putPorts.parameter.name"></a>

- *Type:* str

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `put_resources` <a name="put_resources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putResources"></a>

```python
def put_resources(
  cpu_idle: typing.Union[bool, IResolvable] = None,
  limits: typing.Mapping[str] = None,
  startup_cpu_boost: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cpu_idle`<sup>Optional</sup> <a name="cpu_idle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putResources.parameter.cpuIdle"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether CPU is only allocated during requests.

True by default if the parent 'resources' field is not set. However, if
'resources' is set, this field must be explicitly set to true to preserve the default behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#cpu_idle CloudRunV2Service#cpu_idle}

---

###### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putResources.parameter.limits"></a>

- *Type:* typing.Mapping[str]

Only memory and CPU are supported.

Use key 'cpu' for CPU limit and 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#limits CloudRunV2Service#limits}

---

###### `startup_cpu_boost`<sup>Optional</sup> <a name="startup_cpu_boost" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putResources.parameter.startupCpuBoost"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#startup_cpu_boost CloudRunV2Service#startup_cpu_boost}

---

##### `put_startup_probe` <a name="put_startup_probe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe"></a>

```python
def put_startup_probe(
  failure_threshold: typing.Union[int, float] = None,
  grpc: CloudRunV2ServiceTemplateContainersStartupProbeGrpc = None,
  http_get: CloudRunV2ServiceTemplateContainersStartupProbeHttpGet = None,
  initial_delay_seconds: typing.Union[int, float] = None,
  period_seconds: typing.Union[int, float] = None,
  tcp_socket: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#failure_threshold CloudRunV2Service#failure_threshold}

---

###### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe.parameter.grpc"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#grpc CloudRunV2Service#grpc}

---

###### `http_get`<sup>Optional</sup> <a name="http_get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe.parameter.httpGet"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#http_get CloudRunV2Service#http_get}

---

###### `initial_delay_seconds`<sup>Optional</sup> <a name="initial_delay_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe.parameter.initialDelaySeconds"></a>

- *Type:* typing.Union[int, float]

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#initial_delay_seconds CloudRunV2Service#initial_delay_seconds}

---

###### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe.parameter.periodSeconds"></a>

- *Type:* typing.Union[int, float]

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#period_seconds CloudRunV2Service#period_seconds}

---

###### `tcp_socket`<sup>Optional</sup> <a name="tcp_socket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe.parameter.tcpSocket"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#tcp_socket CloudRunV2Service#tcp_socket}

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#timeout_seconds CloudRunV2Service#timeout_seconds}

---

##### `put_volume_mounts` <a name="put_volume_mounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts"></a>

```python
def put_volume_mounts(
  value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersVolumeMounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>]]

---

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_depends_on` <a name="reset_depends_on" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetDependsOn"></a>

```python
def reset_depends_on() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_liveness_probe` <a name="reset_liveness_probe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetLivenessProbe"></a>

```python
def reset_liveness_probe() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_startup_probe` <a name="reset_startup_probe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetStartupProbe"></a>

```python
def reset_startup_probe() -> None
```

##### `reset_volume_mounts` <a name="reset_volume_mounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetVolumeMounts"></a>

```python
def reset_volume_mounts() -> None
```

##### `reset_working_dir` <a name="reset_working_dir" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetWorkingDir"></a>

```python
def reset_working_dir() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList">CloudRunV2ServiceTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbe">liveness_probe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference">CloudRunV2ServiceTemplateContainersPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference">CloudRunV2ServiceTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.startupProbe">startup_probe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.volumeMounts">volume_mounts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList">CloudRunV2ServiceTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.dependsOnInput">depends_on_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.envInput">env_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbeInput">liveness_probe_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.portsInput">ports_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.resourcesInput">resources_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.startupProbeInput">startup_probe_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.volumeMountsInput">volume_mounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.workingDirInput">working_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.workingDir">working_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.env"></a>

```python
env: CloudRunV2ServiceTemplateContainersEnvList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList">CloudRunV2ServiceTemplateContainersEnvList</a>

---

##### `liveness_probe`<sup>Required</sup> <a name="liveness_probe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbe"></a>

```python
liveness_probe: CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.ports"></a>

```python
ports: CloudRunV2ServiceTemplateContainersPortsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference">CloudRunV2ServiceTemplateContainersPortsOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.resources"></a>

```python
resources: CloudRunV2ServiceTemplateContainersResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference">CloudRunV2ServiceTemplateContainersResourcesOutputReference</a>

---

##### `startup_probe`<sup>Required</sup> <a name="startup_probe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.startupProbe"></a>

```python
startup_probe: CloudRunV2ServiceTemplateContainersStartupProbeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeOutputReference</a>

---

##### `volume_mounts`<sup>Required</sup> <a name="volume_mounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.volumeMounts"></a>

```python
volume_mounts: CloudRunV2ServiceTemplateContainersVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList">CloudRunV2ServiceTemplateContainersVolumeMountsList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `depends_on_input`<sup>Optional</sup> <a name="depends_on_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.dependsOnInput"></a>

```python
depends_on_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.envInput"></a>

```python
env_input: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>]]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `liveness_probe_input`<sup>Optional</sup> <a name="liveness_probe_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbeInput"></a>

```python
liveness_probe_input: CloudRunV2ServiceTemplateContainersLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.portsInput"></a>

```python
ports_input: CloudRunV2ServiceTemplateContainersPorts
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a>

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.resourcesInput"></a>

```python
resources_input: CloudRunV2ServiceTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a>

---

##### `startup_probe_input`<sup>Optional</sup> <a name="startup_probe_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.startupProbeInput"></a>

```python
startup_probe_input: CloudRunV2ServiceTemplateContainersStartupProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a>

---

##### `volume_mounts_input`<sup>Optional</sup> <a name="volume_mounts_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.volumeMountsInput"></a>

```python
volume_mounts_input: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>]]

---

##### `working_dir_input`<sup>Optional</sup> <a name="working_dir_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.workingDirInput"></a>

```python
working_dir_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `depends_on`<sup>Required</sup> <a name="depends_on" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `working_dir`<sup>Required</sup> <a name="working_dir" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2ServiceTemplateContainers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>]

---


### CloudRunV2ServiceTemplateContainersPortsOutputReference <a name="CloudRunV2ServiceTemplateContainersPortsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resetContainerPort">reset_container_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_port` <a name="reset_container_port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resetContainerPort"></a>

```python
def reset_container_port() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPortInput">container_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_port_input`<sup>Optional</sup> <a name="container_port_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPortInput"></a>

```python
container_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateContainersPorts
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a>

---


### CloudRunV2ServiceTemplateContainersResourcesOutputReference <a name="CloudRunV2ServiceTemplateContainersResourcesOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetCpuIdle">reset_cpu_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetStartupCpuBoost">reset_startup_cpu_boost</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_idle` <a name="reset_cpu_idle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetCpuIdle"></a>

```python
def reset_cpu_idle() -> None
```

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_startup_cpu_boost` <a name="reset_startup_cpu_boost" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetStartupCpuBoost"></a>

```python
def reset_startup_cpu_boost() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdleInput">cpu_idle_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limitsInput">limits_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.startupCpuBoostInput">startup_cpu_boost_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdle">cpu_idle</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.startupCpuBoost">startup_cpu_boost</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_idle_input`<sup>Optional</sup> <a name="cpu_idle_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdleInput"></a>

```python
cpu_idle_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```python
limits_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `startup_cpu_boost_input`<sup>Optional</sup> <a name="startup_cpu_boost_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.startupCpuBoostInput"></a>

```python
startup_cpu_boost_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_idle`<sup>Required</sup> <a name="cpu_idle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdle"></a>

```python
cpu_idle: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `startup_cpu_boost`<sup>Required</sup> <a name="startup_cpu_boost" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.startupCpuBoost"></a>

```python
startup_cpu_boost: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a>

---


### CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

---


### CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>]]

---


### CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>]

---


### CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders">put_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">reset_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http_headers` <a name="put_http_headers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```python
def put_http_headers(
  value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>]]

---

##### `reset_http_headers` <a name="reset_http_headers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```python
def reset_http_headers() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders">http_headers</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">http_headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_headers`<sup>Required</sup> <a name="http_headers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```python
http_headers: CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `http_headers_input`<sup>Optional</sup> <a name="http_headers_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```python
http_headers_input: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>]]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---


### CloudRunV2ServiceTemplateContainersStartupProbeOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc">put_grpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet">put_http_get</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket">put_tcp_socket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetGrpc">reset_grpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetHttpGet">reset_http_get</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds">reset_initial_delay_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetPeriodSeconds">reset_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTcpSocket">reset_tcp_socket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_grpc` <a name="put_grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc"></a>

```python
def put_grpc(
  port: typing.Union[int, float] = None,
  service: str = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc.parameter.service"></a>

- *Type:* str

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#service CloudRunV2Service#service}

---

##### `put_http_get` <a name="put_http_get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet"></a>

```python
def put_http_get(
  http_headers: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders]] = None,
  path: str = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet.parameter.httpHeaders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>]]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#http_headers CloudRunV2Service#http_headers}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet.parameter.path"></a>

- *Type:* str

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#path CloudRunV2Service#path}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number to access on the container.

Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}

---

##### `put_tcp_socket` <a name="put_tcp_socket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket"></a>

```python
def put_tcp_socket(
  port: typing.Union[int, float] = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number to access on the container.

Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}

---

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_grpc` <a name="reset_grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetGrpc"></a>

```python
def reset_grpc() -> None
```

##### `reset_http_get` <a name="reset_http_get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetHttpGet"></a>

```python
def reset_http_get() -> None
```

##### `reset_initial_delay_seconds` <a name="reset_initial_delay_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```python
def reset_initial_delay_seconds() -> None
```

##### `reset_period_seconds` <a name="reset_period_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```python
def reset_period_seconds() -> None
```

##### `reset_tcp_socket` <a name="reset_tcp_socket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTcpSocket"></a>

```python
def reset_tcp_socket() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGet">http_get</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocket">tcp_socket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpcInput">grpc_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGetInput">http_get_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput">initial_delay_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSecondsInput">period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocketInput">tcp_socket_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds">initial_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpc"></a>

```python
grpc: CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference</a>

---

##### `http_get`<sup>Required</sup> <a name="http_get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGet"></a>

```python
http_get: CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference</a>

---

##### `tcp_socket`<sup>Required</sup> <a name="tcp_socket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocket"></a>

```python
tcp_socket: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference</a>

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grpc_input`<sup>Optional</sup> <a name="grpc_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpcInput"></a>

```python
grpc_input: CloudRunV2ServiceTemplateContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

---

##### `http_get_input`<sup>Optional</sup> <a name="http_get_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGetInput"></a>

```python
http_get_input: CloudRunV2ServiceTemplateContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---

##### `initial_delay_seconds_input`<sup>Optional</sup> <a name="initial_delay_seconds_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```python
initial_delay_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds_input`<sup>Optional</sup> <a name="period_seconds_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```python
period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_socket_input`<sup>Optional</sup> <a name="tcp_socket_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```python
tcp_socket_input: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_delay_seconds`<sup>Required</sup> <a name="initial_delay_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```python
initial_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds`<sup>Required</sup> <a name="period_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateContainersStartupProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a>

---


### CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---


### CloudRunV2ServiceTemplateContainersVolumeMountsList <a name="CloudRunV2ServiceTemplateContainersVolumeMountsList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>]]

---


### CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference <a name="CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2ServiceTemplateContainersVolumeMounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>]

---


### CloudRunV2ServiceTemplateOutputReference <a name="CloudRunV2ServiceTemplateOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putContainers">put_containers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putScaling">put_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVpcAccess">put_vpc_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetContainers">reset_containers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetExecutionEnvironment">reset_execution_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetMaxInstanceRequestConcurrency">reset_max_instance_request_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetRevision">reset_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetScaling">reset_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetSessionAffinity">reset_session_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetVpcAccess">reset_vpc_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_containers` <a name="put_containers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putContainers"></a>

```python
def put_containers(
  value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>]]

---

##### `put_scaling` <a name="put_scaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putScaling"></a>

```python
def put_scaling(
  max_instance_count: typing.Union[int, float] = None,
  min_instance_count: typing.Union[int, float] = None
) -> None
```

###### `max_instance_count`<sup>Optional</sup> <a name="max_instance_count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putScaling.parameter.maxInstanceCount"></a>

- *Type:* typing.Union[int, float]

Maximum number of serving instances that this resource should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#max_instance_count CloudRunV2Service#max_instance_count}

---

###### `min_instance_count`<sup>Optional</sup> <a name="min_instance_count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putScaling.parameter.minInstanceCount"></a>

- *Type:* typing.Union[int, float]

Minimum number of serving instances that this resource should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#min_instance_count CloudRunV2Service#min_instance_count}

---

##### `put_volumes` <a name="put_volumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVolumes"></a>

```python
def put_volumes(
  value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>]]

---

##### `put_vpc_access` <a name="put_vpc_access" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVpcAccess"></a>

```python
def put_vpc_access(
  connector: str = None,
  egress: str = None,
  network_interfaces: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces]] = None
) -> None
```

###### `connector`<sup>Optional</sup> <a name="connector" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVpcAccess.parameter.connector"></a>

- *Type:* str

VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#connector CloudRunV2Service#connector}

---

###### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVpcAccess.parameter.egress"></a>

- *Type:* str

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#egress CloudRunV2Service#egress}

---

###### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVpcAccess.parameter.networkInterfaces"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces">CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#network_interfaces CloudRunV2Service#network_interfaces}

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_containers` <a name="reset_containers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetContainers"></a>

```python
def reset_containers() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_execution_environment` <a name="reset_execution_environment" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetExecutionEnvironment"></a>

```python
def reset_execution_environment() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_max_instance_request_concurrency` <a name="reset_max_instance_request_concurrency" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetMaxInstanceRequestConcurrency"></a>

```python
def reset_max_instance_request_concurrency() -> None
```

##### `reset_revision` <a name="reset_revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```

##### `reset_scaling` <a name="reset_scaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetScaling"></a>

```python
def reset_scaling() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_session_affinity` <a name="reset_session_affinity" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetSessionAffinity"></a>

```python
def reset_session_affinity() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```

##### `reset_vpc_access` <a name="reset_vpc_access" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetVpcAccess"></a>

```python
def reset_vpc_access() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList">CloudRunV2ServiceTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference">CloudRunV2ServiceTemplateScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList">CloudRunV2ServiceTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.vpcAccess">vpc_access</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference">CloudRunV2ServiceTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.containersInput">containers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.executionEnvironmentInput">execution_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrencyInput">max_instance_request_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.scalingInput">scaling_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.sessionAffinityInput">session_affinity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.volumesInput">volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.vpcAccessInput">vpc_access_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.executionEnvironment">execution_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrency">max_instance_request_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.sessionAffinity">session_affinity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.containers"></a>

```python
containers: CloudRunV2ServiceTemplateContainersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList">CloudRunV2ServiceTemplateContainersList</a>

---

##### `scaling`<sup>Required</sup> <a name="scaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.scaling"></a>

```python
scaling: CloudRunV2ServiceTemplateScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference">CloudRunV2ServiceTemplateScalingOutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.volumes"></a>

```python
volumes: CloudRunV2ServiceTemplateVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList">CloudRunV2ServiceTemplateVolumesList</a>

---

##### `vpc_access`<sup>Required</sup> <a name="vpc_access" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.vpcAccess"></a>

```python
vpc_access: CloudRunV2ServiceTemplateVpcAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference">CloudRunV2ServiceTemplateVpcAccessOutputReference</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `containers_input`<sup>Optional</sup> <a name="containers_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.containersInput"></a>

```python
containers_input: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>]]

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `execution_environment_input`<sup>Optional</sup> <a name="execution_environment_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.executionEnvironmentInput"></a>

```python
execution_environment_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_instance_request_concurrency_input`<sup>Optional</sup> <a name="max_instance_request_concurrency_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrencyInput"></a>

```python
max_instance_request_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `scaling_input`<sup>Optional</sup> <a name="scaling_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.scalingInput"></a>

```python
scaling_input: CloudRunV2ServiceTemplateScaling
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `session_affinity_input`<sup>Optional</sup> <a name="session_affinity_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.sessionAffinityInput"></a>

```python
session_affinity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.volumesInput"></a>

```python
volumes_input: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>]]

---

##### `vpc_access_input`<sup>Optional</sup> <a name="vpc_access_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.vpcAccessInput"></a>

```python
vpc_access_input: CloudRunV2ServiceTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `execution_environment`<sup>Required</sup> <a name="execution_environment" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.executionEnvironment"></a>

```python
execution_environment: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_instance_request_concurrency`<sup>Required</sup> <a name="max_instance_request_concurrency" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrency"></a>

```python
max_instance_request_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `session_affinity`<sup>Required</sup> <a name="session_affinity" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.sessionAffinity"></a>

```python
session_affinity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a>

---


### CloudRunV2ServiceTemplateScalingOutputReference <a name="CloudRunV2ServiceTemplateScalingOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resetMaxInstanceCount">reset_max_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resetMinInstanceCount">reset_min_instance_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_instance_count` <a name="reset_max_instance_count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resetMaxInstanceCount"></a>

```python
def reset_max_instance_count() -> None
```

##### `reset_min_instance_count` <a name="reset_min_instance_count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resetMinInstanceCount"></a>

```python
def reset_min_instance_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCountInput">max_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCountInput">min_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_instance_count_input`<sup>Optional</sup> <a name="max_instance_count_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCountInput"></a>

```python
max_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count_input`<sup>Optional</sup> <a name="min_instance_count_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCountInput"></a>

```python
min_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateScaling
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a>

---


### CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference <a name="CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">reset_instances</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instances` <a name="reset_instances" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```python
def reset_instances() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">instances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```python
instances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---


### CloudRunV2ServiceTemplateVolumesGcsOutputReference <a name="CloudRunV2ServiceTemplateVolumesGcsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs">CloudRunV2ServiceTemplateVolumesGcs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateVolumesGcs
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs">CloudRunV2ServiceTemplateVolumesGcs</a>

---


### CloudRunV2ServiceTemplateVolumesList <a name="CloudRunV2ServiceTemplateVolumesList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2ServiceTemplateVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>]]

---


### CloudRunV2ServiceTemplateVolumesNfsOutputReference <a name="CloudRunV2ServiceTemplateVolumesNfsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs">CloudRunV2ServiceTemplateVolumesNfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs">CloudRunV2ServiceTemplateVolumesNfs</a>

---


### CloudRunV2ServiceTemplateVolumesOutputReference <a name="CloudRunV2ServiceTemplateVolumesOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance">put_cloud_sql_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putGcs">put_gcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putNfs">put_nfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetCloudSqlInstance">reset_cloud_sql_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetGcs">reset_gcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetNfs">reset_nfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetSecret">reset_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_sql_instance` <a name="put_cloud_sql_instance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```python
def put_cloud_sql_instance(
  instances: typing.List[str] = None
) -> None
```

###### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance.parameter.instances"></a>

- *Type:* typing.List[str]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#instances CloudRunV2Service#instances}

---

##### `put_gcs` <a name="put_gcs" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putGcs"></a>

```python
def put_gcs(
  bucket: str,
  read_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putGcs.parameter.bucket"></a>

- *Type:* str

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#bucket CloudRunV2Service#bucket}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putGcs.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#read_only CloudRunV2Service#read_only}

---

##### `put_nfs` <a name="put_nfs" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putNfs"></a>

```python
def put_nfs(
  path: str,
  server: str,
  read_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putNfs.parameter.path"></a>

- *Type:* str

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#path CloudRunV2Service#path}

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putNfs.parameter.server"></a>

- *Type:* str

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#server CloudRunV2Service#server}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putNfs.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#read_only CloudRunV2Service#read_only}

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putSecret"></a>

```python
def put_secret(
  secret: str,
  default_mode: typing.Union[int, float] = None,
  items: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVolumesSecretItems]] = None
) -> None
```

###### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putSecret.parameter.secret"></a>

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#secret CloudRunV2Service#secret}

---

###### `default_mode`<sup>Optional</sup> <a name="default_mode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putSecret.parameter.defaultMode"></a>

- *Type:* typing.Union[int, float]

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#default_mode CloudRunV2Service#default_mode}

---

###### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putSecret.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/cloud_run_v2_service#items CloudRunV2Service#items}

---

##### `reset_cloud_sql_instance` <a name="reset_cloud_sql_instance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```python
def reset_cloud_sql_instance() -> None
```

##### `reset_gcs` <a name="reset_gcs" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetGcs"></a>

```python
def reset_gcs() -> None
```

##### `reset_nfs` <a name="reset_nfs" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetNfs"></a>

```python
def reset_nfs() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference">CloudRunV2ServiceTemplateVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference">CloudRunV2ServiceTemplateVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference">CloudRunV2ServiceTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstanceInput">cloud_sql_instance_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.gcsInput">gcs_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs">CloudRunV2ServiceTemplateVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.nfsInput">nfs_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs">CloudRunV2ServiceTemplateVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.secretInput">secret_input</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_sql_instance`<sup>Required</sup> <a name="cloud_sql_instance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.gcs"></a>

```python
gcs: CloudRunV2ServiceTemplateVolumesGcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcsOutputReference">CloudRunV2ServiceTemplateVolumesGcsOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.nfs"></a>

```python
nfs: CloudRunV2ServiceTemplateVolumesNfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfsOutputReference">CloudRunV2ServiceTemplateVolumesNfsOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.secret"></a>

```python
secret: CloudRunV2ServiceTemplateVolumesSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference">CloudRunV2ServiceTemplateVolumesSecretOutputReference</a>

---

##### `cloud_sql_instance_input`<sup>Optional</sup> <a name="cloud_sql_instance_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```python
cloud_sql_instance_input: CloudRunV2ServiceTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---

##### `gcs_input`<sup>Optional</sup> <a name="gcs_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.gcsInput"></a>

```python
gcs_input: CloudRunV2ServiceTemplateVolumesGcs
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesGcs">CloudRunV2ServiceTemplateVolumesGcs</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nfs_input`<sup>Optional</sup> <a name="nfs_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.nfsInput"></a>

```python
nfs_input: CloudRunV2ServiceTemplateVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesNfs">CloudRunV2ServiceTemplateVolumesNfs</a>

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.secretInput"></a>

```python
secret_input: CloudRunV2ServiceTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2ServiceTemplateVolumes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>]

---


### CloudRunV2ServiceTemplateVolumesSecretItemsList <a name="CloudRunV2ServiceTemplateVolumesSecretItemsList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVolumesSecretItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>]]

---


### CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference <a name="CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.modeInput">mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```python
mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```python
mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2ServiceTemplateVolumesSecretItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>]

---


### CloudRunV2ServiceTemplateVolumesSecretOutputReference <a name="CloudRunV2ServiceTemplateVolumesSecretOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems">put_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resetDefaultMode">reset_default_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVolumesSecretItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>]]

---

##### `reset_default_mode` <a name="reset_default_mode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```python
def reset_default_mode() -> None
```

##### `reset_items` <a name="reset_items" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList">CloudRunV2ServiceTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultModeInput">default_mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultMode">default_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.items"></a>

```python
items: CloudRunV2ServiceTemplateVolumesSecretItemsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList">CloudRunV2ServiceTemplateVolumesSecretItemsList</a>

---

##### `default_mode_input`<sup>Optional</sup> <a name="default_mode_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```python
default_mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVolumesSecretItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>]]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `default_mode`<sup>Required</sup> <a name="default_mode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```python
default_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a>

---


### CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList <a name="CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces">CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces">CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces</a>]]

---


### CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference <a name="CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces">CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces">CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces</a>]

---


### CloudRunV2ServiceTemplateVpcAccessOutputReference <a name="CloudRunV2ServiceTemplateVpcAccessOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.putNetworkInterfaces">put_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetConnector">reset_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetNetworkInterfaces">reset_network_interfaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_interfaces` <a name="put_network_interfaces" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.putNetworkInterfaces"></a>

```python
def put_network_interfaces(
  value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces">CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces</a>]]

---

##### `reset_connector` <a name="reset_connector" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetConnector"></a>

```python
def reset_connector() -> None
```

##### `reset_egress` <a name="reset_egress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_network_interfaces` <a name="reset_network_interfaces" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetNetworkInterfaces"></a>

```python
def reset_network_interfaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList">CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.connectorInput">connector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.egressInput">egress_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.networkInterfacesInput">network_interfaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces">CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.connector">connector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.egress">egress</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.networkInterfaces"></a>

```python
network_interfaces: CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList">CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList</a>

---

##### `connector_input`<sup>Optional</sup> <a name="connector_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.connectorInput"></a>

```python
connector_input: str
```

- *Type:* str

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.egressInput"></a>

```python
egress_input: str
```

- *Type:* str

---

##### `network_interfaces_input`<sup>Optional</sup> <a name="network_interfaces_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.networkInterfacesInput"></a>

```python
network_interfaces_input: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces">CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces</a>]]

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.connector"></a>

```python
connector: str
```

- *Type:* str

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.egress"></a>

```python
egress: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a>

---


### CloudRunV2ServiceTerminalConditionList <a name="CloudRunV2ServiceTerminalConditionList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTerminalConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2ServiceTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudRunV2ServiceTerminalConditionOutputReference <a name="CloudRunV2ServiceTerminalConditionOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.executionReason">execution_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.revisionReason">revision_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalCondition">CloudRunV2ServiceTerminalCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_reason`<sup>Required</sup> <a name="execution_reason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.executionReason"></a>

```python
execution_reason: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `revision_reason`<sup>Required</sup> <a name="revision_reason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.revisionReason"></a>

```python
revision_reason: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTerminalCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalCondition">CloudRunV2ServiceTerminalCondition</a>

---


### CloudRunV2ServiceTimeoutsOutputReference <a name="CloudRunV2ServiceTimeoutsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2ServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a>]

---


### CloudRunV2ServiceTrafficList <a name="CloudRunV2ServiceTrafficList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTrafficList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2ServiceTrafficOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudRunV2ServiceTraffic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>]]

---


### CloudRunV2ServiceTrafficOutputReference <a name="CloudRunV2ServiceTrafficOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetPercent">reset_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetRevision">reset_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_percent` <a name="reset_percent" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetPercent"></a>

```python
def reset_percent() -> None
```

##### `reset_revision` <a name="reset_revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.percentInput">percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percent_input`<sup>Optional</sup> <a name="percent_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.percentInput"></a>

```python
percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudRunV2ServiceTraffic]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>]

---


### CloudRunV2ServiceTrafficStatusesList <a name="CloudRunV2ServiceTrafficStatusesList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudRunV2ServiceTrafficStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudRunV2ServiceTrafficStatusesOutputReference <a name="CloudRunV2ServiceTrafficStatusesOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_run_v2_service

cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatuses">CloudRunV2ServiceTrafficStatuses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.internalValue"></a>

```python
internal_value: CloudRunV2ServiceTrafficStatuses
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatuses">CloudRunV2ServiceTrafficStatuses</a>

---



