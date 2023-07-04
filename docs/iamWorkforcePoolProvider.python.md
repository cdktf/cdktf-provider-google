# `google_iam_workforce_pool_provider`

Refer to the Terraform Registory for docs: [`google_iam_workforce_pool_provider`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider).

# `iamWorkforcePoolProvider` Submodule <a name="`iamWorkforcePoolProvider` Submodule" id="@cdktf/provider-google.iamWorkforcePoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolProvider <a name="IamWorkforcePoolProvider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider google_iam_workforce_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProvider(
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
  provider_id: str,
  workforce_pool_id: str,
  attribute_condition: str = None,
  attribute_mapping: typing.Mapping[str] = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  oidc: IamWorkforcePoolProviderOidc = None,
  saml: IamWorkforcePoolProviderSaml = None,
  timeouts: IamWorkforcePoolProviderTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.providerId">provider_id</a></code> | <code>str</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.workforcePoolId">workforce_pool_id</a></code> | <code>str</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.attributeCondition">attribute_condition</a></code> | <code>str</code> | A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.attributeMapping">attribute_mapping</a></code> | <code>typing.Mapping[str]</code> | Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.description">description</a></code> | <code>str</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A user-specified display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#location IamWorkforcePoolProvider#location}

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.providerId"></a>

- *Type:* str

The ID for the provider, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#provider_id IamWorkforcePoolProvider#provider_id}

---

##### `workforce_pool_id`<sup>Required</sup> <a name="workforce_pool_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.workforcePoolId"></a>

- *Type:* str

The ID to use for the pool, which becomes the final component of the resource name.

The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.
It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#workforce_pool_id IamWorkforcePoolProvider#workforce_pool_id}

---

##### `attribute_condition`<sup>Optional</sup> <a name="attribute_condition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.attributeCondition"></a>

- *Type:* str

A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:
'assertion': JSON representing the authentication credential issued by the provider.
'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
'google.profile_photo' and 'google.display_name' are not supported.
'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters.
If unspecified, all valid authentication credentials will be accepted.

The following example shows how to only allow credentials with a mapped 'google.groups' value of 'admins':

```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#attribute_condition IamWorkforcePoolProvider#attribute_condition}

---

##### `attribute_mapping`<sup>Optional</sup> <a name="attribute_mapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.attributeMapping"></a>

- *Type:* typing.Mapping[str]

Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:
'google.subject': The principal IAM is authenticating. You can reference this value in IAM bindings.
This is also the subject that appears in Cloud Logging logs. This is a required field and
the mapped subject cannot exceed 127 bytes.
'google.groups': Groups the authenticating user belongs to. You can grant groups access to
resources using an IAM 'principalSet' binding; access applies to all members of the group.
'google.display_name': The name of the authenticated user. This is an optional field and
the mapped display name cannot exceed 100 bytes. If not set, 'google.subject' will be displayed instead.
This attribute cannot be referenced in IAM bindings.
'google.profile_photo': The URL that specifies the authenticated user's thumbnail photo.
This is an optional field. When set, the image will be visible as the user's profile picture.
If not set, a generic user icon will be displayed instead.
This attribute cannot be referenced in IAM bindings.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}', where {custom_attribute}
is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.
The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a workforce pool
to Google Cloud resources. For example:
'google.subject':
'principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}'
'google.groups':
'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}'
'attribute.{custom_attribute}':
'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For OIDC providers, you must supply a custom mapping that includes the 'google.subject' attribute.
For example, the following maps the sub claim of the incoming credential to the 'subject' attribute
on a Google token:

```
{"google.subject": "assertion.sub"}
```

An object containing a list of '"key": value' pairs.
Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#attribute_mapping IamWorkforcePoolProvider#attribute_mapping}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.description"></a>

- *Type:* str

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#description IamWorkforcePoolProvider#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#disabled IamWorkforcePoolProvider#disabled}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.displayName"></a>

- *Type:* str

A user-specified display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#display_name IamWorkforcePoolProvider#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.oidc"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#oidc IamWorkforcePoolProvider#oidc}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.saml"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#saml IamWorkforcePoolProvider#saml}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#timeouts IamWorkforcePoolProvider#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc">put_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putSaml">put_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeCondition">reset_attribute_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeMapping">reset_attribute_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOidc">reset_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetSaml">reset_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_oidc` <a name="put_oidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc"></a>

```python
def put_oidc(
  client_id: str,
  issuer_uri: str,
  web_sso_config: IamWorkforcePoolProviderOidcWebSsoConfig = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc.parameter.clientId"></a>

- *Type:* str

The client ID. Must match the audience claim of the JWT issued by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#client_id IamWorkforcePoolProvider#client_id}

---

###### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc.parameter.issuerUri"></a>

- *Type:* str

The OIDC issuer URI. Must be a valid URI using the 'https' scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#issuer_uri IamWorkforcePoolProvider#issuer_uri}

---

###### `web_sso_config`<sup>Optional</sup> <a name="web_sso_config" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc.parameter.webSsoConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

web_sso_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#web_sso_config IamWorkforcePoolProvider#web_sso_config}

---

##### `put_saml` <a name="put_saml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putSaml"></a>

```python
def put_saml(
  idp_metadata_xml: str
) -> None
```

###### `idp_metadata_xml`<sup>Required</sup> <a name="idp_metadata_xml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putSaml.parameter.idpMetadataXml"></a>

- *Type:* str

SAML Identity provider configuration metadata xml doc.

The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).
The max size of the acceptable xml document will be bounded to 128k characters.

The metadata xml document should satisfy the following constraints:

1) Must contain an Identity Provider Entity ID.
2) Must contain at least one non-expired signing key certificate.
3) For each signing key:
   a) Valid from should be no more than 7 days from now.
   b) Valid to should be no more than 10 years in the future.
4) Up to 3 IdP signing keys are allowed in the metadata xml.

When updating the provider's metadata xml, at least one non-expired signing key
must overlap with the existing metadata. This requirement is skipped if there are
no non-expired signing keys present in the existing metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#idp_metadata_xml IamWorkforcePoolProvider#idp_metadata_xml}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#create IamWorkforcePoolProvider#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#delete IamWorkforcePoolProvider#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#update IamWorkforcePoolProvider#update}.

---

##### `reset_attribute_condition` <a name="reset_attribute_condition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeCondition"></a>

```python
def reset_attribute_condition() -> None
```

##### `reset_attribute_mapping` <a name="reset_attribute_mapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeMapping"></a>

```python
def reset_attribute_mapping() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_oidc` <a name="reset_oidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOidc"></a>

```python
def reset_oidc() -> None
```

##### `reset_saml` <a name="reset_saml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetSaml"></a>

```python
def reset_saml() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference">IamWorkforcePoolProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference">IamWorkforcePoolProviderSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference">IamWorkforcePoolProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeConditionInput">attribute_condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMappingInput">attribute_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidcInput">oidc_input</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerIdInput">provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.samlInput">saml_input</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolIdInput">workforce_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeCondition">attribute_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMapping">attribute_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerId">provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolId">workforce_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidc"></a>

```python
oidc: IamWorkforcePoolProviderOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference">IamWorkforcePoolProviderOidcOutputReference</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.saml"></a>

```python
saml: IamWorkforcePoolProviderSamlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference">IamWorkforcePoolProviderSamlOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeouts"></a>

```python
timeouts: IamWorkforcePoolProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference">IamWorkforcePoolProviderTimeoutsOutputReference</a>

---

##### `attribute_condition_input`<sup>Optional</sup> <a name="attribute_condition_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeConditionInput"></a>

```python
attribute_condition_input: str
```

- *Type:* str

---

##### `attribute_mapping_input`<sup>Optional</sup> <a name="attribute_mapping_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMappingInput"></a>

```python
attribute_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `oidc_input`<sup>Optional</sup> <a name="oidc_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidcInput"></a>

```python
oidc_input: IamWorkforcePoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

---

##### `provider_id_input`<sup>Optional</sup> <a name="provider_id_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerIdInput"></a>

```python
provider_id_input: str
```

- *Type:* str

---

##### `saml_input`<sup>Optional</sup> <a name="saml_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.samlInput"></a>

```python
saml_input: IamWorkforcePoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IamWorkforcePoolProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>]

---

##### `workforce_pool_id_input`<sup>Optional</sup> <a name="workforce_pool_id_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolIdInput"></a>

```python
workforce_pool_id_input: str
```

- *Type:* str

---

##### `attribute_condition`<sup>Required</sup> <a name="attribute_condition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeCondition"></a>

```python
attribute_condition: str
```

- *Type:* str

---

##### `attribute_mapping`<sup>Required</sup> <a name="attribute_mapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMapping"></a>

```python
attribute_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

---

##### `workforce_pool_id`<sup>Required</sup> <a name="workforce_pool_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolId"></a>

```python
workforce_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolProviderConfig <a name="IamWorkforcePoolProviderConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  provider_id: str,
  workforce_pool_id: str,
  attribute_condition: str = None,
  attribute_mapping: typing.Mapping[str] = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  oidc: IamWorkforcePoolProviderOidc = None,
  saml: IamWorkforcePoolProviderSaml = None,
  timeouts: IamWorkforcePoolProviderTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.providerId">provider_id</a></code> | <code>str</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.workforcePoolId">workforce_pool_id</a></code> | <code>str</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeCondition">attribute_condition</a></code> | <code>str</code> | A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeMapping">attribute_mapping</a></code> | <code>typing.Mapping[str]</code> | Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.description">description</a></code> | <code>str</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.displayName">display_name</a></code> | <code>str</code> | A user-specified display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#location IamWorkforcePoolProvider#location}

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

The ID for the provider, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#provider_id IamWorkforcePoolProvider#provider_id}

---

##### `workforce_pool_id`<sup>Required</sup> <a name="workforce_pool_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.workforcePoolId"></a>

```python
workforce_pool_id: str
```

- *Type:* str

The ID to use for the pool, which becomes the final component of the resource name.

The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.
It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#workforce_pool_id IamWorkforcePoolProvider#workforce_pool_id}

---

##### `attribute_condition`<sup>Optional</sup> <a name="attribute_condition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeCondition"></a>

```python
attribute_condition: str
```

- *Type:* str

A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:
'assertion': JSON representing the authentication credential issued by the provider.
'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
'google.profile_photo' and 'google.display_name' are not supported.
'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters.
If unspecified, all valid authentication credentials will be accepted.

The following example shows how to only allow credentials with a mapped 'google.groups' value of 'admins':

```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#attribute_condition IamWorkforcePoolProvider#attribute_condition}

---

##### `attribute_mapping`<sup>Optional</sup> <a name="attribute_mapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeMapping"></a>

```python
attribute_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:
'google.subject': The principal IAM is authenticating. You can reference this value in IAM bindings.
This is also the subject that appears in Cloud Logging logs. This is a required field and
the mapped subject cannot exceed 127 bytes.
'google.groups': Groups the authenticating user belongs to. You can grant groups access to
resources using an IAM 'principalSet' binding; access applies to all members of the group.
'google.display_name': The name of the authenticated user. This is an optional field and
the mapped display name cannot exceed 100 bytes. If not set, 'google.subject' will be displayed instead.
This attribute cannot be referenced in IAM bindings.
'google.profile_photo': The URL that specifies the authenticated user's thumbnail photo.
This is an optional field. When set, the image will be visible as the user's profile picture.
If not set, a generic user icon will be displayed instead.
This attribute cannot be referenced in IAM bindings.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}', where {custom_attribute}
is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.
The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a workforce pool
to Google Cloud resources. For example:
'google.subject':
'principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}'
'google.groups':
'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}'
'attribute.{custom_attribute}':
'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For OIDC providers, you must supply a custom mapping that includes the 'google.subject' attribute.
For example, the following maps the sub claim of the incoming credential to the 'subject' attribute
on a Google token:

```
{"google.subject": "assertion.sub"}
```

An object containing a list of '"key": value' pairs.
Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#attribute_mapping IamWorkforcePoolProvider#attribute_mapping}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#description IamWorkforcePoolProvider#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#disabled IamWorkforcePoolProvider#disabled}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A user-specified display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#display_name IamWorkforcePoolProvider#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.oidc"></a>

```python
oidc: IamWorkforcePoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#oidc IamWorkforcePoolProvider#oidc}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.saml"></a>

```python
saml: IamWorkforcePoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#saml IamWorkforcePoolProvider#saml}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.timeouts"></a>

```python
timeouts: IamWorkforcePoolProviderTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#timeouts IamWorkforcePoolProvider#timeouts}

---

### IamWorkforcePoolProviderOidc <a name="IamWorkforcePoolProviderOidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc(
  client_id: str,
  issuer_uri: str,
  web_sso_config: IamWorkforcePoolProviderOidcWebSsoConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientId">client_id</a></code> | <code>str</code> | The client ID. Must match the audience claim of the JWT issued by the identity provider. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.issuerUri">issuer_uri</a></code> | <code>str</code> | The OIDC issuer URI. Must be a valid URI using the 'https' scheme. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.webSsoConfig">web_sso_config</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a></code> | web_sso_config block. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID. Must match the audience claim of the JWT issued by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#client_id IamWorkforcePoolProvider#client_id}

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

The OIDC issuer URI. Must be a valid URI using the 'https' scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#issuer_uri IamWorkforcePoolProvider#issuer_uri}

---

##### `web_sso_config`<sup>Optional</sup> <a name="web_sso_config" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.webSsoConfig"></a>

```python
web_sso_config: IamWorkforcePoolProviderOidcWebSsoConfig
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

web_sso_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#web_sso_config IamWorkforcePoolProvider#web_sso_config}

---

### IamWorkforcePoolProviderOidcWebSsoConfig <a name="IamWorkforcePoolProviderOidcWebSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig(
  assertion_claims_behavior: str,
  response_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.assertionClaimsBehavior">assertion_claims_behavior</a></code> | <code>str</code> | The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.responseType">response_type</a></code> | <code>str</code> | The Response Type to request for in the OIDC Authorization Request for web sign-in. |

---

##### `assertion_claims_behavior`<sup>Required</sup> <a name="assertion_claims_behavior" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.assertionClaimsBehavior"></a>

```python
assertion_claims_behavior: str
```

- *Type:* str

The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition.

ONLY_ID_TOKEN_CLAIMS: Only include ID Token Claims. Possible values: ["ONLY_ID_TOKEN_CLAIMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#assertion_claims_behavior IamWorkforcePoolProvider#assertion_claims_behavior}

---

##### `response_type`<sup>Required</sup> <a name="response_type" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.responseType"></a>

```python
response_type: str
```

- *Type:* str

The Response Type to request for in the OIDC Authorization Request for web sign-in.

ID_TOKEN: The 'response_type=id_token' selection uses the Implicit Flow for web sign-in. Possible values: ["ID_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#response_type IamWorkforcePoolProvider#response_type}

---

### IamWorkforcePoolProviderSaml <a name="IamWorkforcePoolProviderSaml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml(
  idp_metadata_xml: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml.property.idpMetadataXml">idp_metadata_xml</a></code> | <code>str</code> | SAML Identity provider configuration metadata xml doc. |

---

##### `idp_metadata_xml`<sup>Required</sup> <a name="idp_metadata_xml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml.property.idpMetadataXml"></a>

```python
idp_metadata_xml: str
```

- *Type:* str

SAML Identity provider configuration metadata xml doc.

The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).
The max size of the acceptable xml document will be bounded to 128k characters.

The metadata xml document should satisfy the following constraints:

1) Must contain an Identity Provider Entity ID.
2) Must contain at least one non-expired signing key certificate.
3) For each signing key:
   a) Valid from should be no more than 7 days from now.
   b) Valid to should be no more than 10 years in the future.
4) Up to 3 IdP signing keys are allowed in the metadata xml.

When updating the provider's metadata xml, at least one non-expired signing key
must overlap with the existing metadata. This requirement is skipped if there are
no non-expired signing keys present in the existing metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#idp_metadata_xml IamWorkforcePoolProvider#idp_metadata_xml}

---

### IamWorkforcePoolProviderTimeouts <a name="IamWorkforcePoolProviderTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#create IamWorkforcePoolProvider#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#delete IamWorkforcePoolProvider#delete}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#update IamWorkforcePoolProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#create IamWorkforcePoolProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#delete IamWorkforcePoolProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#update IamWorkforcePoolProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolProviderOidcOutputReference <a name="IamWorkforcePoolProviderOidcOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig">put_web_sso_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetWebSsoConfig">reset_web_sso_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_web_sso_config` <a name="put_web_sso_config" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig"></a>

```python
def put_web_sso_config(
  assertion_claims_behavior: str,
  response_type: str
) -> None
```

###### `assertion_claims_behavior`<sup>Required</sup> <a name="assertion_claims_behavior" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig.parameter.assertionClaimsBehavior"></a>

- *Type:* str

The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition.

ONLY_ID_TOKEN_CLAIMS: Only include ID Token Claims. Possible values: ["ONLY_ID_TOKEN_CLAIMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#assertion_claims_behavior IamWorkforcePoolProvider#assertion_claims_behavior}

---

###### `response_type`<sup>Required</sup> <a name="response_type" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig.parameter.responseType"></a>

- *Type:* str

The Response Type to request for in the OIDC Authorization Request for web sign-in.

ID_TOKEN: The 'response_type=id_token' selection uses the Implicit Flow for web sign-in. Possible values: ["ID_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/iam_workforce_pool_provider#response_type IamWorkforcePoolProvider#response_type}

---

##### `reset_web_sso_config` <a name="reset_web_sso_config" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetWebSsoConfig"></a>

```python
def reset_web_sso_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfig">web_sso_config</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference">IamWorkforcePoolProviderOidcWebSsoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUriInput">issuer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfigInput">web_sso_config_input</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `web_sso_config`<sup>Required</sup> <a name="web_sso_config" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfig"></a>

```python
web_sso_config: IamWorkforcePoolProviderOidcWebSsoConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference">IamWorkforcePoolProviderOidcWebSsoConfigOutputReference</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `issuer_uri_input`<sup>Optional</sup> <a name="issuer_uri_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUriInput"></a>

```python
issuer_uri_input: str
```

- *Type:* str

---

##### `web_sso_config_input`<sup>Optional</sup> <a name="web_sso_config_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfigInput"></a>

```python
web_sso_config_input: IamWorkforcePoolProviderOidcWebSsoConfig
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.internalValue"></a>

```python
internal_value: IamWorkforcePoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

---


### IamWorkforcePoolProviderOidcWebSsoConfigOutputReference <a name="IamWorkforcePoolProviderOidcWebSsoConfigOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehaviorInput">assertion_claims_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseTypeInput">response_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehavior">assertion_claims_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseType">response_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assertion_claims_behavior_input`<sup>Optional</sup> <a name="assertion_claims_behavior_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehaviorInput"></a>

```python
assertion_claims_behavior_input: str
```

- *Type:* str

---

##### `response_type_input`<sup>Optional</sup> <a name="response_type_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseTypeInput"></a>

```python
response_type_input: str
```

- *Type:* str

---

##### `assertion_claims_behavior`<sup>Required</sup> <a name="assertion_claims_behavior" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehavior"></a>

```python
assertion_claims_behavior: str
```

- *Type:* str

---

##### `response_type`<sup>Required</sup> <a name="response_type" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseType"></a>

```python
response_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.internalValue"></a>

```python
internal_value: IamWorkforcePoolProviderOidcWebSsoConfig
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

---


### IamWorkforcePoolProviderSamlOutputReference <a name="IamWorkforcePoolProviderSamlOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXmlInput">idp_metadata_xml_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXml">idp_metadata_xml</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idp_metadata_xml_input`<sup>Optional</sup> <a name="idp_metadata_xml_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXmlInput"></a>

```python
idp_metadata_xml_input: str
```

- *Type:* str

---

##### `idp_metadata_xml`<sup>Required</sup> <a name="idp_metadata_xml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXml"></a>

```python
idp_metadata_xml: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.internalValue"></a>

```python
internal_value: IamWorkforcePoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

---


### IamWorkforcePoolProviderTimeoutsOutputReference <a name="IamWorkforcePoolProviderTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workforce_pool_provider

iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamWorkforcePoolProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>]

---



