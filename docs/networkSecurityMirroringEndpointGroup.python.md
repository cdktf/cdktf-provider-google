# `networkSecurityMirroringEndpointGroup` Submodule <a name="`networkSecurityMirroringEndpointGroup` Submodule" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityMirroringEndpointGroup <a name="NetworkSecurityMirroringEndpointGroup" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group google_network_security_mirroring_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup(
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
  mirroring_deployment_group: str,
  mirroring_endpoint_group_id: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkSecurityMirroringEndpointGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | The cloud location of the endpoint group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.mirroringDeploymentGroup">mirroring_deployment_group</a></code> | <code>str</code> | The deployment group that this DIRECT endpoint group is connected to, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.mirroringEndpointGroupId">mirroring_endpoint_group_id</a></code> | <code>str</code> | The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description of the endpoint group. Used as additional context for the endpoint group. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#id NetworkSecurityMirroringEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#project NetworkSecurityMirroringEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.location"></a>

- *Type:* str

The cloud location of the endpoint group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#location NetworkSecurityMirroringEndpointGroup#location}

---

##### `mirroring_deployment_group`<sup>Required</sup> <a name="mirroring_deployment_group" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.mirroringDeploymentGroup"></a>

- *Type:* str

The deployment group that this DIRECT endpoint group is connected to, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#mirroring_deployment_group NetworkSecurityMirroringEndpointGroup#mirroring_deployment_group}

---

##### `mirroring_endpoint_group_id`<sup>Required</sup> <a name="mirroring_endpoint_group_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.mirroringEndpointGroupId"></a>

- *Type:* str

The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#mirroring_endpoint_group_id NetworkSecurityMirroringEndpointGroup#mirroring_endpoint_group_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.description"></a>

- *Type:* str

User-provided description of the endpoint group. Used as additional context for the endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#description NetworkSecurityMirroringEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#id NetworkSecurityMirroringEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#labels NetworkSecurityMirroringEndpointGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#project NetworkSecurityMirroringEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#timeouts NetworkSecurityMirroringEndpointGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#create NetworkSecurityMirroringEndpointGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#delete NetworkSecurityMirroringEndpointGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#update NetworkSecurityMirroringEndpointGroup#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkSecurityMirroringEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkSecurityMirroringEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecurityMirroringEndpointGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecurityMirroringEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityMirroringEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.associations">associations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList">NetworkSecurityMirroringEndpointGroupAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.connectedDeploymentGroups">connected_deployment_groups</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference">NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroupInput">mirroring_deployment_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupIdInput">mirroring_endpoint_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroup">mirroring_deployment_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupId">mirroring_endpoint_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.associations"></a>

```python
associations: NetworkSecurityMirroringEndpointGroupAssociationsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList">NetworkSecurityMirroringEndpointGroupAssociationsList</a>

---

##### `connected_deployment_groups`<sup>Required</sup> <a name="connected_deployment_groups" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.connectedDeploymentGroups"></a>

```python
connected_deployment_groups: NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.timeouts"></a>

```python
timeouts: NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference">NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mirroring_deployment_group_input`<sup>Optional</sup> <a name="mirroring_deployment_group_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroupInput"></a>

```python
mirroring_deployment_group_input: str
```

- *Type:* str

---

##### `mirroring_endpoint_group_id_input`<sup>Optional</sup> <a name="mirroring_endpoint_group_id_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupIdInput"></a>

```python
mirroring_endpoint_group_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkSecurityMirroringEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mirroring_deployment_group`<sup>Required</sup> <a name="mirroring_deployment_group" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroup"></a>

```python
mirroring_deployment_group: str
```

- *Type:* str

---

##### `mirroring_endpoint_group_id`<sup>Required</sup> <a name="mirroring_endpoint_group_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupId"></a>

```python
mirroring_endpoint_group_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityMirroringEndpointGroupAssociations <a name="NetworkSecurityMirroringEndpointGroupAssociations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociations()
```


### NetworkSecurityMirroringEndpointGroupConfig <a name="NetworkSecurityMirroringEndpointGroupConfig" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  mirroring_deployment_group: str,
  mirroring_endpoint_group_id: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkSecurityMirroringEndpointGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.location">location</a></code> | <code>str</code> | The cloud location of the endpoint group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.mirroringDeploymentGroup">mirroring_deployment_group</a></code> | <code>str</code> | The deployment group that this DIRECT endpoint group is connected to, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.mirroringEndpointGroupId">mirroring_endpoint_group_id</a></code> | <code>str</code> | The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.description">description</a></code> | <code>str</code> | User-provided description of the endpoint group. Used as additional context for the endpoint group. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#id NetworkSecurityMirroringEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#project NetworkSecurityMirroringEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The cloud location of the endpoint group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#location NetworkSecurityMirroringEndpointGroup#location}

---

##### `mirroring_deployment_group`<sup>Required</sup> <a name="mirroring_deployment_group" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.mirroringDeploymentGroup"></a>

```python
mirroring_deployment_group: str
```

- *Type:* str

The deployment group that this DIRECT endpoint group is connected to, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#mirroring_deployment_group NetworkSecurityMirroringEndpointGroup#mirroring_deployment_group}

---

##### `mirroring_endpoint_group_id`<sup>Required</sup> <a name="mirroring_endpoint_group_id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.mirroringEndpointGroupId"></a>

```python
mirroring_endpoint_group_id: str
```

- *Type:* str

The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#mirroring_endpoint_group_id NetworkSecurityMirroringEndpointGroup#mirroring_endpoint_group_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description of the endpoint group. Used as additional context for the endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#description NetworkSecurityMirroringEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#id NetworkSecurityMirroringEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#labels NetworkSecurityMirroringEndpointGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#project NetworkSecurityMirroringEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.timeouts"></a>

```python
timeouts: NetworkSecurityMirroringEndpointGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#timeouts NetworkSecurityMirroringEndpointGroup#timeouts}

---

### NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups <a name="NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups()
```


### NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations <a name="NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations()
```


### NetworkSecurityMirroringEndpointGroupTimeouts <a name="NetworkSecurityMirroringEndpointGroupTimeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#create NetworkSecurityMirroringEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#delete NetworkSecurityMirroringEndpointGroup#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#update NetworkSecurityMirroringEndpointGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#create NetworkSecurityMirroringEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#delete NetworkSecurityMirroringEndpointGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_mirroring_endpoint_group#update NetworkSecurityMirroringEndpointGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityMirroringEndpointGroupAssociationsList <a name="NetworkSecurityMirroringEndpointGroupAssociationsList" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkSecurityMirroringEndpointGroupAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkSecurityMirroringEndpointGroupAssociationsOutputReference <a name="NetworkSecurityMirroringEndpointGroupAssociationsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociations">NetworkSecurityMirroringEndpointGroupAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecurityMirroringEndpointGroupAssociations
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociations">NetworkSecurityMirroringEndpointGroupAssociations</a>

---


### NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList <a name="NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList <a name="NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference <a name="NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations</a>

---


### NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference <a name="NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.locations"></a>

```python
locations: NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups</a>

---


### NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference <a name="NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_mirroring_endpoint_group

networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkSecurityMirroringEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a>]

---



