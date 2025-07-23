# `apigeeSecurityProfileV2` Submodule <a name="`apigeeSecurityProfileV2` Submodule" id="@cdktf/provider-google.apigeeSecurityProfileV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityProfileV2 <a name="ApigeeSecurityProfileV2" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2 google_apigee_security_profile_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_profile_v2

apigeeSecurityProfileV2.ApigeeSecurityProfileV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  org_id: str,
  profile_assessment_configs: typing.Union[IResolvable, typing.List[ApigeeSecurityProfileV2ProfileAssessmentConfigs]],
  profile_id: str,
  description: str = None,
  id: str = None,
  timeouts: ApigeeSecurityProfileV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee Security Profile V2, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.profileAssessmentConfigs">profile_assessment_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>]]</code> | profile_assessment_configs block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | Resource ID of the security profile. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the security profile. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#id ApigeeSecurityProfileV2#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee Security Profile V2, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#org_id ApigeeSecurityProfileV2#org_id}

---

##### `profile_assessment_configs`<sup>Required</sup> <a name="profile_assessment_configs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.profileAssessmentConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>]]

profile_assessment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#profile_assessment_configs ApigeeSecurityProfileV2#profile_assessment_configs}

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.profileId"></a>

- *Type:* str

Resource ID of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#profile_id ApigeeSecurityProfileV2#profile_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.description"></a>

- *Type:* str

Description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#description ApigeeSecurityProfileV2#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#id ApigeeSecurityProfileV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#timeouts ApigeeSecurityProfileV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putProfileAssessmentConfigs">put_profile_assessment_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_profile_assessment_configs` <a name="put_profile_assessment_configs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putProfileAssessmentConfigs"></a>

```python
def put_profile_assessment_configs(
  value: typing.Union[IResolvable, typing.List[ApigeeSecurityProfileV2ProfileAssessmentConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putProfileAssessmentConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#create ApigeeSecurityProfileV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#delete ApigeeSecurityProfileV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#update ApigeeSecurityProfileV2#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeSecurityProfileV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_profile_v2

apigeeSecurityProfileV2.ApigeeSecurityProfileV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_profile_v2

apigeeSecurityProfileV2.ApigeeSecurityProfileV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_profile_v2

apigeeSecurityProfileV2.ApigeeSecurityProfileV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_profile_v2

apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeSecurityProfileV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeSecurityProfileV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeSecurityProfileV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityProfileV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileAssessmentConfigs">profile_assessment_configs</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList">ApigeeSecurityProfileV2ProfileAssessmentConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference">ApigeeSecurityProfileV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileAssessmentConfigsInput">profile_assessment_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_assessment_configs`<sup>Required</sup> <a name="profile_assessment_configs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileAssessmentConfigs"></a>

```python
profile_assessment_configs: ApigeeSecurityProfileV2ProfileAssessmentConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList">ApigeeSecurityProfileV2ProfileAssessmentConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.timeouts"></a>

```python
timeouts: ApigeeSecurityProfileV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference">ApigeeSecurityProfileV2TimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `profile_assessment_configs_input`<sup>Optional</sup> <a name="profile_assessment_configs_input" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileAssessmentConfigsInput"></a>

```python
profile_assessment_configs_input: typing.Union[IResolvable, typing.List[ApigeeSecurityProfileV2ProfileAssessmentConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>]]

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeSecurityProfileV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityProfileV2Config <a name="ApigeeSecurityProfileV2Config" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_profile_v2

apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  org_id: str,
  profile_assessment_configs: typing.Union[IResolvable, typing.List[ApigeeSecurityProfileV2ProfileAssessmentConfigs]],
  profile_id: str,
  description: str = None,
  id: str = None,
  timeouts: ApigeeSecurityProfileV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee Security Profile V2, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.profileAssessmentConfigs">profile_assessment_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>]]</code> | profile_assessment_configs block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.profileId">profile_id</a></code> | <code>str</code> | Resource ID of the security profile. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.description">description</a></code> | <code>str</code> | Description of the security profile. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#id ApigeeSecurityProfileV2#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee Security Profile V2, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#org_id ApigeeSecurityProfileV2#org_id}

---

##### `profile_assessment_configs`<sup>Required</sup> <a name="profile_assessment_configs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.profileAssessmentConfigs"></a>

```python
profile_assessment_configs: typing.Union[IResolvable, typing.List[ApigeeSecurityProfileV2ProfileAssessmentConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>]]

profile_assessment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#profile_assessment_configs ApigeeSecurityProfileV2#profile_assessment_configs}

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

Resource ID of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#profile_id ApigeeSecurityProfileV2#profile_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#description ApigeeSecurityProfileV2#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#id ApigeeSecurityProfileV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.timeouts"></a>

```python
timeouts: ApigeeSecurityProfileV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#timeouts ApigeeSecurityProfileV2#timeouts}

---

### ApigeeSecurityProfileV2ProfileAssessmentConfigs <a name="ApigeeSecurityProfileV2ProfileAssessmentConfigs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_profile_v2

apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs(
  assessment: str,
  weight: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.property.assessment">assessment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#assessment ApigeeSecurityProfileV2#assessment}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.property.weight">weight</a></code> | <code>str</code> | The weight of the assessment. Possible values: ["MINOR", "MODERATE", "MAJOR"]. |

---

##### `assessment`<sup>Required</sup> <a name="assessment" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.property.assessment"></a>

```python
assessment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#assessment ApigeeSecurityProfileV2#assessment}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.property.weight"></a>

```python
weight: str
```

- *Type:* str

The weight of the assessment. Possible values: ["MINOR", "MODERATE", "MAJOR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#weight ApigeeSecurityProfileV2#weight}

---

### ApigeeSecurityProfileV2Timeouts <a name="ApigeeSecurityProfileV2Timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_profile_v2

apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#create ApigeeSecurityProfileV2#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#delete ApigeeSecurityProfileV2#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#update ApigeeSecurityProfileV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#create ApigeeSecurityProfileV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#delete ApigeeSecurityProfileV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_security_profile_v2#update ApigeeSecurityProfileV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityProfileV2ProfileAssessmentConfigsList <a name="ApigeeSecurityProfileV2ProfileAssessmentConfigsList" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_profile_v2

apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeSecurityProfileV2ProfileAssessmentConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>]]

---


### ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference <a name="ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_profile_v2

apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.assessmentInput">assessment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.weightInput">weight_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.assessment">assessment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.weight">weight</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assessment_input`<sup>Optional</sup> <a name="assessment_input" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.assessmentInput"></a>

```python
assessment_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.weightInput"></a>

```python
weight_input: str
```

- *Type:* str

---

##### `assessment`<sup>Required</sup> <a name="assessment" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.assessment"></a>

```python
assessment: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.weight"></a>

```python
weight: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeSecurityProfileV2ProfileAssessmentConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>]

---


### ApigeeSecurityProfileV2TimeoutsOutputReference <a name="ApigeeSecurityProfileV2TimeoutsOutputReference" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_profile_v2

apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeSecurityProfileV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>]

---



