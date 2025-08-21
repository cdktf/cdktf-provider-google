# `iamWorkforcePool` Submodule <a name="`iamWorkforcePool` Submodule" id="@cdktf/provider-google.iamWorkforcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePool <a name="IamWorkforcePool" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool google_iam_workforce_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePool(
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
  parent: str,
  workforce_pool_id: str,
  access_restrictions: IamWorkforcePoolAccessRestrictions = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  session_duration: str = None,
  timeouts: IamWorkforcePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Immutable. The resource name of the parent. Format: 'organizations/{org-id}'. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.workforcePoolId">workforce_pool_id</a></code> | <code>str</code> | The name of the pool. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.accessRestrictions">access_restrictions</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a></code> | access_restrictions block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.description">description</a></code> | <code>str</code> | A user-specified description of the pool. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the pool is disabled. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#id IamWorkforcePool#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.sessionDuration">session_duration</a></code> | <code>str</code> | Duration that the Google Cloud access tokens, console sign-in sessions, and 'gcloud' sign-in sessions from this pool are valid. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts">IamWorkforcePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#location IamWorkforcePool#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.parent"></a>

- *Type:* str

Immutable. The resource name of the parent. Format: 'organizations/{org-id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#parent IamWorkforcePool#parent}

---

##### `workforce_pool_id`<sup>Required</sup> <a name="workforce_pool_id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.workforcePoolId"></a>

- *Type:* str

The name of the pool.

The ID must be a globally unique string of 6 to 63 lowercase letters,
digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#workforce_pool_id IamWorkforcePool#workforce_pool_id}

---

##### `access_restrictions`<sup>Optional</sup> <a name="access_restrictions" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.accessRestrictions"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a>

access_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#access_restrictions IamWorkforcePool#access_restrictions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.description"></a>

- *Type:* str

A user-specified description of the pool. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#description IamWorkforcePool#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the pool is disabled.

You cannot use a disabled pool to exchange tokens,
or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#disabled IamWorkforcePool#disabled}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.displayName"></a>

- *Type:* str

A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#display_name IamWorkforcePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#id IamWorkforcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.sessionDuration"></a>

- *Type:* str

Duration that the Google Cloud access tokens, console sign-in sessions, and 'gcloud' sign-in sessions from this pool are valid.

Must be greater than 15 minutes (900s) and less than 12 hours (43200s).
If 'sessionDuration' is not configured, minted credentials have a default duration of one hour (3600s).
A duration in seconds with up to nine fractional digits, ending with ''s''. Example: "'3.5s'".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#session_duration IamWorkforcePool#session_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts">IamWorkforcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#timeouts IamWorkforcePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putAccessRestrictions">put_access_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetAccessRestrictions">reset_access_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetSessionDuration">reset_session_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_restrictions` <a name="put_access_restrictions" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putAccessRestrictions"></a>

```python
def put_access_restrictions(
  allowed_services: typing.Union[IResolvable, typing.List[IamWorkforcePoolAccessRestrictionsAllowedServices]] = None,
  disable_programmatic_signin: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_services`<sup>Optional</sup> <a name="allowed_services" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putAccessRestrictions.parameter.allowedServices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices">IamWorkforcePoolAccessRestrictionsAllowedServices</a>]]

allowed_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#allowed_services IamWorkforcePool#allowed_services}

---

###### `disable_programmatic_signin`<sup>Optional</sup> <a name="disable_programmatic_signin" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putAccessRestrictions.parameter.disableProgrammaticSignin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable programmatic sign-in by disabling token issue via the Security Token API endpoint. See [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#disable_programmatic_signin IamWorkforcePool#disable_programmatic_signin}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#create IamWorkforcePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#delete IamWorkforcePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#update IamWorkforcePool#update}.

---

##### `reset_access_restrictions` <a name="reset_access_restrictions" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetAccessRestrictions"></a>

```python
def reset_access_restrictions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_session_duration` <a name="reset_session_duration" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetSessionDuration"></a>

```python
def reset_session_duration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IamWorkforcePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IamWorkforcePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamWorkforcePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamWorkforcePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkforcePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.accessRestrictions">access_restrictions</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference">IamWorkforcePoolAccessRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference">IamWorkforcePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.accessRestrictionsInput">access_restrictions_input</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.sessionDurationInput">session_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts">IamWorkforcePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.workforcePoolIdInput">workforce_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.sessionDuration">session_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.workforcePoolId">workforce_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_restrictions`<sup>Required</sup> <a name="access_restrictions" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.accessRestrictions"></a>

```python
access_restrictions: IamWorkforcePoolAccessRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference">IamWorkforcePoolAccessRestrictionsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.timeouts"></a>

```python
timeouts: IamWorkforcePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference">IamWorkforcePoolTimeoutsOutputReference</a>

---

##### `access_restrictions_input`<sup>Optional</sup> <a name="access_restrictions_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.accessRestrictionsInput"></a>

```python
access_restrictions_input: IamWorkforcePoolAccessRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `session_duration_input`<sup>Optional</sup> <a name="session_duration_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.sessionDurationInput"></a>

```python
session_duration_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IamWorkforcePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts">IamWorkforcePoolTimeouts</a>]

---

##### `workforce_pool_id_input`<sup>Optional</sup> <a name="workforce_pool_id_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.workforcePoolIdInput"></a>

```python
workforce_pool_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `session_duration`<sup>Required</sup> <a name="session_duration" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.sessionDuration"></a>

```python
session_duration: str
```

- *Type:* str

---

##### `workforce_pool_id`<sup>Required</sup> <a name="workforce_pool_id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.workforcePoolId"></a>

```python
workforce_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolAccessRestrictions <a name="IamWorkforcePoolAccessRestrictions" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePoolAccessRestrictions(
  allowed_services: typing.Union[IResolvable, typing.List[IamWorkforcePoolAccessRestrictionsAllowedServices]] = None,
  disable_programmatic_signin: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions.property.allowedServices">allowed_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices">IamWorkforcePoolAccessRestrictionsAllowedServices</a>]]</code> | allowed_services block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions.property.disableProgrammaticSignin">disable_programmatic_signin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable programmatic sign-in by disabling token issue via the Security Token API endpoint. See [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest). |

---

##### `allowed_services`<sup>Optional</sup> <a name="allowed_services" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions.property.allowedServices"></a>

```python
allowed_services: typing.Union[IResolvable, typing.List[IamWorkforcePoolAccessRestrictionsAllowedServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices">IamWorkforcePoolAccessRestrictionsAllowedServices</a>]]

allowed_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#allowed_services IamWorkforcePool#allowed_services}

---

##### `disable_programmatic_signin`<sup>Optional</sup> <a name="disable_programmatic_signin" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions.property.disableProgrammaticSignin"></a>

```python
disable_programmatic_signin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable programmatic sign-in by disabling token issue via the Security Token API endpoint. See [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#disable_programmatic_signin IamWorkforcePool#disable_programmatic_signin}

---

### IamWorkforcePoolAccessRestrictionsAllowedServices <a name="IamWorkforcePoolAccessRestrictionsAllowedServices" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices(
  domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices.property.domain">domain</a></code> | <code>str</code> | Domain name of the service. Example: console.cloud.google. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices.property.domain"></a>

```python
domain: str
```

- *Type:* str

Domain name of the service. Example: console.cloud.google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#domain IamWorkforcePool#domain}

---

### IamWorkforcePoolConfig <a name="IamWorkforcePoolConfig" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  parent: str,
  workforce_pool_id: str,
  access_restrictions: IamWorkforcePoolAccessRestrictions = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  session_duration: str = None,
  timeouts: IamWorkforcePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.parent">parent</a></code> | <code>str</code> | Immutable. The resource name of the parent. Format: 'organizations/{org-id}'. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.workforcePoolId">workforce_pool_id</a></code> | <code>str</code> | The name of the pool. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.accessRestrictions">access_restrictions</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a></code> | access_restrictions block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.description">description</a></code> | <code>str</code> | A user-specified description of the pool. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the pool is disabled. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.displayName">display_name</a></code> | <code>str</code> | A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#id IamWorkforcePool#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.sessionDuration">session_duration</a></code> | <code>str</code> | Duration that the Google Cloud access tokens, console sign-in sessions, and 'gcloud' sign-in sessions from this pool are valid. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts">IamWorkforcePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#location IamWorkforcePool#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Immutable. The resource name of the parent. Format: 'organizations/{org-id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#parent IamWorkforcePool#parent}

---

##### `workforce_pool_id`<sup>Required</sup> <a name="workforce_pool_id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.workforcePoolId"></a>

```python
workforce_pool_id: str
```

- *Type:* str

The name of the pool.

The ID must be a globally unique string of 6 to 63 lowercase letters,
digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#workforce_pool_id IamWorkforcePool#workforce_pool_id}

---

##### `access_restrictions`<sup>Optional</sup> <a name="access_restrictions" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.accessRestrictions"></a>

```python
access_restrictions: IamWorkforcePoolAccessRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a>

access_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#access_restrictions IamWorkforcePool#access_restrictions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A user-specified description of the pool. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#description IamWorkforcePool#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the pool is disabled.

You cannot use a disabled pool to exchange tokens,
or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#disabled IamWorkforcePool#disabled}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#display_name IamWorkforcePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#id IamWorkforcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.sessionDuration"></a>

```python
session_duration: str
```

- *Type:* str

Duration that the Google Cloud access tokens, console sign-in sessions, and 'gcloud' sign-in sessions from this pool are valid.

Must be greater than 15 minutes (900s) and less than 12 hours (43200s).
If 'sessionDuration' is not configured, minted credentials have a default duration of one hour (3600s).
A duration in seconds with up to nine fractional digits, ending with ''s''. Example: "'3.5s'".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#session_duration IamWorkforcePool#session_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.timeouts"></a>

```python
timeouts: IamWorkforcePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts">IamWorkforcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#timeouts IamWorkforcePool#timeouts}

---

### IamWorkforcePoolTimeouts <a name="IamWorkforcePoolTimeouts" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#create IamWorkforcePool#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#delete IamWorkforcePool#delete}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#update IamWorkforcePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#create IamWorkforcePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#delete IamWorkforcePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool#update IamWorkforcePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolAccessRestrictionsAllowedServicesList <a name="IamWorkforcePoolAccessRestrictionsAllowedServicesList" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices">IamWorkforcePoolAccessRestrictionsAllowedServices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IamWorkforcePoolAccessRestrictionsAllowedServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices">IamWorkforcePoolAccessRestrictionsAllowedServices</a>]]

---


### IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference <a name="IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resetDomain">reset_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices">IamWorkforcePoolAccessRestrictionsAllowedServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamWorkforcePoolAccessRestrictionsAllowedServices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices">IamWorkforcePoolAccessRestrictionsAllowedServices</a>]

---


### IamWorkforcePoolAccessRestrictionsOutputReference <a name="IamWorkforcePoolAccessRestrictionsOutputReference" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.putAllowedServices">put_allowed_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resetAllowedServices">reset_allowed_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resetDisableProgrammaticSignin">reset_disable_programmatic_signin</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowed_services` <a name="put_allowed_services" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.putAllowedServices"></a>

```python
def put_allowed_services(
  value: typing.Union[IResolvable, typing.List[IamWorkforcePoolAccessRestrictionsAllowedServices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.putAllowedServices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices">IamWorkforcePoolAccessRestrictionsAllowedServices</a>]]

---

##### `reset_allowed_services` <a name="reset_allowed_services" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resetAllowedServices"></a>

```python
def reset_allowed_services() -> None
```

##### `reset_disable_programmatic_signin` <a name="reset_disable_programmatic_signin" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resetDisableProgrammaticSignin"></a>

```python
def reset_disable_programmatic_signin() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.allowedServices">allowed_services</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList">IamWorkforcePoolAccessRestrictionsAllowedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.allowedServicesInput">allowed_services_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices">IamWorkforcePoolAccessRestrictionsAllowedServices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.disableProgrammaticSigninInput">disable_programmatic_signin_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.disableProgrammaticSignin">disable_programmatic_signin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_services`<sup>Required</sup> <a name="allowed_services" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.allowedServices"></a>

```python
allowed_services: IamWorkforcePoolAccessRestrictionsAllowedServicesList
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList">IamWorkforcePoolAccessRestrictionsAllowedServicesList</a>

---

##### `allowed_services_input`<sup>Optional</sup> <a name="allowed_services_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.allowedServicesInput"></a>

```python
allowed_services_input: typing.Union[IResolvable, typing.List[IamWorkforcePoolAccessRestrictionsAllowedServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices">IamWorkforcePoolAccessRestrictionsAllowedServices</a>]]

---

##### `disable_programmatic_signin_input`<sup>Optional</sup> <a name="disable_programmatic_signin_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.disableProgrammaticSigninInput"></a>

```python
disable_programmatic_signin_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_programmatic_signin`<sup>Required</sup> <a name="disable_programmatic_signin" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.disableProgrammaticSignin"></a>

```python
disable_programmatic_signin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: IamWorkforcePoolAccessRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a>

---


### IamWorkforcePoolTimeoutsOutputReference <a name="IamWorkforcePoolTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool

iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts">IamWorkforcePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamWorkforcePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts">IamWorkforcePoolTimeouts</a>]

---



