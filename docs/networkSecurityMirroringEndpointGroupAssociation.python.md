# `networkSecurityMirroringEndpointGroupAssociation` Submodule <a name="`networkSecurityMirroringEndpointGroupAssociation` Submodule" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityMirroringEndpointGroupAssociation <a name="NetworkSecurityMirroringEndpointGroupAssociation" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association google_network_security_mirroring_endpoint_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation(
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
  mirroring_endpoint_group: str,
  network: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mirroring_endpoint_group_association_id: str = None,
  project: str = None,
  timeouts: NetworkSecurityMirroringEndpointGroupAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.location">location</a></code> | <code>str</code> | The cloud location of the association, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.mirroringEndpointGroup">mirroring_endpoint_group</a></code> | <code>str</code> | The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/mirroringEndpointGroups/my-eg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.network">network</a></code> | <code>str</code> | The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#id NetworkSecurityMirroringEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.mirroringEndpointGroupAssociationId">mirroring_endpoint_group_association_id</a></code> | <code>str</code> | The ID to use for the new association, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#project NetworkSecurityMirroringEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.location"></a>

- *Type:* str

The cloud location of the association, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#location NetworkSecurityMirroringEndpointGroupAssociation#location}

---

##### `mirroring_endpoint_group`<sup>Required</sup> <a name="mirroring_endpoint_group" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.mirroringEndpointGroup"></a>

- *Type:* str

The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/mirroringEndpointGroups/my-eg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#mirroring_endpoint_group NetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.network"></a>

- *Type:* str

The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#network NetworkSecurityMirroringEndpointGroupAssociation#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#id NetworkSecurityMirroringEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#labels NetworkSecurityMirroringEndpointGroupAssociation#labels}

---

##### `mirroring_endpoint_group_association_id`<sup>Optional</sup> <a name="mirroring_endpoint_group_association_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.mirroringEndpointGroupAssociationId"></a>

- *Type:* str

The ID to use for the new association, which will become the final component of the endpoint group's resource name.

If not provided, the
server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#mirroring_endpoint_group_association_id NetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group_association_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#project NetworkSecurityMirroringEndpointGroupAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#timeouts NetworkSecurityMirroringEndpointGroupAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetMirroringEndpointGroupAssociationId">reset_mirroring_endpoint_group_association_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#create NetworkSecurityMirroringEndpointGroupAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#delete NetworkSecurityMirroringEndpointGroupAssociation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#update NetworkSecurityMirroringEndpointGroupAssociation#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_mirroring_endpoint_group_association_id` <a name="reset_mirroring_endpoint_group_association_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetMirroringEndpointGroupAssociationId"></a>

```python
def reset_mirroring_endpoint_group_association_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkSecurityMirroringEndpointGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkSecurityMirroringEndpointGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecurityMirroringEndpointGroupAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecurityMirroringEndpointGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityMirroringEndpointGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList">NetworkSecurityMirroringEndpointGroupAssociationLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locationsDetails">locations_details</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList">NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationIdInput">mirroring_endpoint_group_association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupInput">mirroring_endpoint_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroup">mirroring_endpoint_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationId">mirroring_endpoint_group_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locations"></a>

```python
locations: NetworkSecurityMirroringEndpointGroupAssociationLocationsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList">NetworkSecurityMirroringEndpointGroupAssociationLocationsList</a>

---

##### `locations_details`<sup>Required</sup> <a name="locations_details" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locationsDetails"></a>

```python
locations_details: NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList">NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.timeouts"></a>

```python
timeouts: NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mirroring_endpoint_group_association_id_input`<sup>Optional</sup> <a name="mirroring_endpoint_group_association_id_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationIdInput"></a>

```python
mirroring_endpoint_group_association_id_input: str
```

- *Type:* str

---

##### `mirroring_endpoint_group_input`<sup>Optional</sup> <a name="mirroring_endpoint_group_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupInput"></a>

```python
mirroring_endpoint_group_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkSecurityMirroringEndpointGroupAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mirroring_endpoint_group`<sup>Required</sup> <a name="mirroring_endpoint_group" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroup"></a>

```python
mirroring_endpoint_group: str
```

- *Type:* str

---

##### `mirroring_endpoint_group_association_id`<sup>Required</sup> <a name="mirroring_endpoint_group_association_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationId"></a>

```python
mirroring_endpoint_group_association_id: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityMirroringEndpointGroupAssociationConfig <a name="NetworkSecurityMirroringEndpointGroupAssociationConfig" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  mirroring_endpoint_group: str,
  network: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mirroring_endpoint_group_association_id: str = None,
  project: str = None,
  timeouts: NetworkSecurityMirroringEndpointGroupAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.location">location</a></code> | <code>str</code> | The cloud location of the association, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroup">mirroring_endpoint_group</a></code> | <code>str</code> | The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/mirroringEndpointGroups/my-eg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.network">network</a></code> | <code>str</code> | The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#id NetworkSecurityMirroringEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroupAssociationId">mirroring_endpoint_group_association_id</a></code> | <code>str</code> | The ID to use for the new association, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#project NetworkSecurityMirroringEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The cloud location of the association, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#location NetworkSecurityMirroringEndpointGroupAssociation#location}

---

##### `mirroring_endpoint_group`<sup>Required</sup> <a name="mirroring_endpoint_group" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroup"></a>

```python
mirroring_endpoint_group: str
```

- *Type:* str

The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/mirroringEndpointGroups/my-eg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#mirroring_endpoint_group NetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#network NetworkSecurityMirroringEndpointGroupAssociation#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#id NetworkSecurityMirroringEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#labels NetworkSecurityMirroringEndpointGroupAssociation#labels}

---

##### `mirroring_endpoint_group_association_id`<sup>Optional</sup> <a name="mirroring_endpoint_group_association_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroupAssociationId"></a>

```python
mirroring_endpoint_group_association_id: str
```

- *Type:* str

The ID to use for the new association, which will become the final component of the endpoint group's resource name.

If not provided, the
server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#mirroring_endpoint_group_association_id NetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group_association_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#project NetworkSecurityMirroringEndpointGroupAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.timeouts"></a>

```python
timeouts: NetworkSecurityMirroringEndpointGroupAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#timeouts NetworkSecurityMirroringEndpointGroupAssociation#timeouts}

---

### NetworkSecurityMirroringEndpointGroupAssociationLocations <a name="NetworkSecurityMirroringEndpointGroupAssociationLocations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations()
```


### NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails()
```


### NetworkSecurityMirroringEndpointGroupAssociationTimeouts <a name="NetworkSecurityMirroringEndpointGroupAssociationTimeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#create NetworkSecurityMirroringEndpointGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#delete NetworkSecurityMirroringEndpointGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#update NetworkSecurityMirroringEndpointGroupAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#create NetworkSecurityMirroringEndpointGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#delete NetworkSecurityMirroringEndpointGroupAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_security_mirroring_endpoint_group_association#update NetworkSecurityMirroringEndpointGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails">NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails">NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails</a>

---


### NetworkSecurityMirroringEndpointGroupAssociationLocationsList <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsList" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations">NetworkSecurityMirroringEndpointGroupAssociationLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecurityMirroringEndpointGroupAssociationLocations
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations">NetworkSecurityMirroringEndpointGroupAssociationLocations</a>

---


### NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference <a name="NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group_association

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkSecurityMirroringEndpointGroupAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>]

---



