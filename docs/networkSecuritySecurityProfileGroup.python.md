# `networkSecuritySecurityProfileGroup` Submodule <a name="`networkSecuritySecurityProfileGroup` Submodule" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecuritySecurityProfileGroup <a name="NetworkSecuritySecurityProfileGroup" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group google_network_security_security_profile_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile_group

networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup(
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
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  parent: str = None,
  threat_prevention_profile: str = None,
  timeouts: NetworkSecuritySecurityProfileGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the security profile group resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#id NetworkSecuritySecurityProfileGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the security profile group. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The name of the parent this security profile group belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.threatPreventionProfile">threat_prevention_profile</a></code> | <code>str</code> | Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.name"></a>

- *Type:* str

The name of the security profile group resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#name NetworkSecuritySecurityProfileGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#description NetworkSecuritySecurityProfileGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#id NetworkSecuritySecurityProfileGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#labels NetworkSecuritySecurityProfileGroup#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.location"></a>

- *Type:* str

The location of the security profile group. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#location NetworkSecuritySecurityProfileGroup#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.parent"></a>

- *Type:* str

The name of the parent this security profile group belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#parent NetworkSecuritySecurityProfileGroup#parent}

---

##### `threat_prevention_profile`<sup>Optional</sup> <a name="threat_prevention_profile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.threatPreventionProfile"></a>

- *Type:* str

Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#threat_prevention_profile NetworkSecuritySecurityProfileGroup#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#timeouts NetworkSecuritySecurityProfileGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetThreatPreventionProfile">reset_threat_prevention_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#create NetworkSecuritySecurityProfileGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#delete NetworkSecuritySecurityProfileGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#update NetworkSecuritySecurityProfileGroup#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_threat_prevention_profile` <a name="reset_threat_prevention_profile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetThreatPreventionProfile"></a>

```python
def reset_threat_prevention_profile() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkSecuritySecurityProfileGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile_group

networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile_group

networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile_group

networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile_group

networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkSecuritySecurityProfileGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecuritySecurityProfileGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecuritySecurityProfileGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecuritySecurityProfileGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference">NetworkSecuritySecurityProfileGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.threatPreventionProfileInput">threat_prevention_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.threatPreventionProfile">threat_prevention_profile</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.timeouts"></a>

```python
timeouts: NetworkSecuritySecurityProfileGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference">NetworkSecuritySecurityProfileGroupTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `threat_prevention_profile_input`<sup>Optional</sup> <a name="threat_prevention_profile_input" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.threatPreventionProfileInput"></a>

```python
threat_prevention_profile_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkSecuritySecurityProfileGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `threat_prevention_profile`<sup>Required</sup> <a name="threat_prevention_profile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.threatPreventionProfile"></a>

```python
threat_prevention_profile: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecuritySecurityProfileGroupConfig <a name="NetworkSecuritySecurityProfileGroupConfig" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile_group

networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  parent: str = None,
  threat_prevention_profile: str = None,
  timeouts: NetworkSecuritySecurityProfileGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.name">name</a></code> | <code>str</code> | The name of the security profile group resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.description">description</a></code> | <code>str</code> | An optional description of the profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#id NetworkSecuritySecurityProfileGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.location">location</a></code> | <code>str</code> | The location of the security profile group. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.parent">parent</a></code> | <code>str</code> | The name of the parent this security profile group belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.threatPreventionProfile">threat_prevention_profile</a></code> | <code>str</code> | Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the security profile group resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#name NetworkSecuritySecurityProfileGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#description NetworkSecuritySecurityProfileGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#id NetworkSecuritySecurityProfileGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#labels NetworkSecuritySecurityProfileGroup#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the security profile group. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#location NetworkSecuritySecurityProfileGroup#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The name of the parent this security profile group belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#parent NetworkSecuritySecurityProfileGroup#parent}

---

##### `threat_prevention_profile`<sup>Optional</sup> <a name="threat_prevention_profile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.threatPreventionProfile"></a>

```python
threat_prevention_profile: str
```

- *Type:* str

Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#threat_prevention_profile NetworkSecuritySecurityProfileGroup#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.timeouts"></a>

```python
timeouts: NetworkSecuritySecurityProfileGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#timeouts NetworkSecuritySecurityProfileGroup#timeouts}

---

### NetworkSecuritySecurityProfileGroupTimeouts <a name="NetworkSecuritySecurityProfileGroupTimeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile_group

networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#create NetworkSecuritySecurityProfileGroup#create}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#delete NetworkSecuritySecurityProfileGroup#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#update NetworkSecuritySecurityProfileGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#create NetworkSecuritySecurityProfileGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#delete NetworkSecuritySecurityProfileGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_security_security_profile_group#update NetworkSecuritySecurityProfileGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecuritySecurityProfileGroupTimeoutsOutputReference <a name="NetworkSecuritySecurityProfileGroupTimeoutsOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile_group

networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkSecuritySecurityProfileGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a>]

---



