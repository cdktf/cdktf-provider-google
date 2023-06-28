# `google_os_login_ssh_public_key`

Refer to the Terraform Registory for docs: [`google_os_login_ssh_public_key`](https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key).

# `osLoginSshPublicKey` Submodule <a name="`osLoginSshPublicKey` Submodule" id="@cdktf/provider-google.osLoginSshPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsLoginSshPublicKey <a name="OsLoginSshPublicKey" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key google_os_login_ssh_public_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import os_login_ssh_public_key

osLoginSshPublicKey.OsLoginSshPublicKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  user: str,
  expiration_time_usec: str = None,
  id: str = None,
  project: str = None,
  timeouts: OsLoginSshPublicKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.key">key</a></code> | <code>str</code> | Public key text in SSH format, defined by RFC4253 section 6.6. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.user">user</a></code> | <code>str</code> | The user email. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.expirationTimeUsec">expiration_time_usec</a></code> | <code>str</code> | An expiration time in microseconds since epoch. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#id OsLoginSshPublicKey#id}. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.project">project</a></code> | <code>str</code> | The project ID of the Google Cloud Platform project. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.key"></a>

- *Type:* str

Public key text in SSH format, defined by RFC4253 section 6.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#key OsLoginSshPublicKey#key}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.user"></a>

- *Type:* str

The user email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#user OsLoginSshPublicKey#user}

---

##### `expiration_time_usec`<sup>Optional</sup> <a name="expiration_time_usec" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.expirationTimeUsec"></a>

- *Type:* str

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#expiration_time_usec OsLoginSshPublicKey#expiration_time_usec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#id OsLoginSshPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.project"></a>

- *Type:* str

The project ID of the Google Cloud Platform project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#project OsLoginSshPublicKey#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#timeouts OsLoginSshPublicKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetExpirationTimeUsec">reset_expiration_time_usec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#create OsLoginSshPublicKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#delete OsLoginSshPublicKey#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#update OsLoginSshPublicKey#update}.

---

##### `reset_expiration_time_usec` <a name="reset_expiration_time_usec" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetExpirationTimeUsec"></a>

```python
def reset_expiration_time_usec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import os_login_ssh_public_key

osLoginSshPublicKey.OsLoginSshPublicKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import os_login_ssh_public_key

osLoginSshPublicKey.OsLoginSshPublicKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import os_login_ssh_public_key

osLoginSshPublicKey.OsLoginSshPublicKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference">OsLoginSshPublicKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsecInput">expiration_time_usec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsec">expiration_time_usec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.user">user</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeouts"></a>

```python
timeouts: OsLoginSshPublicKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference">OsLoginSshPublicKeyTimeoutsOutputReference</a>

---

##### `expiration_time_usec_input`<sup>Optional</sup> <a name="expiration_time_usec_input" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsecInput"></a>

```python
expiration_time_usec_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsLoginSshPublicKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `expiration_time_usec`<sup>Required</sup> <a name="expiration_time_usec" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsec"></a>

```python
expiration_time_usec: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.user"></a>

```python
user: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsLoginSshPublicKeyConfig <a name="OsLoginSshPublicKeyConfig" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import os_login_ssh_public_key

osLoginSshPublicKey.OsLoginSshPublicKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  user: str,
  expiration_time_usec: str = None,
  id: str = None,
  project: str = None,
  timeouts: OsLoginSshPublicKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.key">key</a></code> | <code>str</code> | Public key text in SSH format, defined by RFC4253 section 6.6. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.user">user</a></code> | <code>str</code> | The user email. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.expirationTimeUsec">expiration_time_usec</a></code> | <code>str</code> | An expiration time in microseconds since epoch. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#id OsLoginSshPublicKey#id}. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.project">project</a></code> | <code>str</code> | The project ID of the Google Cloud Platform project. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Public key text in SSH format, defined by RFC4253 section 6.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#key OsLoginSshPublicKey#key}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.user"></a>

```python
user: str
```

- *Type:* str

The user email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#user OsLoginSshPublicKey#user}

---

##### `expiration_time_usec`<sup>Optional</sup> <a name="expiration_time_usec" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.expirationTimeUsec"></a>

```python
expiration_time_usec: str
```

- *Type:* str

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#expiration_time_usec OsLoginSshPublicKey#expiration_time_usec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#id OsLoginSshPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project ID of the Google Cloud Platform project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#project OsLoginSshPublicKey#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.timeouts"></a>

```python
timeouts: OsLoginSshPublicKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#timeouts OsLoginSshPublicKey#timeouts}

---

### OsLoginSshPublicKeyTimeouts <a name="OsLoginSshPublicKeyTimeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import os_login_ssh_public_key

osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#create OsLoginSshPublicKey#create}. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#delete OsLoginSshPublicKey#delete}. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#update OsLoginSshPublicKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#create OsLoginSshPublicKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#delete OsLoginSshPublicKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/os_login_ssh_public_key#update OsLoginSshPublicKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsLoginSshPublicKeyTimeoutsOutputReference <a name="OsLoginSshPublicKeyTimeoutsOutputReference" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import os_login_ssh_public_key

osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsLoginSshPublicKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>]

---



