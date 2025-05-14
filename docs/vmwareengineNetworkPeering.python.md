# `vmwareengineNetworkPeering` Submodule <a name="`vmwareengineNetworkPeering` Submodule" id="@cdktf/provider-google.vmwareengineNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineNetworkPeering <a name="VmwareengineNetworkPeering" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering google_vmwareengine_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_peering

vmwareengineNetworkPeering.VmwareengineNetworkPeering(
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
  peer_network: str,
  peer_network_type: str,
  vmware_engine_network: str,
  description: str = None,
  export_custom_routes: typing.Union[bool, IResolvable] = None,
  export_custom_routes_with_public_ip: typing.Union[bool, IResolvable] = None,
  id: str = None,
  import_custom_routes: typing.Union[bool, IResolvable] = None,
  import_custom_routes_with_public_ip: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: VmwareengineNetworkPeeringTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the Network Peering. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.peerNetwork">peer_network</a></code> | <code>str</code> | The relative resource name of the network to peer with a standard VMware Engine network. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.peerNetworkType">peer_network_type</a></code> | <code>str</code> | The type of the network to peer with the VMware Engine network. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.vmwareEngineNetwork">vmware_engine_network</a></code> | <code>str</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description for this network peering. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.exportCustomRoutes">export_custom_routes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if custom routes are exported to the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.exportCustomRoutesWithPublicIp">export_custom_routes_with_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if all subnet routes with a public IP address range are exported; false otherwise. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#id VmwareengineNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.importCustomRoutes">import_custom_routes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.importCustomRoutesWithPublicIp">import_custom_routes_with_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#project VmwareengineNetworkPeering#project}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.name"></a>

- *Type:* str

The ID of the Network Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#name VmwareengineNetworkPeering#name}

---

##### `peer_network`<sup>Required</sup> <a name="peer_network" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.peerNetwork"></a>

- *Type:* str

The relative resource name of the network to peer with a standard VMware Engine network.

The provided network can be a consumer VPC network or another standard VMware Engine network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#peer_network VmwareengineNetworkPeering#peer_network}

---

##### `peer_network_type`<sup>Required</sup> <a name="peer_network_type" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.peerNetworkType"></a>

- *Type:* str

The type of the network to peer with the VMware Engine network.

Possible values: ["STANDARD", "VMWARE_ENGINE_NETWORK", "PRIVATE_SERVICES_ACCESS", "NETAPP_CLOUD_VOLUMES", "THIRD_PARTY_SERVICE", "DELL_POWERSCALE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#peer_network_type VmwareengineNetworkPeering#peer_network_type}

---

##### `vmware_engine_network`<sup>Required</sup> <a name="vmware_engine_network" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.vmwareEngineNetwork"></a>

- *Type:* str

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#vmware_engine_network VmwareengineNetworkPeering#vmware_engine_network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.description"></a>

- *Type:* str

User-provided description for this network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#description VmwareengineNetworkPeering#description}

---

##### `export_custom_routes`<sup>Optional</sup> <a name="export_custom_routes" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.exportCustomRoutes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if custom routes are exported to the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#export_custom_routes VmwareengineNetworkPeering#export_custom_routes}

---

##### `export_custom_routes_with_public_ip`<sup>Optional</sup> <a name="export_custom_routes_with_public_ip" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.exportCustomRoutesWithPublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if all subnet routes with a public IP address range are exported; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#export_custom_routes_with_public_ip VmwareengineNetworkPeering#export_custom_routes_with_public_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#id VmwareengineNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_custom_routes`<sup>Optional</sup> <a name="import_custom_routes" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.importCustomRoutes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#import_custom_routes VmwareengineNetworkPeering#import_custom_routes}

---

##### `import_custom_routes_with_public_ip`<sup>Optional</sup> <a name="import_custom_routes_with_public_ip" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.importCustomRoutesWithPublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#import_custom_routes_with_public_ip VmwareengineNetworkPeering#import_custom_routes_with_public_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#project VmwareengineNetworkPeering#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#timeouts VmwareengineNetworkPeering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetExportCustomRoutes">reset_export_custom_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetExportCustomRoutesWithPublicIp">reset_export_custom_routes_with_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetImportCustomRoutes">reset_import_custom_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetImportCustomRoutesWithPublicIp">reset_import_custom_routes_with_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#create VmwareengineNetworkPeering#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#delete VmwareengineNetworkPeering#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#update VmwareengineNetworkPeering#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_export_custom_routes` <a name="reset_export_custom_routes" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetExportCustomRoutes"></a>

```python
def reset_export_custom_routes() -> None
```

##### `reset_export_custom_routes_with_public_ip` <a name="reset_export_custom_routes_with_public_ip" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetExportCustomRoutesWithPublicIp"></a>

```python
def reset_export_custom_routes_with_public_ip() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import_custom_routes` <a name="reset_import_custom_routes" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetImportCustomRoutes"></a>

```python
def reset_import_custom_routes() -> None
```

##### `reset_import_custom_routes_with_public_ip` <a name="reset_import_custom_routes_with_public_ip" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetImportCustomRoutesWithPublicIp"></a>

```python
def reset_import_custom_routes_with_public_ip() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VmwareengineNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_peering

vmwareengineNetworkPeering.VmwareengineNetworkPeering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_peering

vmwareengineNetworkPeering.VmwareengineNetworkPeering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_peering

vmwareengineNetworkPeering.VmwareengineNetworkPeering.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_peering

vmwareengineNetworkPeering.VmwareengineNetworkPeering.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VmwareengineNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VmwareengineNetworkPeering to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VmwareengineNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VmwareengineNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.stateDetails">state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference">VmwareengineNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical">vmware_engine_network_canonical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutesInput">export_custom_routes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIpInput">export_custom_routes_with_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutesInput">import_custom_routes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutesWithPublicIpInput">import_custom_routes_with_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetworkInput">peer_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetworkTypeInput">peer_network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.vmwareEngineNetworkInput">vmware_engine_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutes">export_custom_routes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp">export_custom_routes_with_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutes">import_custom_routes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp">import_custom_routes_with_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetwork">peer_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetworkType">peer_network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.vmwareEngineNetwork">vmware_engine_network</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.stateDetails"></a>

```python
state_details: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.timeouts"></a>

```python
timeouts: VmwareengineNetworkPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference">VmwareengineNetworkPeeringTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `vmware_engine_network_canonical`<sup>Required</sup> <a name="vmware_engine_network_canonical" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical"></a>

```python
vmware_engine_network_canonical: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `export_custom_routes_input`<sup>Optional</sup> <a name="export_custom_routes_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutesInput"></a>

```python
export_custom_routes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `export_custom_routes_with_public_ip_input`<sup>Optional</sup> <a name="export_custom_routes_with_public_ip_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIpInput"></a>

```python
export_custom_routes_with_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_custom_routes_input`<sup>Optional</sup> <a name="import_custom_routes_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutesInput"></a>

```python
import_custom_routes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `import_custom_routes_with_public_ip_input`<sup>Optional</sup> <a name="import_custom_routes_with_public_ip_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutesWithPublicIpInput"></a>

```python
import_custom_routes_with_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peer_network_input`<sup>Optional</sup> <a name="peer_network_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetworkInput"></a>

```python
peer_network_input: str
```

- *Type:* str

---

##### `peer_network_type_input`<sup>Optional</sup> <a name="peer_network_type_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetworkTypeInput"></a>

```python
peer_network_type_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VmwareengineNetworkPeeringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a>]

---

##### `vmware_engine_network_input`<sup>Optional</sup> <a name="vmware_engine_network_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.vmwareEngineNetworkInput"></a>

```python
vmware_engine_network_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `export_custom_routes`<sup>Required</sup> <a name="export_custom_routes" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutes"></a>

```python
export_custom_routes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `export_custom_routes_with_public_ip`<sup>Required</sup> <a name="export_custom_routes_with_public_ip" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp"></a>

```python
export_custom_routes_with_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_custom_routes`<sup>Required</sup> <a name="import_custom_routes" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutes"></a>

```python
import_custom_routes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `import_custom_routes_with_public_ip`<sup>Required</sup> <a name="import_custom_routes_with_public_ip" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp"></a>

```python
import_custom_routes_with_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `peer_network`<sup>Required</sup> <a name="peer_network" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetwork"></a>

```python
peer_network: str
```

- *Type:* str

---

##### `peer_network_type`<sup>Required</sup> <a name="peer_network_type" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetworkType"></a>

```python
peer_network_type: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `vmware_engine_network`<sup>Required</sup> <a name="vmware_engine_network" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.vmwareEngineNetwork"></a>

```python
vmware_engine_network: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineNetworkPeeringConfig <a name="VmwareengineNetworkPeeringConfig" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_peering

vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  peer_network: str,
  peer_network_type: str,
  vmware_engine_network: str,
  description: str = None,
  export_custom_routes: typing.Union[bool, IResolvable] = None,
  export_custom_routes_with_public_ip: typing.Union[bool, IResolvable] = None,
  id: str = None,
  import_custom_routes: typing.Union[bool, IResolvable] = None,
  import_custom_routes_with_public_ip: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: VmwareengineNetworkPeeringTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.name">name</a></code> | <code>str</code> | The ID of the Network Peering. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.peerNetwork">peer_network</a></code> | <code>str</code> | The relative resource name of the network to peer with a standard VMware Engine network. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.peerNetworkType">peer_network_type</a></code> | <code>str</code> | The type of the network to peer with the VMware Engine network. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.vmwareEngineNetwork">vmware_engine_network</a></code> | <code>str</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.description">description</a></code> | <code>str</code> | User-provided description for this network peering. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.exportCustomRoutes">export_custom_routes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if custom routes are exported to the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.exportCustomRoutesWithPublicIp">export_custom_routes_with_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if all subnet routes with a public IP address range are exported; false otherwise. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#id VmwareengineNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.importCustomRoutes">import_custom_routes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.importCustomRoutesWithPublicIp">import_custom_routes_with_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#project VmwareengineNetworkPeering#project}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the Network Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#name VmwareengineNetworkPeering#name}

---

##### `peer_network`<sup>Required</sup> <a name="peer_network" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.peerNetwork"></a>

```python
peer_network: str
```

- *Type:* str

The relative resource name of the network to peer with a standard VMware Engine network.

The provided network can be a consumer VPC network or another standard VMware Engine network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#peer_network VmwareengineNetworkPeering#peer_network}

---

##### `peer_network_type`<sup>Required</sup> <a name="peer_network_type" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.peerNetworkType"></a>

```python
peer_network_type: str
```

- *Type:* str

The type of the network to peer with the VMware Engine network.

Possible values: ["STANDARD", "VMWARE_ENGINE_NETWORK", "PRIVATE_SERVICES_ACCESS", "NETAPP_CLOUD_VOLUMES", "THIRD_PARTY_SERVICE", "DELL_POWERSCALE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#peer_network_type VmwareengineNetworkPeering#peer_network_type}

---

##### `vmware_engine_network`<sup>Required</sup> <a name="vmware_engine_network" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.vmwareEngineNetwork"></a>

```python
vmware_engine_network: str
```

- *Type:* str

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#vmware_engine_network VmwareengineNetworkPeering#vmware_engine_network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description for this network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#description VmwareengineNetworkPeering#description}

---

##### `export_custom_routes`<sup>Optional</sup> <a name="export_custom_routes" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.exportCustomRoutes"></a>

```python
export_custom_routes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if custom routes are exported to the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#export_custom_routes VmwareengineNetworkPeering#export_custom_routes}

---

##### `export_custom_routes_with_public_ip`<sup>Optional</sup> <a name="export_custom_routes_with_public_ip" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.exportCustomRoutesWithPublicIp"></a>

```python
export_custom_routes_with_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if all subnet routes with a public IP address range are exported; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#export_custom_routes_with_public_ip VmwareengineNetworkPeering#export_custom_routes_with_public_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#id VmwareengineNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_custom_routes`<sup>Optional</sup> <a name="import_custom_routes" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.importCustomRoutes"></a>

```python
import_custom_routes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#import_custom_routes VmwareengineNetworkPeering#import_custom_routes}

---

##### `import_custom_routes_with_public_ip`<sup>Optional</sup> <a name="import_custom_routes_with_public_ip" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.importCustomRoutesWithPublicIp"></a>

```python
import_custom_routes_with_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#import_custom_routes_with_public_ip VmwareengineNetworkPeering#import_custom_routes_with_public_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#project VmwareengineNetworkPeering#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.timeouts"></a>

```python
timeouts: VmwareengineNetworkPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#timeouts VmwareengineNetworkPeering#timeouts}

---

### VmwareengineNetworkPeeringTimeouts <a name="VmwareengineNetworkPeeringTimeouts" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_peering

vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#create VmwareengineNetworkPeering#create}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#delete VmwareengineNetworkPeering#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#update VmwareengineNetworkPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#create VmwareengineNetworkPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#delete VmwareengineNetworkPeering#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_network_peering#update VmwareengineNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineNetworkPeeringTimeoutsOutputReference <a name="VmwareengineNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_peering

vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VmwareengineNetworkPeeringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a>]

---



