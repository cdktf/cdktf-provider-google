# `google_identity_platform_tenant_inbound_saml_config`

Refer to the Terraform Registory for docs: [`google_identity_platform_tenant_inbound_saml_config`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config).

# `identityPlatformTenantInboundSamlConfig` Submodule <a name="`identityPlatformTenantInboundSamlConfig` Submodule" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformTenantInboundSamlConfig <a name="IdentityPlatformTenantInboundSamlConfig" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config google_identity_platform_tenant_inbound_saml_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig(
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
  idp_config: IdentityPlatformTenantInboundSamlConfigIdpConfig,
  name: str,
  sp_config: IdentityPlatformTenantInboundSamlConfigSpConfig,
  tenant: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: IdentityPlatformTenantInboundSamlConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.idpConfig">idp_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig">IdentityPlatformTenantInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.spConfig">sp_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig">IdentityPlatformTenantInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.tenant">tenant</a></code> | <code>str</code> | The name of the tenant where this inbound SAML config resource exists. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#id IdentityPlatformTenantInboundSamlConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#project IdentityPlatformTenantInboundSamlConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts">IdentityPlatformTenantInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.displayName"></a>

- *Type:* str

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#display_name IdentityPlatformTenantInboundSamlConfig#display_name}

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig">IdentityPlatformTenantInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#idp_config IdentityPlatformTenantInboundSamlConfig#idp_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.name"></a>

- *Type:* str

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#name IdentityPlatformTenantInboundSamlConfig#name}

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.spConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig">IdentityPlatformTenantInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#sp_config IdentityPlatformTenantInboundSamlConfig#sp_config}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.tenant"></a>

- *Type:* str

The name of the tenant where this inbound SAML config resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#tenant IdentityPlatformTenantInboundSamlConfig#tenant}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#enabled IdentityPlatformTenantInboundSamlConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#id IdentityPlatformTenantInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#project IdentityPlatformTenantInboundSamlConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts">IdentityPlatformTenantInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#timeouts IdentityPlatformTenantInboundSamlConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putIdpConfig">put_idp_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putSpConfig">put_sp_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_idp_config` <a name="put_idp_config" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putIdpConfig"></a>

```python
def put_idp_config(
  idp_certificates: typing.Union[IResolvable, typing.List[IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]],
  idp_entity_id: str,
  sso_url: str,
  sign_request: typing.Union[bool, IResolvable] = None
) -> None
```

###### `idp_certificates`<sup>Required</sup> <a name="idp_certificates" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putIdpConfig.parameter.idpCertificates"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]

idp_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#idp_certificates IdentityPlatformTenantInboundSamlConfig#idp_certificates}

---

###### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putIdpConfig.parameter.idpEntityId"></a>

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#idp_entity_id IdentityPlatformTenantInboundSamlConfig#idp_entity_id}

---

###### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putIdpConfig.parameter.ssoUrl"></a>

- *Type:* str

URL to send Authentication request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#sso_url IdentityPlatformTenantInboundSamlConfig#sso_url}

---

###### `sign_request`<sup>Optional</sup> <a name="sign_request" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putIdpConfig.parameter.signRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if outbounding SAMLRequest should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#sign_request IdentityPlatformTenantInboundSamlConfig#sign_request}

---

##### `put_sp_config` <a name="put_sp_config" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putSpConfig"></a>

```python
def put_sp_config(
  callback_uri: str,
  sp_entity_id: str
) -> None
```

###### `callback_uri`<sup>Required</sup> <a name="callback_uri" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putSpConfig.parameter.callbackUri"></a>

- *Type:* str

Callback URI where responses from IDP are handled. Must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#callback_uri IdentityPlatformTenantInboundSamlConfig#callback_uri}

---

###### `sp_entity_id`<sup>Required</sup> <a name="sp_entity_id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putSpConfig.parameter.spEntityId"></a>

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#sp_entity_id IdentityPlatformTenantInboundSamlConfig#sp_entity_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#create IdentityPlatformTenantInboundSamlConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#delete IdentityPlatformTenantInboundSamlConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#update IdentityPlatformTenantInboundSamlConfig#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference">IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.spConfig">sp_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference">IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference">IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.idpConfigInput">idp_config_input</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig">IdentityPlatformTenantInboundSamlConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.spConfigInput">sp_config_input</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig">IdentityPlatformTenantInboundSamlConfigSpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.tenantInput">tenant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts">IdentityPlatformTenantInboundSamlConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.tenant">tenant</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.idpConfig"></a>

```python
idp_config: IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference">IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference</a>

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.spConfig"></a>

```python
sp_config: IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference">IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.timeouts"></a>

```python
timeouts: IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference">IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_config_input`<sup>Optional</sup> <a name="idp_config_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.idpConfigInput"></a>

```python
idp_config_input: IdentityPlatformTenantInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig">IdentityPlatformTenantInboundSamlConfigIdpConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `sp_config_input`<sup>Optional</sup> <a name="sp_config_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.spConfigInput"></a>

```python
sp_config_input: IdentityPlatformTenantInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig">IdentityPlatformTenantInboundSamlConfigSpConfig</a>

---

##### `tenant_input`<sup>Optional</sup> <a name="tenant_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.tenantInput"></a>

```python
tenant_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityPlatformTenantInboundSamlConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts">IdentityPlatformTenantInboundSamlConfigTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformTenantInboundSamlConfigConfig <a name="IdentityPlatformTenantInboundSamlConfigConfig" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  idp_config: IdentityPlatformTenantInboundSamlConfigIdpConfig,
  name: str,
  sp_config: IdentityPlatformTenantInboundSamlConfigSpConfig,
  tenant: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: IdentityPlatformTenantInboundSamlConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig">IdentityPlatformTenantInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.name">name</a></code> | <code>str</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.spConfig">sp_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig">IdentityPlatformTenantInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.tenant">tenant</a></code> | <code>str</code> | The name of the tenant where this inbound SAML config resource exists. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#id IdentityPlatformTenantInboundSamlConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#project IdentityPlatformTenantInboundSamlConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts">IdentityPlatformTenantInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#display_name IdentityPlatformTenantInboundSamlConfig#display_name}

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.idpConfig"></a>

```python
idp_config: IdentityPlatformTenantInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig">IdentityPlatformTenantInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#idp_config IdentityPlatformTenantInboundSamlConfig#idp_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#name IdentityPlatformTenantInboundSamlConfig#name}

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.spConfig"></a>

```python
sp_config: IdentityPlatformTenantInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig">IdentityPlatformTenantInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#sp_config IdentityPlatformTenantInboundSamlConfig#sp_config}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

The name of the tenant where this inbound SAML config resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#tenant IdentityPlatformTenantInboundSamlConfig#tenant}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#enabled IdentityPlatformTenantInboundSamlConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#id IdentityPlatformTenantInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#project IdentityPlatformTenantInboundSamlConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigConfig.property.timeouts"></a>

```python
timeouts: IdentityPlatformTenantInboundSamlConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts">IdentityPlatformTenantInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#timeouts IdentityPlatformTenantInboundSamlConfig#timeouts}

---

### IdentityPlatformTenantInboundSamlConfigIdpConfig <a name="IdentityPlatformTenantInboundSamlConfigIdpConfig" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig(
  idp_certificates: typing.Union[IResolvable, typing.List[IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]],
  idp_entity_id: str,
  sso_url: str,
  sign_request: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig.property.idpCertificates">idp_certificates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]</code> | idp_certificates block. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig.property.idpEntityId">idp_entity_id</a></code> | <code>str</code> | Unique identifier for all SAML entities. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig.property.ssoUrl">sso_url</a></code> | <code>str</code> | URL to send Authentication request to. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig.property.signRequest">sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if outbounding SAMLRequest should be signed. |

---

##### `idp_certificates`<sup>Required</sup> <a name="idp_certificates" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig.property.idpCertificates"></a>

```python
idp_certificates: typing.Union[IResolvable, typing.List[IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]

idp_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#idp_certificates IdentityPlatformTenantInboundSamlConfig#idp_certificates}

---

##### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig.property.idpEntityId"></a>

```python
idp_entity_id: str
```

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#idp_entity_id IdentityPlatformTenantInboundSamlConfig#idp_entity_id}

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

URL to send Authentication request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#sso_url IdentityPlatformTenantInboundSamlConfig#sso_url}

---

##### `sign_request`<sup>Optional</sup> <a name="sign_request" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig.property.signRequest"></a>

```python
sign_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if outbounding SAMLRequest should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#sign_request IdentityPlatformTenantInboundSamlConfig#sign_request}

---

### IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates <a name="IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates(
  x509_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate">x509_certificate</a></code> | <code>str</code> | The x509 certificate. |

---

##### `x509_certificate`<sup>Optional</sup> <a name="x509_certificate" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate"></a>

```python
x509_certificate: str
```

- *Type:* str

The x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#x509_certificate IdentityPlatformTenantInboundSamlConfig#x509_certificate}

---

### IdentityPlatformTenantInboundSamlConfigSpConfig <a name="IdentityPlatformTenantInboundSamlConfigSpConfig" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig(
  callback_uri: str,
  sp_entity_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig.property.callbackUri">callback_uri</a></code> | <code>str</code> | Callback URI where responses from IDP are handled. Must start with 'https://'. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig.property.spEntityId">sp_entity_id</a></code> | <code>str</code> | Unique identifier for all SAML entities. |

---

##### `callback_uri`<sup>Required</sup> <a name="callback_uri" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig.property.callbackUri"></a>

```python
callback_uri: str
```

- *Type:* str

Callback URI where responses from IDP are handled. Must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#callback_uri IdentityPlatformTenantInboundSamlConfig#callback_uri}

---

##### `sp_entity_id`<sup>Required</sup> <a name="sp_entity_id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig.property.spEntityId"></a>

```python
sp_entity_id: str
```

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#sp_entity_id IdentityPlatformTenantInboundSamlConfig#sp_entity_id}

---

### IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates <a name="IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates()
```


### IdentityPlatformTenantInboundSamlConfigTimeouts <a name="IdentityPlatformTenantInboundSamlConfigTimeouts" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#create IdentityPlatformTenantInboundSamlConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#delete IdentityPlatformTenantInboundSamlConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#update IdentityPlatformTenantInboundSamlConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#create IdentityPlatformTenantInboundSamlConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#delete IdentityPlatformTenantInboundSamlConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant_inbound_saml_config#update IdentityPlatformTenantInboundSamlConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList <a name="IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]

---


### IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference <a name="IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate">reset_x509_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x509_certificate` <a name="reset_x509_certificate" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate"></a>

```python
def reset_x509_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput">x509_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate">x509_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x509_certificate_input`<sup>Optional</sup> <a name="x509_certificate_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput"></a>

```python
x509_certificate_input: str
```

- *Type:* str

---

##### `x509_certificate`<sup>Required</sup> <a name="x509_certificate" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate"></a>

```python
x509_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]

---


### IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference <a name="IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.putIdpCertificates">put_idp_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resetSignRequest">reset_sign_request</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_idp_certificates` <a name="put_idp_certificates" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.putIdpCertificates"></a>

```python
def put_idp_certificates(
  value: typing.Union[IResolvable, typing.List[IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.putIdpCertificates.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]

---

##### `reset_sign_request` <a name="reset_sign_request" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resetSignRequest"></a>

```python
def reset_sign_request() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpCertificates">idp_certificates</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList">IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput">idp_certificates_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput">idp_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.signRequestInput">sign_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput">sso_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpEntityId">idp_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.signRequest">sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.ssoUrl">sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig">IdentityPlatformTenantInboundSamlConfigIdpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idp_certificates`<sup>Required</sup> <a name="idp_certificates" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpCertificates"></a>

```python
idp_certificates: IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList">IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList</a>

---

##### `idp_certificates_input`<sup>Optional</sup> <a name="idp_certificates_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput"></a>

```python
idp_certificates_input: typing.Union[IResolvable, typing.List[IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]

---

##### `idp_entity_id_input`<sup>Optional</sup> <a name="idp_entity_id_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput"></a>

```python
idp_entity_id_input: str
```

- *Type:* str

---

##### `sign_request_input`<sup>Optional</sup> <a name="sign_request_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.signRequestInput"></a>

```python
sign_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sso_url_input`<sup>Optional</sup> <a name="sso_url_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput"></a>

```python
sso_url_input: str
```

- *Type:* str

---

##### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpEntityId"></a>

```python
idp_entity_id: str
```

- *Type:* str

---

##### `sign_request`<sup>Required</sup> <a name="sign_request" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.signRequest"></a>

```python
sign_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.internalValue"></a>

```python
internal_value: IdentityPlatformTenantInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigIdpConfig">IdentityPlatformTenantInboundSamlConfigIdpConfig</a>

---


### IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference <a name="IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spCertificates">sp_certificates</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList">IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.callbackUriInput">callback_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput">sp_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.callbackUri">callback_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spEntityId">sp_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig">IdentityPlatformTenantInboundSamlConfigSpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sp_certificates`<sup>Required</sup> <a name="sp_certificates" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spCertificates"></a>

```python
sp_certificates: IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList">IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList</a>

---

##### `callback_uri_input`<sup>Optional</sup> <a name="callback_uri_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.callbackUriInput"></a>

```python
callback_uri_input: str
```

- *Type:* str

---

##### `sp_entity_id_input`<sup>Optional</sup> <a name="sp_entity_id_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput"></a>

```python
sp_entity_id_input: str
```

- *Type:* str

---

##### `callback_uri`<sup>Required</sup> <a name="callback_uri" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.callbackUri"></a>

```python
callback_uri: str
```

- *Type:* str

---

##### `sp_entity_id`<sup>Required</sup> <a name="sp_entity_id" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spEntityId"></a>

```python
sp_entity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.internalValue"></a>

```python
internal_value: IdentityPlatformTenantInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfig">IdentityPlatformTenantInboundSamlConfigSpConfig</a>

---


### IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList <a name="IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference <a name="IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate">x509_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates">IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x509_certificate`<sup>Required</sup> <a name="x509_certificate" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate"></a>

```python
x509_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates">IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates</a>

---


### IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference <a name="IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_tenant_inbound_saml_config

identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts">IdentityPlatformTenantInboundSamlConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityPlatformTenantInboundSamlConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformTenantInboundSamlConfig.IdentityPlatformTenantInboundSamlConfigTimeouts">IdentityPlatformTenantInboundSamlConfigTimeouts</a>]

---



