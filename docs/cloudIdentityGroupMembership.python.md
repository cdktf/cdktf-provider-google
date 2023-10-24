# `google_cloud_identity_group_membership`

Refer to the Terraform Registory for docs: [`google_cloud_identity_group_membership`](https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership).

# `cloudIdentityGroupMembership` Submodule <a name="`cloudIdentityGroupMembership` Submodule" id="@cdktf/provider-google.cloudIdentityGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityGroupMembership <a name="CloudIdentityGroupMembership" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership google_cloud_identity_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembership(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  roles: typing.Union[IResolvable, typing.List[CloudIdentityGroupMembershipRoles]],
  id: str = None,
  preferred_member_key: CloudIdentityGroupMembershipPreferredMemberKey = None,
  timeouts: CloudIdentityGroupMembershipTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.group">group</a></code> | <code>str</code> | The name of the Group to create this membership in. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.roles">roles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>]]</code> | roles block. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.preferredMemberKey">preferred_member_key</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a></code> | preferred_member_key block. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.group"></a>

- *Type:* str

The name of the Group to create this membership in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#group CloudIdentityGroupMembership#group}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.roles"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>]]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#roles CloudIdentityGroupMembership#roles}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferred_member_key`<sup>Optional</sup> <a name="preferred_member_key" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.preferredMemberKey"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a>

preferred_member_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#preferred_member_key CloudIdentityGroupMembership#preferred_member_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#timeouts CloudIdentityGroupMembership#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putPreferredMemberKey">put_preferred_member_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetPreferredMemberKey">reset_preferred_member_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_preferred_member_key` <a name="put_preferred_member_key" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putPreferredMemberKey"></a>

```python
def put_preferred_member_key(
  id: str,
  namespace: str = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putPreferredMemberKey.parameter.id"></a>

- *Type:* str

The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putPreferredMemberKey.parameter.namespace"></a>

- *Type:* str

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#namespace CloudIdentityGroupMembership#namespace}

---

##### `put_roles` <a name="put_roles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putRoles"></a>

```python
def put_roles(
  value: typing.Union[IResolvable, typing.List[CloudIdentityGroupMembershipRoles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putRoles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#create CloudIdentityGroupMembership#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#delete CloudIdentityGroupMembership#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#update CloudIdentityGroupMembership#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_preferred_member_key` <a name="reset_preferred_member_key" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetPreferredMemberKey"></a>

```python
def reset_preferred_member_key() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudIdentityGroupMembership resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembership.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembership.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembership.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembership.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudIdentityGroupMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudIdentityGroupMembership to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudIdentityGroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudIdentityGroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.preferredMemberKey">preferred_member_key</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference">CloudIdentityGroupMembershipPreferredMemberKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList">CloudIdentityGroupMembershipRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference">CloudIdentityGroupMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.preferredMemberKeyInput">preferred_member_key_input</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.rolesInput">roles_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `preferred_member_key`<sup>Required</sup> <a name="preferred_member_key" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.preferredMemberKey"></a>

```python
preferred_member_key: CloudIdentityGroupMembershipPreferredMemberKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference">CloudIdentityGroupMembershipPreferredMemberKeyOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.roles"></a>

```python
roles: CloudIdentityGroupMembershipRolesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList">CloudIdentityGroupMembershipRolesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.timeouts"></a>

```python
timeouts: CloudIdentityGroupMembershipTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference">CloudIdentityGroupMembershipTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `preferred_member_key_input`<sup>Optional</sup> <a name="preferred_member_key_input" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.preferredMemberKeyInput"></a>

```python
preferred_member_key_input: CloudIdentityGroupMembershipPreferredMemberKey
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a>

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.rolesInput"></a>

```python
roles_input: typing.Union[IResolvable, typing.List[CloudIdentityGroupMembershipRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudIdentityGroupMembershipTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a>]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityGroupMembershipConfig <a name="CloudIdentityGroupMembershipConfig" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  roles: typing.Union[IResolvable, typing.List[CloudIdentityGroupMembershipRoles]],
  id: str = None,
  preferred_member_key: CloudIdentityGroupMembershipPreferredMemberKey = None,
  timeouts: CloudIdentityGroupMembershipTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.group">group</a></code> | <code>str</code> | The name of the Group to create this membership in. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.roles">roles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>]]</code> | roles block. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.preferredMemberKey">preferred_member_key</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a></code> | preferred_member_key block. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The name of the Group to create this membership in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#group CloudIdentityGroupMembership#group}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.roles"></a>

```python
roles: typing.Union[IResolvable, typing.List[CloudIdentityGroupMembershipRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>]]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#roles CloudIdentityGroupMembership#roles}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferred_member_key`<sup>Optional</sup> <a name="preferred_member_key" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.preferredMemberKey"></a>

```python
preferred_member_key: CloudIdentityGroupMembershipPreferredMemberKey
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a>

preferred_member_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#preferred_member_key CloudIdentityGroupMembership#preferred_member_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.timeouts"></a>

```python
timeouts: CloudIdentityGroupMembershipTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#timeouts CloudIdentityGroupMembership#timeouts}

---

### CloudIdentityGroupMembershipPreferredMemberKey <a name="CloudIdentityGroupMembershipPreferredMemberKey" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey(
  id: str,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.property.id">id</a></code> | <code>str</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.property.namespace">namespace</a></code> | <code>str</code> | The namespace in which the entity exists. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#namespace CloudIdentityGroupMembership#namespace}

---

### CloudIdentityGroupMembershipRoles <a name="CloudIdentityGroupMembershipRoles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles.property.name">name</a></code> | <code>str</code> | The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"]. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#name CloudIdentityGroupMembership#name}

---

### CloudIdentityGroupMembershipTimeouts <a name="CloudIdentityGroupMembershipTimeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#create CloudIdentityGroupMembership#create}. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#delete CloudIdentityGroupMembership#delete}. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#update CloudIdentityGroupMembership#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#create CloudIdentityGroupMembership#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#delete CloudIdentityGroupMembership#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/cloud_identity_group_membership#update CloudIdentityGroupMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityGroupMembershipPreferredMemberKeyOutputReference <a name="CloudIdentityGroupMembershipPreferredMemberKeyOutputReference" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.internalValue"></a>

```python
internal_value: CloudIdentityGroupMembershipPreferredMemberKey
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a>

---


### CloudIdentityGroupMembershipRolesList <a name="CloudIdentityGroupMembershipRolesList" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudIdentityGroupMembershipRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudIdentityGroupMembershipRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>]]

---


### CloudIdentityGroupMembershipRolesOutputReference <a name="CloudIdentityGroupMembershipRolesOutputReference" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudIdentityGroupMembershipRoles]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>]

---


### CloudIdentityGroupMembershipTimeoutsOutputReference <a name="CloudIdentityGroupMembershipTimeoutsOutputReference" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_identity_group_membership

cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudIdentityGroupMembershipTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a>]

---



