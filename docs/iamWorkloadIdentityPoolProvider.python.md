# `iamWorkloadIdentityPoolProvider` Submodule <a name="`iamWorkloadIdentityPoolProvider` Submodule" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPoolProvider <a name="IamWorkloadIdentityPoolProvider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workload_identity_pool_id: str,
  workload_identity_pool_provider_id: str,
  attribute_condition: str = None,
  attribute_mapping: typing.Mapping[str] = None,
  aws: IamWorkloadIdentityPoolProviderAws = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  oidc: IamWorkloadIdentityPoolProviderOidc = None,
  project: str = None,
  saml: IamWorkloadIdentityPoolProviderSaml = None,
  timeouts: IamWorkloadIdentityPoolProviderTimeouts = None,
  x509: IamWorkloadIdentityPoolProviderX509 = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolProviderId">workload_identity_pool_provider_id</a></code> | <code>str</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.attributeCondition">attribute_condition</a></code> | <code>str</code> | [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.attributeMapping">attribute_mapping</a></code> | <code>typing.Mapping[str]</code> | Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.x509">x509</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a></code> | x509 block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolId"></a>

- *Type:* str

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_id IamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `workload_identity_pool_provider_id`<sup>Required</sup> <a name="workload_identity_pool_provider_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolProviderId"></a>

- *Type:* str

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_provider_id IamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `attribute_condition`<sup>Optional</sup> <a name="attribute_condition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.attributeCondition"></a>

- *Type:* str

[A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:

* 'assertion': JSON representing the authentication credential issued by the provider.
* 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
* 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters. If
unspecified, all valid authentication credential are accepted.

The following example shows how to only allow credentials with a mapped 'google.groups'
value of 'admins':

```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#attribute_condition IamWorkloadIdentityPoolProvider#attribute_condition}

---

##### `attribute_mapping`<sup>Optional</sup> <a name="attribute_mapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.attributeMapping"></a>

- *Type:* typing.Mapping[str]

Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:

* 'google.subject': The principal IAM is authenticating. You can reference this value
  in IAM bindings. This is also the subject that appears in Cloud Logging logs.
  Cannot exceed 127 characters.
* 'google.groups': Groups the external identity belongs to. You can grant groups
  access to resources using an IAM 'principalSet' binding; access applies to all
  members of the group.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}',
where '{custom_attribute}' is the name of the custom attribute to be mapped. You can
define a maximum of 50 custom attributes. The maximum length of a mapped attribute key
is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a
workload to Google Cloud resources. For example:

* 'google.subject':
  'principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}'
* 'google.groups':
  'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}'
* 'attribute.{custom_attribute}':
  'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For AWS providers, the following rules apply:

* If no attribute mapping is defined, the following default mapping applies:

  ```
  {
    "google.subject":"assertion.arn",
    "attribute.aws_role":
      "assertion.arn.contains('assumed-role')"
      " ? assertion.arn.extract('{account_arn}assumed-role/')"
      "   + 'assumed-role/'"
      "   + assertion.arn.extract('assumed-role/{role_name}/')"
      " : assertion.arn",
  }
  ```
* If any custom attribute mappings are defined, they must include a mapping to the
  'google.subject' attribute.

For OIDC providers, the following rules apply:

* Custom attribute mappings must be defined, and must include a mapping to the
  'google.subject' attribute. For example, the following maps the 'sub' claim of the
  incoming credential to the 'subject' attribute on a Google token.

  ```
  {"google.subject": "assertion.sub"}
  ```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#attribute_mapping IamWorkloadIdentityPoolProvider#attribute_mapping}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#aws IamWorkloadIdentityPoolProvider#aws}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.description"></a>

- *Type:* str

A description for the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#description IamWorkloadIdentityPoolProvider#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#disabled IamWorkloadIdentityPoolProvider#disabled}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.displayName"></a>

- *Type:* str

A display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#display_name IamWorkloadIdentityPoolProvider#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.oidc"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#oidc IamWorkloadIdentityPoolProvider#oidc}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}.

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.saml"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#saml IamWorkloadIdentityPoolProvider#saml}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#timeouts IamWorkloadIdentityPoolProvider#timeouts}

---

##### `x509`<sup>Optional</sup> <a name="x509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.x509"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

x509 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#x509 IamWorkloadIdentityPoolProvider#x509}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putAws">put_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc">put_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putSaml">put_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putX509">put_x509</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeCondition">reset_attribute_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeMapping">reset_attribute_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAws">reset_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOidc">reset_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetSaml">reset_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetX509">reset_x509</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws` <a name="put_aws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putAws"></a>

```python
def put_aws(
  account_id: str
) -> None
```

###### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putAws.parameter.accountId"></a>

- *Type:* str

The AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#account_id IamWorkloadIdentityPoolProvider#account_id}

---

##### `put_oidc` <a name="put_oidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc"></a>

```python
def put_oidc(
  issuer_uri: str,
  allowed_audiences: typing.List[str] = None,
  jwks_json: str = None
) -> None
```

###### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc.parameter.issuerUri"></a>

- *Type:* str

The OIDC issuer URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#issuer_uri IamWorkloadIdentityPoolProvider#issuer_uri}

---

###### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc.parameter.allowedAudiences"></a>

- *Type:* typing.List[str]

Acceptable values for the 'aud' field (audience) in the OIDC token.

Token exchange
requests are rejected if the token audience does not match one of the configured
values. Each audience may be at most 256 characters. A maximum of 10 audiences may
be configured.

If this list is empty, the OIDC token audience must be equal to the full canonical
resource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix.
For example:

```
//iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
https://iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#allowed_audiences IamWorkloadIdentityPoolProvider#allowed_audiences}

---

###### `jwks_json`<sup>Optional</sup> <a name="jwks_json" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc.parameter.jwksJson"></a>

- *Type:* str

OIDC JWKs in JSON String format.

For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the 'jwks_uri' from the discovery document fetched from the
.well-known path for the 'issuer_uri'. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:

```
{
  "keys": [
    {
          "kty": "RSA/EC",
          "alg": "<algorithm>",
          "use": "sig",
          "kid": "<key-id>",
          "n": "",
          "e": "",
          "x": "",
          "y": "",
          "crv": ""
    }
  ]
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#jwks_json IamWorkloadIdentityPoolProvider#jwks_json}

---

##### `put_saml` <a name="put_saml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putSaml"></a>

```python
def put_saml(
  idp_metadata_xml: str
) -> None
```

###### `idp_metadata_xml`<sup>Required</sup> <a name="idp_metadata_xml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putSaml.parameter.idpMetadataXml"></a>

- *Type:* str

SAML Identity provider configuration metadata xml doc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#idp_metadata_xml IamWorkloadIdentityPoolProvider#idp_metadata_xml}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#create IamWorkloadIdentityPoolProvider#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#delete IamWorkloadIdentityPoolProvider#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#update IamWorkloadIdentityPoolProvider#update}.

---

##### `put_x509` <a name="put_x509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putX509"></a>

```python
def put_x509(
  trust_store: IamWorkloadIdentityPoolProviderX509TrustStore
) -> None
```

###### `trust_store`<sup>Required</sup> <a name="trust_store" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putX509.parameter.trustStore"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a>

trust_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#trust_store IamWorkloadIdentityPoolProvider#trust_store}

---

##### `reset_attribute_condition` <a name="reset_attribute_condition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeCondition"></a>

```python
def reset_attribute_condition() -> None
```

##### `reset_attribute_mapping` <a name="reset_attribute_mapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeMapping"></a>

```python
def reset_attribute_mapping() -> None
```

##### `reset_aws` <a name="reset_aws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAws"></a>

```python
def reset_aws() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_oidc` <a name="reset_oidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOidc"></a>

```python
def reset_oidc() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_saml` <a name="reset_saml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetSaml"></a>

```python
def reset_saml() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_x509` <a name="reset_x509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetX509"></a>

```python
def reset_x509() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamWorkloadIdentityPoolProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamWorkloadIdentityPoolProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPoolProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference">IamWorkloadIdentityPoolProviderAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference">IamWorkloadIdentityPoolProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference">IamWorkloadIdentityPoolProviderSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference">IamWorkloadIdentityPoolProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.x509">x509</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference">IamWorkloadIdentityPoolProviderX509OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeConditionInput">attribute_condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMappingInput">attribute_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.awsInput">aws_input</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidcInput">oidc_input</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.samlInput">saml_input</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput">workload_identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput">workload_identity_pool_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.x509Input">x509_input</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeCondition">attribute_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMapping">attribute_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId">workload_identity_pool_provider_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.aws"></a>

```python
aws: IamWorkloadIdentityPoolProviderAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference">IamWorkloadIdentityPoolProviderAwsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidc"></a>

```python
oidc: IamWorkloadIdentityPoolProviderOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference">IamWorkloadIdentityPoolProviderOidcOutputReference</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.saml"></a>

```python
saml: IamWorkloadIdentityPoolProviderSamlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference">IamWorkloadIdentityPoolProviderSamlOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeouts"></a>

```python
timeouts: IamWorkloadIdentityPoolProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference">IamWorkloadIdentityPoolProviderTimeoutsOutputReference</a>

---

##### `x509`<sup>Required</sup> <a name="x509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.x509"></a>

```python
x509: IamWorkloadIdentityPoolProviderX509OutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference">IamWorkloadIdentityPoolProviderX509OutputReference</a>

---

##### `attribute_condition_input`<sup>Optional</sup> <a name="attribute_condition_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeConditionInput"></a>

```python
attribute_condition_input: str
```

- *Type:* str

---

##### `attribute_mapping_input`<sup>Optional</sup> <a name="attribute_mapping_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMappingInput"></a>

```python
attribute_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `aws_input`<sup>Optional</sup> <a name="aws_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.awsInput"></a>

```python
aws_input: IamWorkloadIdentityPoolProviderAws
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `oidc_input`<sup>Optional</sup> <a name="oidc_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidcInput"></a>

```python
oidc_input: IamWorkloadIdentityPoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `saml_input`<sup>Optional</sup> <a name="saml_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.samlInput"></a>

```python
saml_input: IamWorkloadIdentityPoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IamWorkloadIdentityPoolProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>]

---

##### `workload_identity_pool_id_input`<sup>Optional</sup> <a name="workload_identity_pool_id_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput"></a>

```python
workload_identity_pool_id_input: str
```

- *Type:* str

---

##### `workload_identity_pool_provider_id_input`<sup>Optional</sup> <a name="workload_identity_pool_provider_id_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput"></a>

```python
workload_identity_pool_provider_id_input: str
```

- *Type:* str

---

##### `x509_input`<sup>Optional</sup> <a name="x509_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.x509Input"></a>

```python
x509_input: IamWorkloadIdentityPoolProviderX509
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

---

##### `attribute_condition`<sup>Required</sup> <a name="attribute_condition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeCondition"></a>

```python
attribute_condition: str
```

- *Type:* str

---

##### `attribute_mapping`<sup>Required</sup> <a name="attribute_mapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMapping"></a>

```python
attribute_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId"></a>

```python
workload_identity_pool_id: str
```

- *Type:* str

---

##### `workload_identity_pool_provider_id`<sup>Required</sup> <a name="workload_identity_pool_provider_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId"></a>

```python
workload_identity_pool_provider_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolProviderAws <a name="IamWorkloadIdentityPoolProviderAws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws(
  account_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws.property.accountId">account_id</a></code> | <code>str</code> | The AWS account ID. |

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#account_id IamWorkloadIdentityPoolProvider#account_id}

---

### IamWorkloadIdentityPoolProviderConfig <a name="IamWorkloadIdentityPoolProviderConfig" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workload_identity_pool_id: str,
  workload_identity_pool_provider_id: str,
  attribute_condition: str = None,
  attribute_mapping: typing.Mapping[str] = None,
  aws: IamWorkloadIdentityPoolProviderAws = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  oidc: IamWorkloadIdentityPoolProviderOidc = None,
  project: str = None,
  saml: IamWorkloadIdentityPoolProviderSaml = None,
  timeouts: IamWorkloadIdentityPoolProviderTimeouts = None,
  x509: IamWorkloadIdentityPoolProviderX509 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId">workload_identity_pool_provider_id</a></code> | <code>str</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeCondition">attribute_condition</a></code> | <code>str</code> | [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeMapping">attribute_mapping</a></code> | <code>typing.Mapping[str]</code> | Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.description">description</a></code> | <code>str</code> | A description for the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.displayName">display_name</a></code> | <code>str</code> | A display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.x509">x509</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a></code> | x509 block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId"></a>

```python
workload_identity_pool_id: str
```

- *Type:* str

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_id IamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `workload_identity_pool_provider_id`<sup>Required</sup> <a name="workload_identity_pool_provider_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId"></a>

```python
workload_identity_pool_provider_id: str
```

- *Type:* str

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_provider_id IamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `attribute_condition`<sup>Optional</sup> <a name="attribute_condition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeCondition"></a>

```python
attribute_condition: str
```

- *Type:* str

[A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:

* 'assertion': JSON representing the authentication credential issued by the provider.
* 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
* 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters. If
unspecified, all valid authentication credential are accepted.

The following example shows how to only allow credentials with a mapped 'google.groups'
value of 'admins':

```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#attribute_condition IamWorkloadIdentityPoolProvider#attribute_condition}

---

##### `attribute_mapping`<sup>Optional</sup> <a name="attribute_mapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeMapping"></a>

```python
attribute_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:

* 'google.subject': The principal IAM is authenticating. You can reference this value
  in IAM bindings. This is also the subject that appears in Cloud Logging logs.
  Cannot exceed 127 characters.
* 'google.groups': Groups the external identity belongs to. You can grant groups
  access to resources using an IAM 'principalSet' binding; access applies to all
  members of the group.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}',
where '{custom_attribute}' is the name of the custom attribute to be mapped. You can
define a maximum of 50 custom attributes. The maximum length of a mapped attribute key
is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a
workload to Google Cloud resources. For example:

* 'google.subject':
  'principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}'
* 'google.groups':
  'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}'
* 'attribute.{custom_attribute}':
  'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For AWS providers, the following rules apply:

* If no attribute mapping is defined, the following default mapping applies:

  ```
  {
    "google.subject":"assertion.arn",
    "attribute.aws_role":
      "assertion.arn.contains('assumed-role')"
      " ? assertion.arn.extract('{account_arn}assumed-role/')"
      "   + 'assumed-role/'"
      "   + assertion.arn.extract('assumed-role/{role_name}/')"
      " : assertion.arn",
  }
  ```
* If any custom attribute mappings are defined, they must include a mapping to the
  'google.subject' attribute.

For OIDC providers, the following rules apply:

* Custom attribute mappings must be defined, and must include a mapping to the
  'google.subject' attribute. For example, the following maps the 'sub' claim of the
  incoming credential to the 'subject' attribute on a Google token.

  ```
  {"google.subject": "assertion.sub"}
  ```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#attribute_mapping IamWorkloadIdentityPoolProvider#attribute_mapping}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.aws"></a>

```python
aws: IamWorkloadIdentityPoolProviderAws
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#aws IamWorkloadIdentityPoolProvider#aws}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#description IamWorkloadIdentityPoolProvider#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#disabled IamWorkloadIdentityPoolProvider#disabled}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#display_name IamWorkloadIdentityPoolProvider#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.oidc"></a>

```python
oidc: IamWorkloadIdentityPoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#oidc IamWorkloadIdentityPoolProvider#oidc}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}.

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.saml"></a>

```python
saml: IamWorkloadIdentityPoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#saml IamWorkloadIdentityPoolProvider#saml}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.timeouts"></a>

```python
timeouts: IamWorkloadIdentityPoolProviderTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#timeouts IamWorkloadIdentityPoolProvider#timeouts}

---

##### `x509`<sup>Optional</sup> <a name="x509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.x509"></a>

```python
x509: IamWorkloadIdentityPoolProviderX509
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

x509 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#x509 IamWorkloadIdentityPoolProvider#x509}

---

### IamWorkloadIdentityPoolProviderOidc <a name="IamWorkloadIdentityPoolProviderOidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc(
  issuer_uri: str,
  allowed_audiences: typing.List[str] = None,
  jwks_json: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.issuerUri">issuer_uri</a></code> | <code>str</code> | The OIDC issuer URL. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | Acceptable values for the 'aud' field (audience) in the OIDC token. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.jwksJson">jwks_json</a></code> | <code>str</code> | OIDC JWKs in JSON String format. |

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

The OIDC issuer URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#issuer_uri IamWorkloadIdentityPoolProvider#issuer_uri}

---

##### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

Acceptable values for the 'aud' field (audience) in the OIDC token.

Token exchange
requests are rejected if the token audience does not match one of the configured
values. Each audience may be at most 256 characters. A maximum of 10 audiences may
be configured.

If this list is empty, the OIDC token audience must be equal to the full canonical
resource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix.
For example:

```
//iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
https://iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#allowed_audiences IamWorkloadIdentityPoolProvider#allowed_audiences}

---

##### `jwks_json`<sup>Optional</sup> <a name="jwks_json" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.jwksJson"></a>

```python
jwks_json: str
```

- *Type:* str

OIDC JWKs in JSON String format.

For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the 'jwks_uri' from the discovery document fetched from the
.well-known path for the 'issuer_uri'. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:

```
{
  "keys": [
    {
          "kty": "RSA/EC",
          "alg": "<algorithm>",
          "use": "sig",
          "kid": "<key-id>",
          "n": "",
          "e": "",
          "x": "",
          "y": "",
          "crv": ""
    }
  ]
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#jwks_json IamWorkloadIdentityPoolProvider#jwks_json}

---

### IamWorkloadIdentityPoolProviderSaml <a name="IamWorkloadIdentityPoolProviderSaml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml(
  idp_metadata_xml: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml.property.idpMetadataXml">idp_metadata_xml</a></code> | <code>str</code> | SAML Identity provider configuration metadata xml doc. |

---

##### `idp_metadata_xml`<sup>Required</sup> <a name="idp_metadata_xml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml.property.idpMetadataXml"></a>

```python
idp_metadata_xml: str
```

- *Type:* str

SAML Identity provider configuration metadata xml doc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#idp_metadata_xml IamWorkloadIdentityPoolProvider#idp_metadata_xml}

---

### IamWorkloadIdentityPoolProviderTimeouts <a name="IamWorkloadIdentityPoolProviderTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#create IamWorkloadIdentityPoolProvider#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#delete IamWorkloadIdentityPoolProvider#delete}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#update IamWorkloadIdentityPoolProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#create IamWorkloadIdentityPoolProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#delete IamWorkloadIdentityPoolProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#update IamWorkloadIdentityPoolProvider#update}.

---

### IamWorkloadIdentityPoolProviderX509 <a name="IamWorkloadIdentityPoolProviderX509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509(
  trust_store: IamWorkloadIdentityPoolProviderX509TrustStore
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509.property.trustStore">trust_store</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a></code> | trust_store block. |

---

##### `trust_store`<sup>Required</sup> <a name="trust_store" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509.property.trustStore"></a>

```python
trust_store: IamWorkloadIdentityPoolProviderX509TrustStore
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a>

trust_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#trust_store IamWorkloadIdentityPoolProvider#trust_store}

---

### IamWorkloadIdentityPoolProviderX509TrustStore <a name="IamWorkloadIdentityPoolProviderX509TrustStore" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore(
  trust_anchors: typing.Union[IResolvable, typing.List[IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors]],
  intermediate_cas: typing.Union[IResolvable, typing.List[IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.property.trustAnchors">trust_anchors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>]]</code> | trust_anchors block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.property.intermediateCas">intermediate_cas</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>]]</code> | intermediate_cas block. |

---

##### `trust_anchors`<sup>Required</sup> <a name="trust_anchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.property.trustAnchors"></a>

```python
trust_anchors: typing.Union[IResolvable, typing.List[IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>]]

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#trust_anchors IamWorkloadIdentityPoolProvider#trust_anchors}

---

##### `intermediate_cas`<sup>Optional</sup> <a name="intermediate_cas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.property.intermediateCas"></a>

```python
intermediate_cas: typing.Union[IResolvable, typing.List[IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>]]

intermediate_cas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#intermediate_cas IamWorkloadIdentityPoolProvider#intermediate_cas}

---

### IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas <a name="IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas(
  pem_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert). |

---

##### `pem_certificate`<sup>Optional</sup> <a name="pem_certificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#pem_certificate IamWorkloadIdentityPoolProvider#pem_certificate}

---

### IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors <a name="IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors(
  pem_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert). |

---

##### `pem_certificate`<sup>Optional</sup> <a name="pem_certificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#pem_certificate IamWorkloadIdentityPoolProvider#pem_certificate}

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolProviderAwsOutputReference <a name="IamWorkloadIdentityPoolProviderAwsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue"></a>

```python
internal_value: IamWorkloadIdentityPoolProviderAws
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

---


### IamWorkloadIdentityPoolProviderOidcOutputReference <a name="IamWorkloadIdentityPoolProviderOidcOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetAllowedAudiences">reset_allowed_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetJwksJson">reset_jwks_json</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_audiences` <a name="reset_allowed_audiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetAllowedAudiences"></a>

```python
def reset_allowed_audiences() -> None
```

##### `reset_jwks_json` <a name="reset_jwks_json" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetJwksJson"></a>

```python
def reset_jwks_json() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiencesInput">allowed_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUriInput">issuer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJsonInput">jwks_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson">jwks_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_audiences_input`<sup>Optional</sup> <a name="allowed_audiences_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiencesInput"></a>

```python
allowed_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_uri_input`<sup>Optional</sup> <a name="issuer_uri_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUriInput"></a>

```python
issuer_uri_input: str
```

- *Type:* str

---

##### `jwks_json_input`<sup>Optional</sup> <a name="jwks_json_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJsonInput"></a>

```python
jwks_json_input: str
```

- *Type:* str

---

##### `allowed_audiences`<sup>Required</sup> <a name="allowed_audiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `jwks_json`<sup>Required</sup> <a name="jwks_json" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson"></a>

```python
jwks_json: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue"></a>

```python
internal_value: IamWorkloadIdentityPoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

---


### IamWorkloadIdentityPoolProviderSamlOutputReference <a name="IamWorkloadIdentityPoolProviderSamlOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXmlInput">idp_metadata_xml_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXml">idp_metadata_xml</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idp_metadata_xml_input`<sup>Optional</sup> <a name="idp_metadata_xml_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXmlInput"></a>

```python
idp_metadata_xml_input: str
```

- *Type:* str

---

##### `idp_metadata_xml`<sup>Required</sup> <a name="idp_metadata_xml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXml"></a>

```python
idp_metadata_xml: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.internalValue"></a>

```python
internal_value: IamWorkloadIdentityPoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

---


### IamWorkloadIdentityPoolProviderTimeoutsOutputReference <a name="IamWorkloadIdentityPoolProviderTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamWorkloadIdentityPoolProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>]

---


### IamWorkloadIdentityPoolProviderX509OutputReference <a name="IamWorkloadIdentityPoolProviderX509OutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.putTrustStore">put_trust_store</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_trust_store` <a name="put_trust_store" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.putTrustStore"></a>

```python
def put_trust_store(
  trust_anchors: typing.Union[IResolvable, typing.List[IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors]],
  intermediate_cas: typing.Union[IResolvable, typing.List[IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas]] = None
) -> None
```

###### `trust_anchors`<sup>Required</sup> <a name="trust_anchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.putTrustStore.parameter.trustAnchors"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>]]

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#trust_anchors IamWorkloadIdentityPoolProvider#trust_anchors}

---

###### `intermediate_cas`<sup>Optional</sup> <a name="intermediate_cas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.putTrustStore.parameter.intermediateCas"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>]]

intermediate_cas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/iam_workload_identity_pool_provider#intermediate_cas IamWorkloadIdentityPoolProvider#intermediate_cas}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.trustStore">trust_store</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference">IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.trustStoreInput">trust_store_input</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trust_store`<sup>Required</sup> <a name="trust_store" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.trustStore"></a>

```python
trust_store: IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference">IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference</a>

---

##### `trust_store_input`<sup>Optional</sup> <a name="trust_store_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.trustStoreInput"></a>

```python
trust_store_input: IamWorkloadIdentityPoolProviderX509TrustStore
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.internalValue"></a>

```python
internal_value: IamWorkloadIdentityPoolProviderX509
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

---


### IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList <a name="IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>]]

---


### IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference <a name="IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resetPemCertificate">reset_pem_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pem_certificate` <a name="reset_pem_certificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resetPemCertificate"></a>

```python
def reset_pem_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificateInput">pem_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pem_certificate_input`<sup>Optional</sup> <a name="pem_certificate_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificateInput"></a>

```python
pem_certificate_input: str
```

- *Type:* str

---

##### `pem_certificate`<sup>Required</sup> <a name="pem_certificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>]

---


### IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference <a name="IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putIntermediateCas">put_intermediate_cas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putTrustAnchors">put_trust_anchors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resetIntermediateCas">reset_intermediate_cas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_intermediate_cas` <a name="put_intermediate_cas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putIntermediateCas"></a>

```python
def put_intermediate_cas(
  value: typing.Union[IResolvable, typing.List[IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putIntermediateCas.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>]]

---

##### `put_trust_anchors` <a name="put_trust_anchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putTrustAnchors"></a>

```python
def put_trust_anchors(
  value: typing.Union[IResolvable, typing.List[IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>]]

---

##### `reset_intermediate_cas` <a name="reset_intermediate_cas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resetIntermediateCas"></a>

```python
def reset_intermediate_cas() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCas">intermediate_cas</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchors">trust_anchors</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCasInput">intermediate_cas_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchorsInput">trust_anchors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intermediate_cas`<sup>Required</sup> <a name="intermediate_cas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCas"></a>

```python
intermediate_cas: IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList</a>

---

##### `trust_anchors`<sup>Required</sup> <a name="trust_anchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchors"></a>

```python
trust_anchors: IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList</a>

---

##### `intermediate_cas_input`<sup>Optional</sup> <a name="intermediate_cas_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCasInput"></a>

```python
intermediate_cas_input: typing.Union[IResolvable, typing.List[IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>]]

---

##### `trust_anchors_input`<sup>Optional</sup> <a name="trust_anchors_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchorsInput"></a>

```python
trust_anchors_input: typing.Union[IResolvable, typing.List[IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.internalValue"></a>

```python
internal_value: IamWorkloadIdentityPoolProviderX509TrustStore
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a>

---


### IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList <a name="IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>]]

---


### IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference <a name="IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool_provider

iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resetPemCertificate">reset_pem_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pem_certificate` <a name="reset_pem_certificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resetPemCertificate"></a>

```python
def reset_pem_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificateInput">pem_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pem_certificate_input`<sup>Optional</sup> <a name="pem_certificate_input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```python
pem_certificate_input: str
```

- *Type:* str

---

##### `pem_certificate`<sup>Required</sup> <a name="pem_certificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>]

---



