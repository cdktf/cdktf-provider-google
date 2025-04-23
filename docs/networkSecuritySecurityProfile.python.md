# `networkSecuritySecurityProfile` Submodule <a name="`networkSecuritySecurityProfile` Submodule" id="@cdktf/provider-google.networkSecuritySecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecuritySecurityProfile <a name="NetworkSecuritySecurityProfile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile google_network_security_security_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfile(
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
  type: str,
  custom_intercept_profile: NetworkSecuritySecurityProfileCustomInterceptProfile = None,
  custom_mirroring_profile: NetworkSecuritySecurityProfileCustomMirroringProfile = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  parent: str = None,
  threat_prevention_profile: NetworkSecuritySecurityProfileThreatPreventionProfile = None,
  timeouts: NetworkSecuritySecurityProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the security profile resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of security profile. Possible values: ["THREAT_PREVENTION", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"]. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.customInterceptProfile">custom_intercept_profile</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | custom_intercept_profile block. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.customMirroringProfile">custom_mirroring_profile</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | custom_mirroring_profile block. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the security profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the security profile. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The name of the parent this security profile belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.threatPreventionProfile">threat_prevention_profile</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | threat_prevention_profile block. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.name"></a>

- *Type:* str

The name of the security profile resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#name NetworkSecuritySecurityProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.type"></a>

- *Type:* str

The type of security profile. Possible values: ["THREAT_PREVENTION", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#type NetworkSecuritySecurityProfile#type}

---

##### `custom_intercept_profile`<sup>Optional</sup> <a name="custom_intercept_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.customInterceptProfile"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

custom_intercept_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#custom_intercept_profile NetworkSecuritySecurityProfile#custom_intercept_profile}

---

##### `custom_mirroring_profile`<sup>Optional</sup> <a name="custom_mirroring_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.customMirroringProfile"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

custom_mirroring_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#custom_mirroring_profile NetworkSecuritySecurityProfile#custom_mirroring_profile}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the security profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#description NetworkSecuritySecurityProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#labels NetworkSecuritySecurityProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.location"></a>

- *Type:* str

The location of the security profile. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#location NetworkSecuritySecurityProfile#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.parent"></a>

- *Type:* str

The name of the parent this security profile belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#parent NetworkSecuritySecurityProfile#parent}

---

##### `threat_prevention_profile`<sup>Optional</sup> <a name="threat_prevention_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.threatPreventionProfile"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

threat_prevention_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#threat_prevention_profile NetworkSecuritySecurityProfile#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#timeouts NetworkSecuritySecurityProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomInterceptProfile">put_custom_intercept_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomMirroringProfile">put_custom_mirroring_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile">put_threat_prevention_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetCustomInterceptProfile">reset_custom_intercept_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetCustomMirroringProfile">reset_custom_mirroring_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetThreatPreventionProfile">reset_threat_prevention_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_intercept_profile` <a name="put_custom_intercept_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomInterceptProfile"></a>

```python
def put_custom_intercept_profile(
  intercept_endpoint_group: str
) -> None
```

###### `intercept_endpoint_group`<sup>Required</sup> <a name="intercept_endpoint_group" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomInterceptProfile.parameter.interceptEndpointGroup"></a>

- *Type:* str

The Intercept Endpoint Group to which matching traffic should be intercepted. Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#intercept_endpoint_group NetworkSecuritySecurityProfile#intercept_endpoint_group}

---

##### `put_custom_mirroring_profile` <a name="put_custom_mirroring_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomMirroringProfile"></a>

```python
def put_custom_mirroring_profile(
  mirroring_endpoint_group: str
) -> None
```

###### `mirroring_endpoint_group`<sup>Required</sup> <a name="mirroring_endpoint_group" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomMirroringProfile.parameter.mirroringEndpointGroup"></a>

- *Type:* str

The Mirroring Endpoint Group to which matching traffic should be mirrored. Format: projects/{project_id}/locations/global/mirroringEndpointGroups/{endpoint_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#mirroring_endpoint_group NetworkSecuritySecurityProfile#mirroring_endpoint_group}

---

##### `put_threat_prevention_profile` <a name="put_threat_prevention_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile"></a>

```python
def put_threat_prevention_profile(
  antivirus_overrides: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides]] = None,
  severity_overrides: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]] = None,
  threat_overrides: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]] = None
) -> None
```

###### `antivirus_overrides`<sup>Optional</sup> <a name="antivirus_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile.parameter.antivirusOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>]]

antivirus_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#antivirus_overrides NetworkSecuritySecurityProfile#antivirus_overrides}

---

###### `severity_overrides`<sup>Optional</sup> <a name="severity_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile.parameter.severityOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]

severity_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#severity_overrides NetworkSecuritySecurityProfile#severity_overrides}

---

###### `threat_overrides`<sup>Optional</sup> <a name="threat_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile.parameter.threatOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]

threat_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#threat_overrides NetworkSecuritySecurityProfile#threat_overrides}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#create NetworkSecuritySecurityProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#delete NetworkSecuritySecurityProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#update NetworkSecuritySecurityProfile#update}.

---

##### `reset_custom_intercept_profile` <a name="reset_custom_intercept_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetCustomInterceptProfile"></a>

```python
def reset_custom_intercept_profile() -> None
```

##### `reset_custom_mirroring_profile` <a name="reset_custom_mirroring_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetCustomMirroringProfile"></a>

```python
def reset_custom_mirroring_profile() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_threat_prevention_profile` <a name="reset_threat_prevention_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetThreatPreventionProfile"></a>

```python
def reset_threat_prevention_profile() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkSecuritySecurityProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkSecuritySecurityProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecuritySecurityProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecuritySecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecuritySecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customInterceptProfile">custom_intercept_profile</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference">NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customMirroringProfile">custom_mirroring_profile</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference">NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfile">threat_prevention_profile</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference">NetworkSecuritySecurityProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customInterceptProfileInput">custom_intercept_profile_input</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customMirroringProfileInput">custom_mirroring_profile_input</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfileInput">threat_prevention_profile_input</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `custom_intercept_profile`<sup>Required</sup> <a name="custom_intercept_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customInterceptProfile"></a>

```python
custom_intercept_profile: NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference">NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference</a>

---

##### `custom_mirroring_profile`<sup>Required</sup> <a name="custom_mirroring_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customMirroringProfile"></a>

```python
custom_mirroring_profile: NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference">NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `threat_prevention_profile`<sup>Required</sup> <a name="threat_prevention_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfile"></a>

```python
threat_prevention_profile: NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeouts"></a>

```python
timeouts: NetworkSecuritySecurityProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference">NetworkSecuritySecurityProfileTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_intercept_profile_input`<sup>Optional</sup> <a name="custom_intercept_profile_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customInterceptProfileInput"></a>

```python
custom_intercept_profile_input: NetworkSecuritySecurityProfileCustomInterceptProfile
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

---

##### `custom_mirroring_profile_input`<sup>Optional</sup> <a name="custom_mirroring_profile_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customMirroringProfileInput"></a>

```python
custom_mirroring_profile_input: NetworkSecuritySecurityProfileCustomMirroringProfile
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `threat_prevention_profile_input`<sup>Optional</sup> <a name="threat_prevention_profile_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfileInput"></a>

```python
threat_prevention_profile_input: NetworkSecuritySecurityProfileThreatPreventionProfile
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkSecuritySecurityProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecuritySecurityProfileConfig <a name="NetworkSecuritySecurityProfileConfig" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  custom_intercept_profile: NetworkSecuritySecurityProfileCustomInterceptProfile = None,
  custom_mirroring_profile: NetworkSecuritySecurityProfileCustomMirroringProfile = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  parent: str = None,
  threat_prevention_profile: NetworkSecuritySecurityProfileThreatPreventionProfile = None,
  timeouts: NetworkSecuritySecurityProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.name">name</a></code> | <code>str</code> | The name of the security profile resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.type">type</a></code> | <code>str</code> | The type of security profile. Possible values: ["THREAT_PREVENTION", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"]. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.customInterceptProfile">custom_intercept_profile</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | custom_intercept_profile block. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.customMirroringProfile">custom_mirroring_profile</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | custom_mirroring_profile block. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.description">description</a></code> | <code>str</code> | An optional description of the security profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.location">location</a></code> | <code>str</code> | The location of the security profile. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.parent">parent</a></code> | <code>str</code> | The name of the parent this security profile belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.threatPreventionProfile">threat_prevention_profile</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | threat_prevention_profile block. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the security profile resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#name NetworkSecuritySecurityProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of security profile. Possible values: ["THREAT_PREVENTION", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#type NetworkSecuritySecurityProfile#type}

---

##### `custom_intercept_profile`<sup>Optional</sup> <a name="custom_intercept_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.customInterceptProfile"></a>

```python
custom_intercept_profile: NetworkSecuritySecurityProfileCustomInterceptProfile
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

custom_intercept_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#custom_intercept_profile NetworkSecuritySecurityProfile#custom_intercept_profile}

---

##### `custom_mirroring_profile`<sup>Optional</sup> <a name="custom_mirroring_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.customMirroringProfile"></a>

```python
custom_mirroring_profile: NetworkSecuritySecurityProfileCustomMirroringProfile
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

custom_mirroring_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#custom_mirroring_profile NetworkSecuritySecurityProfile#custom_mirroring_profile}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the security profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#description NetworkSecuritySecurityProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#labels NetworkSecuritySecurityProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the security profile. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#location NetworkSecuritySecurityProfile#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The name of the parent this security profile belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#parent NetworkSecuritySecurityProfile#parent}

---

##### `threat_prevention_profile`<sup>Optional</sup> <a name="threat_prevention_profile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.threatPreventionProfile"></a>

```python
threat_prevention_profile: NetworkSecuritySecurityProfileThreatPreventionProfile
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

threat_prevention_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#threat_prevention_profile NetworkSecuritySecurityProfile#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.timeouts"></a>

```python
timeouts: NetworkSecuritySecurityProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#timeouts NetworkSecuritySecurityProfile#timeouts}

---

### NetworkSecuritySecurityProfileCustomInterceptProfile <a name="NetworkSecuritySecurityProfileCustomInterceptProfile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile(
  intercept_endpoint_group: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile.property.interceptEndpointGroup">intercept_endpoint_group</a></code> | <code>str</code> | The Intercept Endpoint Group to which matching traffic should be intercepted. Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}. |

---

##### `intercept_endpoint_group`<sup>Required</sup> <a name="intercept_endpoint_group" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile.property.interceptEndpointGroup"></a>

```python
intercept_endpoint_group: str
```

- *Type:* str

The Intercept Endpoint Group to which matching traffic should be intercepted. Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#intercept_endpoint_group NetworkSecuritySecurityProfile#intercept_endpoint_group}

---

### NetworkSecuritySecurityProfileCustomMirroringProfile <a name="NetworkSecuritySecurityProfileCustomMirroringProfile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile(
  mirroring_endpoint_group: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringEndpointGroup">mirroring_endpoint_group</a></code> | <code>str</code> | The Mirroring Endpoint Group to which matching traffic should be mirrored. Format: projects/{project_id}/locations/global/mirroringEndpointGroups/{endpoint_group_id}. |

---

##### `mirroring_endpoint_group`<sup>Required</sup> <a name="mirroring_endpoint_group" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringEndpointGroup"></a>

```python
mirroring_endpoint_group: str
```

- *Type:* str

The Mirroring Endpoint Group to which matching traffic should be mirrored. Format: projects/{project_id}/locations/global/mirroringEndpointGroups/{endpoint_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#mirroring_endpoint_group NetworkSecuritySecurityProfile#mirroring_endpoint_group}

---

### NetworkSecuritySecurityProfileThreatPreventionProfile <a name="NetworkSecuritySecurityProfileThreatPreventionProfile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile(
  antivirus_overrides: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides]] = None,
  severity_overrides: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]] = None,
  threat_overrides: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.antivirusOverrides">antivirus_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>]]</code> | antivirus_overrides block. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides">severity_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]</code> | severity_overrides block. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides">threat_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]</code> | threat_overrides block. |

---

##### `antivirus_overrides`<sup>Optional</sup> <a name="antivirus_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.antivirusOverrides"></a>

```python
antivirus_overrides: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>]]

antivirus_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#antivirus_overrides NetworkSecuritySecurityProfile#antivirus_overrides}

---

##### `severity_overrides`<sup>Optional</sup> <a name="severity_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides"></a>

```python
severity_overrides: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]

severity_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#severity_overrides NetworkSecuritySecurityProfile#severity_overrides}

---

##### `threat_overrides`<sup>Optional</sup> <a name="threat_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides"></a>

```python
threat_overrides: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]

threat_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#threat_overrides NetworkSecuritySecurityProfile#threat_overrides}

---

### NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides <a name="NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides(
  action: str,
  protocol: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.action">action</a></code> | <code>str</code> | Threat action override. For some threat types, only a subset of actions applies. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.protocol">protocol</a></code> | <code>str</code> | Required protocol to match. Possible values: ["SMTP", "SMB", "POP3", "IMAP", "HTTP2", "HTTP", "FTP"]. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.action"></a>

```python
action: str
```

- *Type:* str

Threat action override. For some threat types, only a subset of actions applies. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Required protocol to match. Possible values: ["SMTP", "SMB", "POP3", "IMAP", "HTTP2", "HTTP", "FTP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#protocol NetworkSecuritySecurityProfile#protocol}

---

### NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides <a name="NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides(
  action: str,
  severity: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action">action</a></code> | <code>str</code> | Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity">severity</a></code> | <code>str</code> | Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"]. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action"></a>

```python
action: str
```

- *Type:* str

Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity"></a>

```python
severity: str
```

- *Type:* str

Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#severity NetworkSecuritySecurityProfile#severity}

---

### NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides <a name="NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides(
  action: str,
  threat_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action">action</a></code> | <code>str</code> | Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId">threat_id</a></code> | <code>str</code> | Vendor-specific ID of a threat to override. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action"></a>

```python
action: str
```

- *Type:* str

Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}

---

##### `threat_id`<sup>Required</sup> <a name="threat_id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId"></a>

```python
threat_id: str
```

- *Type:* str

Vendor-specific ID of a threat to override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#threat_id NetworkSecuritySecurityProfile#threat_id}

---

### NetworkSecuritySecurityProfileTimeouts <a name="NetworkSecuritySecurityProfileTimeouts" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#create NetworkSecuritySecurityProfile#create}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#delete NetworkSecuritySecurityProfile#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#update NetworkSecuritySecurityProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#create NetworkSecuritySecurityProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#delete NetworkSecuritySecurityProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_security_profile#update NetworkSecuritySecurityProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference <a name="NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroupInput">intercept_endpoint_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroup">intercept_endpoint_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intercept_endpoint_group_input`<sup>Optional</sup> <a name="intercept_endpoint_group_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroupInput"></a>

```python
intercept_endpoint_group_input: str
```

- *Type:* str

---

##### `intercept_endpoint_group`<sup>Required</sup> <a name="intercept_endpoint_group" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroup"></a>

```python
intercept_endpoint_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecuritySecurityProfileCustomInterceptProfile
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

---


### NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference <a name="NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupInput">mirroring_endpoint_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroup">mirroring_endpoint_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mirroring_endpoint_group_input`<sup>Optional</sup> <a name="mirroring_endpoint_group_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupInput"></a>

```python
mirroring_endpoint_group_input: str
```

- *Type:* str

---

##### `mirroring_endpoint_group`<sup>Required</sup> <a name="mirroring_endpoint_group" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroup"></a>

```python
mirroring_endpoint_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecuritySecurityProfileCustomMirroringProfile
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList <a name="NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>]]

---


### NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>]

---


### NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putAntivirusOverrides">put_antivirus_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides">put_severity_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides">put_threat_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetAntivirusOverrides">reset_antivirus_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides">reset_severity_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides">reset_threat_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_antivirus_overrides` <a name="put_antivirus_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putAntivirusOverrides"></a>

```python
def put_antivirus_overrides(
  value: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putAntivirusOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>]]

---

##### `put_severity_overrides` <a name="put_severity_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides"></a>

```python
def put_severity_overrides(
  value: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]

---

##### `put_threat_overrides` <a name="put_threat_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides"></a>

```python
def put_threat_overrides(
  value: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]

---

##### `reset_antivirus_overrides` <a name="reset_antivirus_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetAntivirusOverrides"></a>

```python
def reset_antivirus_overrides() -> None
```

##### `reset_severity_overrides` <a name="reset_severity_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides"></a>

```python
def reset_severity_overrides() -> None
```

##### `reset_threat_overrides` <a name="reset_threat_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides"></a>

```python
def reset_threat_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverrides">antivirus_overrides</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides">severity_overrides</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides">threat_overrides</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverridesInput">antivirus_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput">severity_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput">threat_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `antivirus_overrides`<sup>Required</sup> <a name="antivirus_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverrides"></a>

```python
antivirus_overrides: NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList</a>

---

##### `severity_overrides`<sup>Required</sup> <a name="severity_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides"></a>

```python
severity_overrides: NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a>

---

##### `threat_overrides`<sup>Required</sup> <a name="threat_overrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides"></a>

```python
threat_overrides: NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a>

---

##### `antivirus_overrides_input`<sup>Optional</sup> <a name="antivirus_overrides_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverridesInput"></a>

```python
antivirus_overrides_input: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>]]

---

##### `severity_overrides_input`<sup>Optional</sup> <a name="severity_overrides_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput"></a>

```python
severity_overrides_input: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]

---

##### `threat_overrides_input`<sup>Optional</sup> <a name="threat_overrides_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput"></a>

```python
threat_overrides_input: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecuritySecurityProfileThreatPreventionProfile
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList <a name="NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]

---


### NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]

---


### NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList <a name="NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]

---


### NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput">threat_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId">threat_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `threat_id_input`<sup>Optional</sup> <a name="threat_id_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput"></a>

```python
threat_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `threat_id`<sup>Required</sup> <a name="threat_id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId"></a>

```python
threat_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]

---


### NetworkSecuritySecurityProfileTimeoutsOutputReference <a name="NetworkSecuritySecurityProfileTimeoutsOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_security_profile

networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkSecuritySecurityProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>]

---



