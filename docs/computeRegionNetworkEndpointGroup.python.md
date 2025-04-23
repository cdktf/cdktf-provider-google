# `computeRegionNetworkEndpointGroup` Submodule <a name="`computeRegionNetworkEndpointGroup` Submodule" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkEndpointGroup <a name="ComputeRegionNetworkEndpointGroup" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group google_compute_region_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup(
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
  region: str,
  app_engine: ComputeRegionNetworkEndpointGroupAppEngine = None,
  cloud_function: ComputeRegionNetworkEndpointGroupCloudFunction = None,
  cloud_run: ComputeRegionNetworkEndpointGroupCloudRun = None,
  description: str = None,
  id: str = None,
  network: str = None,
  network_endpoint_type: str = None,
  project: str = None,
  psc_data: ComputeRegionNetworkEndpointGroupPscData = None,
  psc_target_service: str = None,
  subnetwork: str = None,
  timeouts: ComputeRegionNetworkEndpointGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.region">region</a></code> | <code>str</code> | A reference to the region where the regional NEGs reside. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.appEngine">app_engine</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.cloudFunction">cloud_function</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a></code> | cloud_function block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.cloudRun">cloud_run</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a></code> | cloud_run block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#id ComputeRegionNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.network">network</a></code> | <code>str</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#project ComputeRegionNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.pscData">psc_data</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData">ComputeRegionNetworkEndpointGroupPscData</a></code> | psc_data block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.pscTargetService">psc_target_service</a></code> | <code>str</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>str</code> | This field is only used for PSC NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#name ComputeRegionNetworkEndpointGroup#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.region"></a>

- *Type:* str

A reference to the region where the regional NEGs reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#region ComputeRegionNetworkEndpointGroup#region}

---

##### `app_engine`<sup>Optional</sup> <a name="app_engine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.appEngine"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#app_engine ComputeRegionNetworkEndpointGroup#app_engine}

---

##### `cloud_function`<sup>Optional</sup> <a name="cloud_function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.cloudFunction"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#cloud_function ComputeRegionNetworkEndpointGroup#cloud_function}

---

##### `cloud_run`<sup>Optional</sup> <a name="cloud_run" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.cloudRun"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

cloud_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#cloud_run ComputeRegionNetworkEndpointGroup#cloud_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#description ComputeRegionNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#id ComputeRegionNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.network"></a>

- *Type:* str

This field is only used for PSC and INTERNET NEGs.

The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#network ComputeRegionNetworkEndpointGroup#network}

---

##### `network_endpoint_type`<sup>Optional</sup> <a name="network_endpoint_type" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.networkEndpointType"></a>

- *Type:* str

Type of network endpoints in this network endpoint group.

Defaults to SERVERLESS. Default value: "SERVERLESS" Possible values: ["SERVERLESS", "PRIVATE_SERVICE_CONNECT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "GCE_VM_IP_PORTMAP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#network_endpoint_type ComputeRegionNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#project ComputeRegionNetworkEndpointGroup#project}.

---

##### `psc_data`<sup>Optional</sup> <a name="psc_data" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.pscData"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData">ComputeRegionNetworkEndpointGroupPscData</a>

psc_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#psc_data ComputeRegionNetworkEndpointGroup#psc_data}

---

##### `psc_target_service`<sup>Optional</sup> <a name="psc_target_service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.pscTargetService"></a>

- *Type:* str

This field is only used for PSC and INTERNET NEGs.

The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#psc_target_service ComputeRegionNetworkEndpointGroup#psc_target_service}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.subnetwork"></a>

- *Type:* str

This field is only used for PSC NEGs.

Optional URL of the subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#subnetwork ComputeRegionNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#timeouts ComputeRegionNetworkEndpointGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putAppEngine">put_app_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudFunction">put_cloud_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudRun">put_cloud_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putPscData">put_psc_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetAppEngine">reset_app_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetCloudFunction">reset_cloud_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetCloudRun">reset_cloud_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetNetworkEndpointType">reset_network_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetPscData">reset_psc_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetPscTargetService">reset_psc_target_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_app_engine` <a name="put_app_engine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putAppEngine"></a>

```python
def put_app_engine(
  service: str = None,
  url_mask: str = None,
  version: str = None
) -> None
```

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putAppEngine.parameter.service"></a>

- *Type:* str

Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#service ComputeRegionNetworkEndpointGroup#service}

---

###### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putAppEngine.parameter.urlMask"></a>

- *Type:* str

A template to parse service and version fields from a request URL.

URL mask allows for routing to multiple App Engine services without
having to create multiple Network Endpoint Groups and backend services.

For example, the request URLs "foo1-dot-appname.appspot.com/v1" and
"foo1-dot-appname.appspot.com/v2" can be backed by the same Serverless NEG with
URL mask "-dot-appname.appspot.com/". The URL mask will parse
them to { service = "foo1", version = "v1" } and { service = "foo1", version = "v2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putAppEngine.parameter.version"></a>

- *Type:* str

Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#version ComputeRegionNetworkEndpointGroup#version}

---

##### `put_cloud_function` <a name="put_cloud_function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudFunction"></a>

```python
def put_cloud_function(
  function: str = None,
  url_mask: str = None
) -> None
```

###### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudFunction.parameter.function"></a>

- *Type:* str

A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#function ComputeRegionNetworkEndpointGroup#function}

---

###### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudFunction.parameter.urlMask"></a>

- *Type:* str

A template to parse function field from a request URL.

URL mask allows
for routing to multiple Cloud Functions without having to create
multiple Network Endpoint Groups and backend services.

For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
can be backed by the same Serverless NEG with URL mask "/". The URL mask
will parse them to { function = "function1" } and { function = "function2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}

---

##### `put_cloud_run` <a name="put_cloud_run" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudRun"></a>

```python
def put_cloud_run(
  service: str = None,
  tag: str = None,
  url_mask: str = None
) -> None
```

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudRun.parameter.service"></a>

- *Type:* str

Cloud Run service is the main resource of Cloud Run.

The service must be 1-63 characters long, and comply with RFC1035.
Example value: "run-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#service ComputeRegionNetworkEndpointGroup#service}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudRun.parameter.tag"></a>

- *Type:* str

Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information.

The tag must be 1-63 characters long, and comply with RFC1035.
Example value: "revision-0010".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#tag ComputeRegionNetworkEndpointGroup#tag}

---

###### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudRun.parameter.urlMask"></a>

- *Type:* str

A template to parse service and tag fields from a request URL.

URL mask allows for routing to multiple Run services without having
to create multiple network endpoint groups and backend services.

For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"
an be backed by the same Serverless Network Endpoint Group (NEG) with
URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }
and { service="bar2", tag="foo2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}

---

##### `put_psc_data` <a name="put_psc_data" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putPscData"></a>

```python
def put_psc_data(
  producer_port: str = None
) -> None
```

###### `producer_port`<sup>Optional</sup> <a name="producer_port" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putPscData.parameter.producerPort"></a>

- *Type:* str

The PSC producer port to use when consumer PSC NEG connects to a producer.

If
this flag isn't specified for a PSC NEG with endpoint type
private-service-connect, then PSC NEG will be connected to a first port in the
available PSC producer port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#producer_port ComputeRegionNetworkEndpointGroup#producer_port}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#create ComputeRegionNetworkEndpointGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#delete ComputeRegionNetworkEndpointGroup#delete}.

---

##### `reset_app_engine` <a name="reset_app_engine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetAppEngine"></a>

```python
def reset_app_engine() -> None
```

##### `reset_cloud_function` <a name="reset_cloud_function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetCloudFunction"></a>

```python
def reset_cloud_function() -> None
```

##### `reset_cloud_run` <a name="reset_cloud_run" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetCloudRun"></a>

```python
def reset_cloud_run() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_endpoint_type` <a name="reset_network_endpoint_type" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetNetworkEndpointType"></a>

```python
def reset_network_endpoint_type() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_psc_data` <a name="reset_psc_data" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetPscData"></a>

```python
def reset_psc_data() -> None
```

##### `reset_psc_target_service` <a name="reset_psc_target_service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetPscTargetService"></a>

```python
def reset_psc_target_service() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionNetworkEndpointGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.appEngine">app_engine</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference">ComputeRegionNetworkEndpointGroupAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudFunction">cloud_function</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference">ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudRun">cloud_run</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference">ComputeRegionNetworkEndpointGroupCloudRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscData">psc_data</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference">ComputeRegionNetworkEndpointGroupPscDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference">ComputeRegionNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.appEngineInput">app_engine_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudFunctionInput">cloud_function_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudRunInput">cloud_run_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkEndpointTypeInput">network_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscDataInput">psc_data_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData">ComputeRegionNetworkEndpointGroupPscData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscTargetServiceInput">psc_target_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscTargetService">psc_target_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_engine`<sup>Required</sup> <a name="app_engine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.appEngine"></a>

```python
app_engine: ComputeRegionNetworkEndpointGroupAppEngineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference">ComputeRegionNetworkEndpointGroupAppEngineOutputReference</a>

---

##### `cloud_function`<sup>Required</sup> <a name="cloud_function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudFunction"></a>

```python
cloud_function: ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference">ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference</a>

---

##### `cloud_run`<sup>Required</sup> <a name="cloud_run" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudRun"></a>

```python
cloud_run: ComputeRegionNetworkEndpointGroupCloudRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference">ComputeRegionNetworkEndpointGroupCloudRunOutputReference</a>

---

##### `psc_data`<sup>Required</sup> <a name="psc_data" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscData"></a>

```python
psc_data: ComputeRegionNetworkEndpointGroupPscDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference">ComputeRegionNetworkEndpointGroupPscDataOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.timeouts"></a>

```python
timeouts: ComputeRegionNetworkEndpointGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference">ComputeRegionNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `app_engine_input`<sup>Optional</sup> <a name="app_engine_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.appEngineInput"></a>

```python
app_engine_input: ComputeRegionNetworkEndpointGroupAppEngine
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

---

##### `cloud_function_input`<sup>Optional</sup> <a name="cloud_function_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudFunctionInput"></a>

```python
cloud_function_input: ComputeRegionNetworkEndpointGroupCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

---

##### `cloud_run_input`<sup>Optional</sup> <a name="cloud_run_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudRunInput"></a>

```python
cloud_run_input: ComputeRegionNetworkEndpointGroupCloudRun
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_endpoint_type_input`<sup>Optional</sup> <a name="network_endpoint_type_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```python
network_endpoint_type_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `psc_data_input`<sup>Optional</sup> <a name="psc_data_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscDataInput"></a>

```python
psc_data_input: ComputeRegionNetworkEndpointGroupPscData
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData">ComputeRegionNetworkEndpointGroupPscData</a>

---

##### `psc_target_service_input`<sup>Optional</sup> <a name="psc_target_service_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscTargetServiceInput"></a>

```python
psc_target_service_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeRegionNetworkEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `psc_target_service`<sup>Required</sup> <a name="psc_target_service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscTargetService"></a>

```python
psc_target_service: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkEndpointGroupAppEngine <a name="ComputeRegionNetworkEndpointGroupAppEngine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine(
  service: str = None,
  url_mask: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.service">service</a></code> | <code>str</code> | Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.urlMask">url_mask</a></code> | <code>str</code> | A template to parse service and version fields from a request URL. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.version">version</a></code> | <code>str</code> | Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2". |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.service"></a>

```python
service: str
```

- *Type:* str

Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#service ComputeRegionNetworkEndpointGroup#service}

---

##### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

A template to parse service and version fields from a request URL.

URL mask allows for routing to multiple App Engine services without
having to create multiple Network Endpoint Groups and backend services.

For example, the request URLs "foo1-dot-appname.appspot.com/v1" and
"foo1-dot-appname.appspot.com/v2" can be backed by the same Serverless NEG with
URL mask "-dot-appname.appspot.com/". The URL mask will parse
them to { service = "foo1", version = "v1" } and { service = "foo1", version = "v2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.version"></a>

```python
version: str
```

- *Type:* str

Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#version ComputeRegionNetworkEndpointGroup#version}

---

### ComputeRegionNetworkEndpointGroupCloudFunction <a name="ComputeRegionNetworkEndpointGroupCloudFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction(
  function: str = None,
  url_mask: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.property.function">function</a></code> | <code>str</code> | A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.property.urlMask">url_mask</a></code> | <code>str</code> | A template to parse function field from a request URL. |

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.property.function"></a>

```python
function: str
```

- *Type:* str

A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#function ComputeRegionNetworkEndpointGroup#function}

---

##### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

A template to parse function field from a request URL.

URL mask allows
for routing to multiple Cloud Functions without having to create
multiple Network Endpoint Groups and backend services.

For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
can be backed by the same Serverless NEG with URL mask "/". The URL mask
will parse them to { function = "function1" } and { function = "function2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}

---

### ComputeRegionNetworkEndpointGroupCloudRun <a name="ComputeRegionNetworkEndpointGroupCloudRun" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun(
  service: str = None,
  tag: str = None,
  url_mask: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.service">service</a></code> | <code>str</code> | Cloud Run service is the main resource of Cloud Run. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.tag">tag</a></code> | <code>str</code> | Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.urlMask">url_mask</a></code> | <code>str</code> | A template to parse service and tag fields from a request URL. |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.service"></a>

```python
service: str
```

- *Type:* str

Cloud Run service is the main resource of Cloud Run.

The service must be 1-63 characters long, and comply with RFC1035.
Example value: "run-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#service ComputeRegionNetworkEndpointGroup#service}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.tag"></a>

```python
tag: str
```

- *Type:* str

Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information.

The tag must be 1-63 characters long, and comply with RFC1035.
Example value: "revision-0010".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#tag ComputeRegionNetworkEndpointGroup#tag}

---

##### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

A template to parse service and tag fields from a request URL.

URL mask allows for routing to multiple Run services without having
to create multiple network endpoint groups and backend services.

For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"
an be backed by the same Serverless Network Endpoint Group (NEG) with
URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }
and { service="bar2", tag="foo2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}

---

### ComputeRegionNetworkEndpointGroupConfig <a name="ComputeRegionNetworkEndpointGroupConfig" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  app_engine: ComputeRegionNetworkEndpointGroupAppEngine = None,
  cloud_function: ComputeRegionNetworkEndpointGroupCloudFunction = None,
  cloud_run: ComputeRegionNetworkEndpointGroupCloudRun = None,
  description: str = None,
  id: str = None,
  network: str = None,
  network_endpoint_type: str = None,
  project: str = None,
  psc_data: ComputeRegionNetworkEndpointGroupPscData = None,
  psc_target_service: str = None,
  subnetwork: str = None,
  timeouts: ComputeRegionNetworkEndpointGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.region">region</a></code> | <code>str</code> | A reference to the region where the regional NEGs reside. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.appEngine">app_engine</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.cloudFunction">cloud_function</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a></code> | cloud_function block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.cloudRun">cloud_run</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a></code> | cloud_run block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#id ComputeRegionNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.network">network</a></code> | <code>str</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#project ComputeRegionNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.pscData">psc_data</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData">ComputeRegionNetworkEndpointGroupPscData</a></code> | psc_data block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.pscTargetService">psc_target_service</a></code> | <code>str</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | This field is only used for PSC NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#name ComputeRegionNetworkEndpointGroup#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.region"></a>

```python
region: str
```

- *Type:* str

A reference to the region where the regional NEGs reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#region ComputeRegionNetworkEndpointGroup#region}

---

##### `app_engine`<sup>Optional</sup> <a name="app_engine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.appEngine"></a>

```python
app_engine: ComputeRegionNetworkEndpointGroupAppEngine
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#app_engine ComputeRegionNetworkEndpointGroup#app_engine}

---

##### `cloud_function`<sup>Optional</sup> <a name="cloud_function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.cloudFunction"></a>

```python
cloud_function: ComputeRegionNetworkEndpointGroupCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#cloud_function ComputeRegionNetworkEndpointGroup#cloud_function}

---

##### `cloud_run`<sup>Optional</sup> <a name="cloud_run" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.cloudRun"></a>

```python
cloud_run: ComputeRegionNetworkEndpointGroupCloudRun
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

cloud_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#cloud_run ComputeRegionNetworkEndpointGroup#cloud_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#description ComputeRegionNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#id ComputeRegionNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.network"></a>

```python
network: str
```

- *Type:* str

This field is only used for PSC and INTERNET NEGs.

The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#network ComputeRegionNetworkEndpointGroup#network}

---

##### `network_endpoint_type`<sup>Optional</sup> <a name="network_endpoint_type" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

Type of network endpoints in this network endpoint group.

Defaults to SERVERLESS. Default value: "SERVERLESS" Possible values: ["SERVERLESS", "PRIVATE_SERVICE_CONNECT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "GCE_VM_IP_PORTMAP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#network_endpoint_type ComputeRegionNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#project ComputeRegionNetworkEndpointGroup#project}.

---

##### `psc_data`<sup>Optional</sup> <a name="psc_data" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.pscData"></a>

```python
psc_data: ComputeRegionNetworkEndpointGroupPscData
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData">ComputeRegionNetworkEndpointGroupPscData</a>

psc_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#psc_data ComputeRegionNetworkEndpointGroup#psc_data}

---

##### `psc_target_service`<sup>Optional</sup> <a name="psc_target_service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.pscTargetService"></a>

```python
psc_target_service: str
```

- *Type:* str

This field is only used for PSC and INTERNET NEGs.

The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#psc_target_service ComputeRegionNetworkEndpointGroup#psc_target_service}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

This field is only used for PSC NEGs.

Optional URL of the subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#subnetwork ComputeRegionNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionNetworkEndpointGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#timeouts ComputeRegionNetworkEndpointGroup#timeouts}

---

### ComputeRegionNetworkEndpointGroupPscData <a name="ComputeRegionNetworkEndpointGroupPscData" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData(
  producer_port: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData.property.producerPort">producer_port</a></code> | <code>str</code> | The PSC producer port to use when consumer PSC NEG connects to a producer. |

---

##### `producer_port`<sup>Optional</sup> <a name="producer_port" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData.property.producerPort"></a>

```python
producer_port: str
```

- *Type:* str

The PSC producer port to use when consumer PSC NEG connects to a producer.

If
this flag isn't specified for a PSC NEG with endpoint type
private-service-connect, then PSC NEG will be connected to a first port in the
available PSC producer port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#producer_port ComputeRegionNetworkEndpointGroup#producer_port}

---

### ComputeRegionNetworkEndpointGroupTimeouts <a name="ComputeRegionNetworkEndpointGroupTimeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#create ComputeRegionNetworkEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#delete ComputeRegionNetworkEndpointGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#create ComputeRegionNetworkEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_network_endpoint_group#delete ComputeRegionNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkEndpointGroupAppEngineOutputReference <a name="ComputeRegionNetworkEndpointGroupAppEngineOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetUrlMask">reset_url_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_url_mask` <a name="reset_url_mask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetUrlMask"></a>

```python
def reset_url_mask() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMaskInput">url_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask">url_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `url_mask_input`<sup>Optional</sup> <a name="url_mask_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMaskInput"></a>

```python
url_mask_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `url_mask`<sup>Required</sup> <a name="url_mask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionNetworkEndpointGroupAppEngine
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

---


### ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference <a name="ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetFunction">reset_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetUrlMask">reset_url_mask</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function` <a name="reset_function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetFunction"></a>

```python
def reset_function() -> None
```

##### `reset_url_mask` <a name="reset_url_mask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetUrlMask"></a>

```python
def reset_url_mask() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.functionInput">function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMaskInput">url_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function">function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask">url_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_input`<sup>Optional</sup> <a name="function_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.functionInput"></a>

```python
function_input: str
```

- *Type:* str

---

##### `url_mask_input`<sup>Optional</sup> <a name="url_mask_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMaskInput"></a>

```python
url_mask_input: str
```

- *Type:* str

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function"></a>

```python
function: str
```

- *Type:* str

---

##### `url_mask`<sup>Required</sup> <a name="url_mask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionNetworkEndpointGroupCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

---


### ComputeRegionNetworkEndpointGroupCloudRunOutputReference <a name="ComputeRegionNetworkEndpointGroupCloudRunOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetUrlMask">reset_url_mask</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_url_mask` <a name="reset_url_mask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetUrlMask"></a>

```python
def reset_url_mask() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMaskInput">url_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask">url_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `url_mask_input`<sup>Optional</sup> <a name="url_mask_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMaskInput"></a>

```python
url_mask_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `url_mask`<sup>Required</sup> <a name="url_mask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionNetworkEndpointGroupCloudRun
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

---


### ComputeRegionNetworkEndpointGroupPscDataOutputReference <a name="ComputeRegionNetworkEndpointGroupPscDataOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.resetProducerPort">reset_producer_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_producer_port` <a name="reset_producer_port" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.resetProducerPort"></a>

```python
def reset_producer_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPortInput">producer_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPort">producer_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData">ComputeRegionNetworkEndpointGroupPscData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `producer_port_input`<sup>Optional</sup> <a name="producer_port_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPortInput"></a>

```python
producer_port_input: str
```

- *Type:* str

---

##### `producer_port`<sup>Required</sup> <a name="producer_port" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPort"></a>

```python
producer_port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscDataOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionNetworkEndpointGroupPscData
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupPscData">ComputeRegionNetworkEndpointGroupPscData</a>

---


### ComputeRegionNetworkEndpointGroupTimeoutsOutputReference <a name="ComputeRegionNetworkEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_endpoint_group

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionNetworkEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>]

---



