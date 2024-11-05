# `identityPlatformInboundSamlConfig` Submodule <a name="`identityPlatformInboundSamlConfig` Submodule" id="@cdktf/provider-google.identityPlatformInboundSamlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformInboundSamlConfig <a name="IdentityPlatformInboundSamlConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config google_identity_platform_inbound_saml_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  idp_config: IdentityPlatformInboundSamlConfigIdpConfig,
  name: str,
  sp_config: IdentityPlatformInboundSamlConfigSpConfig,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: IdentityPlatformInboundSamlConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.idpConfig">idp_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.spConfig">sp_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#id IdentityPlatformInboundSamlConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#project IdentityPlatformInboundSamlConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.displayName"></a>

- *Type:* str

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#display_name IdentityPlatformInboundSamlConfig#display_name}

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#idp_config IdentityPlatformInboundSamlConfig#idp_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.name"></a>

- *Type:* str

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#name IdentityPlatformInboundSamlConfig#name}

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.spConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#sp_config IdentityPlatformInboundSamlConfig#sp_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#enabled IdentityPlatformInboundSamlConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#id IdentityPlatformInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#project IdentityPlatformInboundSamlConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#timeouts IdentityPlatformInboundSamlConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putIdpConfig">put_idp_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putSpConfig">put_sp_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_idp_config` <a name="put_idp_config" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putIdpConfig"></a>

```python
def put_idp_config(
  idp_certificates: typing.Union[IResolvable, typing.List[IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]],
  idp_entity_id: str,
  sso_url: str,
  sign_request: typing.Union[bool, IResolvable] = None
) -> None
```

###### `idp_certificates`<sup>Required</sup> <a name="idp_certificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putIdpConfig.parameter.idpCertificates"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]

idp_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#idp_certificates IdentityPlatformInboundSamlConfig#idp_certificates}

---

###### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putIdpConfig.parameter.idpEntityId"></a>

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#idp_entity_id IdentityPlatformInboundSamlConfig#idp_entity_id}

---

###### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putIdpConfig.parameter.ssoUrl"></a>

- *Type:* str

URL to send Authentication request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#sso_url IdentityPlatformInboundSamlConfig#sso_url}

---

###### `sign_request`<sup>Optional</sup> <a name="sign_request" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putIdpConfig.parameter.signRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if outbounding SAMLRequest should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#sign_request IdentityPlatformInboundSamlConfig#sign_request}

---

##### `put_sp_config` <a name="put_sp_config" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putSpConfig"></a>

```python
def put_sp_config(
  callback_uri: str = None,
  sp_entity_id: str = None
) -> None
```

###### `callback_uri`<sup>Optional</sup> <a name="callback_uri" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putSpConfig.parameter.callbackUri"></a>

- *Type:* str

Callback URI where responses from IDP are handled. Must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#callback_uri IdentityPlatformInboundSamlConfig#callback_uri}

---

###### `sp_entity_id`<sup>Optional</sup> <a name="sp_entity_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putSpConfig.parameter.spEntityId"></a>

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#sp_entity_id IdentityPlatformInboundSamlConfig#sp_entity_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#create IdentityPlatformInboundSamlConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#delete IdentityPlatformInboundSamlConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#update IdentityPlatformInboundSamlConfig#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityPlatformInboundSamlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityPlatformInboundSamlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityPlatformInboundSamlConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityPlatformInboundSamlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPlatformInboundSamlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference">IdentityPlatformInboundSamlConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.spConfig">sp_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference">IdentityPlatformInboundSamlConfigSpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference">IdentityPlatformInboundSamlConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idpConfigInput">idp_config_input</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.spConfigInput">sp_config_input</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idpConfig"></a>

```python
idp_config: IdentityPlatformInboundSamlConfigIdpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference">IdentityPlatformInboundSamlConfigIdpConfigOutputReference</a>

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.spConfig"></a>

```python
sp_config: IdentityPlatformInboundSamlConfigSpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference">IdentityPlatformInboundSamlConfigSpConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.timeouts"></a>

```python
timeouts: IdentityPlatformInboundSamlConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference">IdentityPlatformInboundSamlConfigTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_config_input`<sup>Optional</sup> <a name="idp_config_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idpConfigInput"></a>

```python
idp_config_input: IdentityPlatformInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `sp_config_input`<sup>Optional</sup> <a name="sp_config_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.spConfigInput"></a>

```python
sp_config_input: IdentityPlatformInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityPlatformInboundSamlConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformInboundSamlConfigConfig <a name="IdentityPlatformInboundSamlConfigConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  idp_config: IdentityPlatformInboundSamlConfigIdpConfig,
  name: str,
  sp_config: IdentityPlatformInboundSamlConfigSpConfig,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: IdentityPlatformInboundSamlConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.name">name</a></code> | <code>str</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.spConfig">sp_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#id IdentityPlatformInboundSamlConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#project IdentityPlatformInboundSamlConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#display_name IdentityPlatformInboundSamlConfig#display_name}

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.idpConfig"></a>

```python
idp_config: IdentityPlatformInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#idp_config IdentityPlatformInboundSamlConfig#idp_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#name IdentityPlatformInboundSamlConfig#name}

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.spConfig"></a>

```python
sp_config: IdentityPlatformInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#sp_config IdentityPlatformInboundSamlConfig#sp_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#enabled IdentityPlatformInboundSamlConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#id IdentityPlatformInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#project IdentityPlatformInboundSamlConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.timeouts"></a>

```python
timeouts: IdentityPlatformInboundSamlConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#timeouts IdentityPlatformInboundSamlConfig#timeouts}

---

### IdentityPlatformInboundSamlConfigIdpConfig <a name="IdentityPlatformInboundSamlConfigIdpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig(
  idp_certificates: typing.Union[IResolvable, typing.List[IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]],
  idp_entity_id: str,
  sso_url: str,
  sign_request: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.idpCertificates">idp_certificates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]</code> | idp_certificates block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.idpEntityId">idp_entity_id</a></code> | <code>str</code> | Unique identifier for all SAML entities. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.ssoUrl">sso_url</a></code> | <code>str</code> | URL to send Authentication request to. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.signRequest">sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if outbounding SAMLRequest should be signed. |

---

##### `idp_certificates`<sup>Required</sup> <a name="idp_certificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.idpCertificates"></a>

```python
idp_certificates: typing.Union[IResolvable, typing.List[IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]

idp_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#idp_certificates IdentityPlatformInboundSamlConfig#idp_certificates}

---

##### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.idpEntityId"></a>

```python
idp_entity_id: str
```

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#idp_entity_id IdentityPlatformInboundSamlConfig#idp_entity_id}

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

URL to send Authentication request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#sso_url IdentityPlatformInboundSamlConfig#sso_url}

---

##### `sign_request`<sup>Optional</sup> <a name="sign_request" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.signRequest"></a>

```python
sign_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if outbounding SAMLRequest should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#sign_request IdentityPlatformInboundSamlConfig#sign_request}

---

### IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates <a name="IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates(
  x509_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate">x509_certificate</a></code> | <code>str</code> | The IdP's x509 certificate. |

---

##### `x509_certificate`<sup>Optional</sup> <a name="x509_certificate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate"></a>

```python
x509_certificate: str
```

- *Type:* str

The IdP's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#x509_certificate IdentityPlatformInboundSamlConfig#x509_certificate}

---

### IdentityPlatformInboundSamlConfigSpConfig <a name="IdentityPlatformInboundSamlConfigSpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig(
  callback_uri: str = None,
  sp_entity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.property.callbackUri">callback_uri</a></code> | <code>str</code> | Callback URI where responses from IDP are handled. Must start with 'https://'. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.property.spEntityId">sp_entity_id</a></code> | <code>str</code> | Unique identifier for all SAML entities. |

---

##### `callback_uri`<sup>Optional</sup> <a name="callback_uri" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.property.callbackUri"></a>

```python
callback_uri: str
```

- *Type:* str

Callback URI where responses from IDP are handled. Must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#callback_uri IdentityPlatformInboundSamlConfig#callback_uri}

---

##### `sp_entity_id`<sup>Optional</sup> <a name="sp_entity_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.property.spEntityId"></a>

```python
sp_entity_id: str
```

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#sp_entity_id IdentityPlatformInboundSamlConfig#sp_entity_id}

---

### IdentityPlatformInboundSamlConfigSpConfigSpCertificates <a name="IdentityPlatformInboundSamlConfigSpConfigSpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates()
```


### IdentityPlatformInboundSamlConfigTimeouts <a name="IdentityPlatformInboundSamlConfigTimeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#create IdentityPlatformInboundSamlConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#delete IdentityPlatformInboundSamlConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#update IdentityPlatformInboundSamlConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#create IdentityPlatformInboundSamlConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#delete IdentityPlatformInboundSamlConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/identity_platform_inbound_saml_config#update IdentityPlatformInboundSamlConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList <a name="IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]

---


### IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference <a name="IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate">reset_x509_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x509_certificate` <a name="reset_x509_certificate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate"></a>

```python
def reset_x509_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput">x509_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate">x509_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x509_certificate_input`<sup>Optional</sup> <a name="x509_certificate_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput"></a>

```python
x509_certificate_input: str
```

- *Type:* str

---

##### `x509_certificate`<sup>Required</sup> <a name="x509_certificate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate"></a>

```python
x509_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]

---


### IdentityPlatformInboundSamlConfigIdpConfigOutputReference <a name="IdentityPlatformInboundSamlConfigIdpConfigOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates">put_idp_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resetSignRequest">reset_sign_request</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_idp_certificates` <a name="put_idp_certificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates"></a>

```python
def put_idp_certificates(
  value: typing.Union[IResolvable, typing.List[IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]

---

##### `reset_sign_request` <a name="reset_sign_request" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resetSignRequest"></a>

```python
def reset_sign_request() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificates">idp_certificates</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput">idp_certificates_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput">idp_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequestInput">sign_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput">sso_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityId">idp_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequest">sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrl">sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idp_certificates`<sup>Required</sup> <a name="idp_certificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificates"></a>

```python
idp_certificates: IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList</a>

---

##### `idp_certificates_input`<sup>Optional</sup> <a name="idp_certificates_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput"></a>

```python
idp_certificates_input: typing.Union[IResolvable, typing.List[IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]

---

##### `idp_entity_id_input`<sup>Optional</sup> <a name="idp_entity_id_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput"></a>

```python
idp_entity_id_input: str
```

- *Type:* str

---

##### `sign_request_input`<sup>Optional</sup> <a name="sign_request_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequestInput"></a>

```python
sign_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sso_url_input`<sup>Optional</sup> <a name="sso_url_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput"></a>

```python
sso_url_input: str
```

- *Type:* str

---

##### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityId"></a>

```python
idp_entity_id: str
```

- *Type:* str

---

##### `sign_request`<sup>Required</sup> <a name="sign_request" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequest"></a>

```python
sign_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.internalValue"></a>

```python
internal_value: IdentityPlatformInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

---


### IdentityPlatformInboundSamlConfigSpConfigOutputReference <a name="IdentityPlatformInboundSamlConfigSpConfigOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resetCallbackUri">reset_callback_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resetSpEntityId">reset_sp_entity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_callback_uri` <a name="reset_callback_uri" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resetCallbackUri"></a>

```python
def reset_callback_uri() -> None
```

##### `reset_sp_entity_id` <a name="reset_sp_entity_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resetSpEntityId"></a>

```python
def reset_sp_entity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spCertificates">sp_certificates</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList">IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUriInput">callback_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput">sp_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUri">callback_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityId">sp_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sp_certificates`<sup>Required</sup> <a name="sp_certificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spCertificates"></a>

```python
sp_certificates: IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList">IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList</a>

---

##### `callback_uri_input`<sup>Optional</sup> <a name="callback_uri_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUriInput"></a>

```python
callback_uri_input: str
```

- *Type:* str

---

##### `sp_entity_id_input`<sup>Optional</sup> <a name="sp_entity_id_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput"></a>

```python
sp_entity_id_input: str
```

- *Type:* str

---

##### `callback_uri`<sup>Required</sup> <a name="callback_uri" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUri"></a>

```python
callback_uri: str
```

- *Type:* str

---

##### `sp_entity_id`<sup>Required</sup> <a name="sp_entity_id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityId"></a>

```python
sp_entity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.internalValue"></a>

```python
internal_value: IdentityPlatformInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

---


### IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList <a name="IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference <a name="IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate">x509_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates">IdentityPlatformInboundSamlConfigSpConfigSpCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x509_certificate`<sup>Required</sup> <a name="x509_certificate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate"></a>

```python
x509_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: IdentityPlatformInboundSamlConfigSpConfigSpCertificates
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates">IdentityPlatformInboundSamlConfigSpConfigSpCertificates</a>

---


### IdentityPlatformInboundSamlConfigTimeoutsOutputReference <a name="IdentityPlatformInboundSamlConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_inbound_saml_config

identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityPlatformInboundSamlConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>]

---



