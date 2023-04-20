# `google_identity_platform_default_supported_idp_config`

Refer to the Terraform Registory for docs: [`google_identity_platform_default_supported_idp_config`](https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config).

# `identityPlatformDefaultSupportedIdpConfig` Submodule <a name="`identityPlatformDefaultSupportedIdpConfig` Submodule" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformDefaultSupportedIdpConfig <a name="IdentityPlatformDefaultSupportedIdpConfig" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config google_identity_platform_default_supported_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_default_supported_idp_config

identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_id: str,
  client_secret: str,
  idp_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: IdentityPlatformDefaultSupportedIdpConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | OAuth client ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | OAuth client secret. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.idpId">idp_id</a></code> | <code>str</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#id IdentityPlatformDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#project IdentityPlatformDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.clientId"></a>

- *Type:* str

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#client_id IdentityPlatformDefaultSupportedIdpConfig#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.clientSecret"></a>

- *Type:* str

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#client_secret IdentityPlatformDefaultSupportedIdpConfig#client_secret}

---

##### `idp_id`<sup>Required</sup> <a name="idp_id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.idpId"></a>

- *Type:* str

ID of the IDP. Possible values include:.

'apple.com'

'facebook.com'

'gc.apple.com'

'github.com'

'google.com'

'linkedin.com'

'microsoft.com'

'playgames.google.com'

'twitter.com'

'yahoo.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#idp_id IdentityPlatformDefaultSupportedIdpConfig#idp_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#enabled IdentityPlatformDefaultSupportedIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#id IdentityPlatformDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#project IdentityPlatformDefaultSupportedIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#timeouts IdentityPlatformDefaultSupportedIdpConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#create IdentityPlatformDefaultSupportedIdpConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#delete IdentityPlatformDefaultSupportedIdpConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#update IdentityPlatformDefaultSupportedIdpConfig#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_default_supported_idp_config

identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_default_supported_idp_config

identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_default_supported_idp_config

identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference">IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.idpIdInput">idp_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.idpId">idp_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.timeouts"></a>

```python
timeouts: IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference">IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_id_input`<sup>Optional</sup> <a name="idp_id_input" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.idpIdInput"></a>

```python
idp_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IdentityPlatformDefaultSupportedIdpConfigTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a>, cdktf.IResolvable]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_id`<sup>Required</sup> <a name="idp_id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.idpId"></a>

```python
idp_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformDefaultSupportedIdpConfigConfig <a name="IdentityPlatformDefaultSupportedIdpConfigConfig" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_default_supported_idp_config

identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_id: str,
  client_secret: str,
  idp_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: IdentityPlatformDefaultSupportedIdpConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.clientId">client_id</a></code> | <code>str</code> | OAuth client ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | OAuth client secret. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.idpId">idp_id</a></code> | <code>str</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#id IdentityPlatformDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#project IdentityPlatformDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#client_id IdentityPlatformDefaultSupportedIdpConfig#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#client_secret IdentityPlatformDefaultSupportedIdpConfig#client_secret}

---

##### `idp_id`<sup>Required</sup> <a name="idp_id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.idpId"></a>

```python
idp_id: str
```

- *Type:* str

ID of the IDP. Possible values include:.

'apple.com'

'facebook.com'

'gc.apple.com'

'github.com'

'google.com'

'linkedin.com'

'microsoft.com'

'playgames.google.com'

'twitter.com'

'yahoo.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#idp_id IdentityPlatformDefaultSupportedIdpConfig#idp_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#enabled IdentityPlatformDefaultSupportedIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#id IdentityPlatformDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#project IdentityPlatformDefaultSupportedIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.timeouts"></a>

```python
timeouts: IdentityPlatformDefaultSupportedIdpConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#timeouts IdentityPlatformDefaultSupportedIdpConfig#timeouts}

---

### IdentityPlatformDefaultSupportedIdpConfigTimeouts <a name="IdentityPlatformDefaultSupportedIdpConfigTimeouts" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_default_supported_idp_config

identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#create IdentityPlatformDefaultSupportedIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#delete IdentityPlatformDefaultSupportedIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#update IdentityPlatformDefaultSupportedIdpConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#create IdentityPlatformDefaultSupportedIdpConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#delete IdentityPlatformDefaultSupportedIdpConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/identity_platform_default_supported_idp_config#update IdentityPlatformDefaultSupportedIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference <a name="IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_default_supported_idp_config

identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IdentityPlatformDefaultSupportedIdpConfigTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a>, cdktf.IResolvable]

---



