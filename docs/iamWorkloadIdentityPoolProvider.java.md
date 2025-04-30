# `iamWorkloadIdentityPoolProvider` Submodule <a name="`iamWorkloadIdentityPoolProvider` Submodule" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPoolProvider <a name="IamWorkloadIdentityPoolProvider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProvider;

IamWorkloadIdentityPoolProvider.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .workloadIdentityPoolId(java.lang.String)
    .workloadIdentityPoolProviderId(java.lang.String)
//  .attributeCondition(java.lang.String)
//  .attributeMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .aws(IamWorkloadIdentityPoolProviderAws)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .oidc(IamWorkloadIdentityPoolProviderOidc)
//  .project(java.lang.String)
//  .saml(IamWorkloadIdentityPoolProviderSaml)
//  .timeouts(IamWorkloadIdentityPoolProviderTimeouts)
//  .x509(IamWorkloadIdentityPoolProviderX509)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>java.lang.String</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolProviderId">workloadIdentityPoolProviderId</a></code> | <code>java.lang.String</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.attributeCondition">attributeCondition</a></code> | <code>java.lang.String</code> | [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.attributeMapping">attributeMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.x509">x509</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a></code> | x509 block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolId"></a>

- *Type:* java.lang.String

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_id IamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `workloadIdentityPoolProviderId`<sup>Required</sup> <a name="workloadIdentityPoolProviderId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolProviderId"></a>

- *Type:* java.lang.String

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_provider_id IamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `attributeCondition`<sup>Optional</sup> <a name="attributeCondition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.attributeCondition"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#attribute_condition IamWorkloadIdentityPoolProvider#attribute_condition}

---

##### `attributeMapping`<sup>Optional</sup> <a name="attributeMapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.attributeMapping"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#attribute_mapping IamWorkloadIdentityPoolProvider#attribute_mapping}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#aws IamWorkloadIdentityPoolProvider#aws}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#description IamWorkloadIdentityPoolProvider#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#disabled IamWorkloadIdentityPoolProvider#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#display_name IamWorkloadIdentityPoolProvider#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.oidc"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#oidc IamWorkloadIdentityPoolProvider#oidc}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}.

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.saml"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#saml IamWorkloadIdentityPoolProvider#saml}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#timeouts IamWorkloadIdentityPoolProvider#timeouts}

---

##### `x509`<sup>Optional</sup> <a name="x509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.x509"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

x509 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#x509 IamWorkloadIdentityPoolProvider#x509}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc">putOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putX509">putX509</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeCondition">resetAttributeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeMapping">resetAttributeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOidc">resetOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetX509">resetX509</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putAws"></a>

```java
public void putAws(IamWorkloadIdentityPoolProviderAws value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

---

##### `putOidc` <a name="putOidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc"></a>

```java
public void putOidc(IamWorkloadIdentityPoolProviderOidc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putSaml"></a>

```java
public void putSaml(IamWorkloadIdentityPoolProviderSaml value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts"></a>

```java
public void putTimeouts(IamWorkloadIdentityPoolProviderTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>

---

##### `putX509` <a name="putX509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putX509"></a>

```java
public void putX509(IamWorkloadIdentityPoolProviderX509 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putX509.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

---

##### `resetAttributeCondition` <a name="resetAttributeCondition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeCondition"></a>

```java
public void resetAttributeCondition()
```

##### `resetAttributeMapping` <a name="resetAttributeMapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeMapping"></a>

```java
public void resetAttributeMapping()
```

##### `resetAws` <a name="resetAws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAws"></a>

```java
public void resetAws()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetId"></a>

```java
public void resetId()
```

##### `resetOidc` <a name="resetOidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOidc"></a>

```java
public void resetOidc()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetProject"></a>

```java
public void resetProject()
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetSaml"></a>

```java
public void resetSaml()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetX509` <a name="resetX509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetX509"></a>

```java
public void resetX509()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProvider;

IamWorkloadIdentityPoolProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProvider;

IamWorkloadIdentityPoolProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProvider;

IamWorkloadIdentityPoolProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProvider;

IamWorkloadIdentityPoolProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamWorkloadIdentityPoolProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamWorkloadIdentityPoolProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamWorkloadIdentityPoolProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPoolProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference">IamWorkloadIdentityPoolProviderAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference">IamWorkloadIdentityPoolProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference">IamWorkloadIdentityPoolProviderSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference">IamWorkloadIdentityPoolProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.x509">x509</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference">IamWorkloadIdentityPoolProviderX509OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeConditionInput">attributeConditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMappingInput">attributeMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.awsInput">awsInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidcInput">oidcInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.samlInput">samlInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput">workloadIdentityPoolProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.x509Input">x509Input</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeCondition">attributeCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMapping">attributeMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId">workloadIdentityPoolProviderId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.aws"></a>

```java
public IamWorkloadIdentityPoolProviderAwsOutputReference getAws();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference">IamWorkloadIdentityPoolProviderAwsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidc"></a>

```java
public IamWorkloadIdentityPoolProviderOidcOutputReference getOidc();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference">IamWorkloadIdentityPoolProviderOidcOutputReference</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.saml"></a>

```java
public IamWorkloadIdentityPoolProviderSamlOutputReference getSaml();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference">IamWorkloadIdentityPoolProviderSamlOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeouts"></a>

```java
public IamWorkloadIdentityPoolProviderTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference">IamWorkloadIdentityPoolProviderTimeoutsOutputReference</a>

---

##### `x509`<sup>Required</sup> <a name="x509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.x509"></a>

```java
public IamWorkloadIdentityPoolProviderX509OutputReference getX509();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference">IamWorkloadIdentityPoolProviderX509OutputReference</a>

---

##### `attributeConditionInput`<sup>Optional</sup> <a name="attributeConditionInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeConditionInput"></a>

```java
public java.lang.String getAttributeConditionInput();
```

- *Type:* java.lang.String

---

##### `attributeMappingInput`<sup>Optional</sup> <a name="attributeMappingInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributeMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.awsInput"></a>

```java
public IamWorkloadIdentityPoolProviderAws getAwsInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `oidcInput`<sup>Optional</sup> <a name="oidcInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidcInput"></a>

```java
public IamWorkloadIdentityPoolProviderOidc getOidcInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.samlInput"></a>

```java
public IamWorkloadIdentityPoolProviderSaml getSamlInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput"></a>

```java
public java.lang.String getWorkloadIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `workloadIdentityPoolProviderIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolProviderIdInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput"></a>

```java
public java.lang.String getWorkloadIdentityPoolProviderIdInput();
```

- *Type:* java.lang.String

---

##### `x509Input`<sup>Optional</sup> <a name="x509Input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.x509Input"></a>

```java
public IamWorkloadIdentityPoolProviderX509 getX509Input();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

---

##### `attributeCondition`<sup>Required</sup> <a name="attributeCondition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeCondition"></a>

```java
public java.lang.String getAttributeCondition();
```

- *Type:* java.lang.String

---

##### `attributeMapping`<sup>Required</sup> <a name="attributeMapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributeMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId"></a>

```java
public java.lang.String getWorkloadIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `workloadIdentityPoolProviderId`<sup>Required</sup> <a name="workloadIdentityPoolProviderId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId"></a>

```java
public java.lang.String getWorkloadIdentityPoolProviderId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolProviderAws <a name="IamWorkloadIdentityPoolProviderAws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderAws;

IamWorkloadIdentityPoolProviderAws.builder()
    .accountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The AWS account ID. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#account_id IamWorkloadIdentityPoolProvider#account_id}

---

### IamWorkloadIdentityPoolProviderConfig <a name="IamWorkloadIdentityPoolProviderConfig" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderConfig;

IamWorkloadIdentityPoolProviderConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .workloadIdentityPoolId(java.lang.String)
    .workloadIdentityPoolProviderId(java.lang.String)
//  .attributeCondition(java.lang.String)
//  .attributeMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .aws(IamWorkloadIdentityPoolProviderAws)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .oidc(IamWorkloadIdentityPoolProviderOidc)
//  .project(java.lang.String)
//  .saml(IamWorkloadIdentityPoolProviderSaml)
//  .timeouts(IamWorkloadIdentityPoolProviderTimeouts)
//  .x509(IamWorkloadIdentityPoolProviderX509)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>java.lang.String</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId">workloadIdentityPoolProviderId</a></code> | <code>java.lang.String</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeCondition">attributeCondition</a></code> | <code>java.lang.String</code> | [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeMapping">attributeMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.x509">x509</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a></code> | x509 block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId"></a>

```java
public java.lang.String getWorkloadIdentityPoolId();
```

- *Type:* java.lang.String

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_id IamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `workloadIdentityPoolProviderId`<sup>Required</sup> <a name="workloadIdentityPoolProviderId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId"></a>

```java
public java.lang.String getWorkloadIdentityPoolProviderId();
```

- *Type:* java.lang.String

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_provider_id IamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `attributeCondition`<sup>Optional</sup> <a name="attributeCondition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeCondition"></a>

```java
public java.lang.String getAttributeCondition();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#attribute_condition IamWorkloadIdentityPoolProvider#attribute_condition}

---

##### `attributeMapping`<sup>Optional</sup> <a name="attributeMapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributeMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#attribute_mapping IamWorkloadIdentityPoolProvider#attribute_mapping}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.aws"></a>

```java
public IamWorkloadIdentityPoolProviderAws getAws();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#aws IamWorkloadIdentityPoolProvider#aws}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#description IamWorkloadIdentityPoolProvider#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#disabled IamWorkloadIdentityPoolProvider#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#display_name IamWorkloadIdentityPoolProvider#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.oidc"></a>

```java
public IamWorkloadIdentityPoolProviderOidc getOidc();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#oidc IamWorkloadIdentityPoolProvider#oidc}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}.

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.saml"></a>

```java
public IamWorkloadIdentityPoolProviderSaml getSaml();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#saml IamWorkloadIdentityPoolProvider#saml}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.timeouts"></a>

```java
public IamWorkloadIdentityPoolProviderTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#timeouts IamWorkloadIdentityPoolProvider#timeouts}

---

##### `x509`<sup>Optional</sup> <a name="x509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.x509"></a>

```java
public IamWorkloadIdentityPoolProviderX509 getX509();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

x509 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#x509 IamWorkloadIdentityPoolProvider#x509}

---

### IamWorkloadIdentityPoolProviderOidc <a name="IamWorkloadIdentityPoolProviderOidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderOidc;

IamWorkloadIdentityPoolProviderOidc.builder()
    .issuerUri(java.lang.String)
//  .allowedAudiences(java.util.List<java.lang.String>)
//  .jwksJson(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | The OIDC issuer URL. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | Acceptable values for the 'aud' field (audience) in the OIDC token. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | OIDC JWKs in JSON String format. |

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

The OIDC issuer URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#issuer_uri IamWorkloadIdentityPoolProvider#issuer_uri}

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#allowed_audiences IamWorkloadIdentityPoolProvider#allowed_audiences}

---

##### `jwksJson`<sup>Optional</sup> <a name="jwksJson" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#jwks_json IamWorkloadIdentityPoolProvider#jwks_json}

---

### IamWorkloadIdentityPoolProviderSaml <a name="IamWorkloadIdentityPoolProviderSaml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderSaml;

IamWorkloadIdentityPoolProviderSaml.builder()
    .idpMetadataXml(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml.property.idpMetadataXml">idpMetadataXml</a></code> | <code>java.lang.String</code> | SAML Identity provider configuration metadata xml doc. |

---

##### `idpMetadataXml`<sup>Required</sup> <a name="idpMetadataXml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml.property.idpMetadataXml"></a>

```java
public java.lang.String getIdpMetadataXml();
```

- *Type:* java.lang.String

SAML Identity provider configuration metadata xml doc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#idp_metadata_xml IamWorkloadIdentityPoolProvider#idp_metadata_xml}

---

### IamWorkloadIdentityPoolProviderTimeouts <a name="IamWorkloadIdentityPoolProviderTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderTimeouts;

IamWorkloadIdentityPoolProviderTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#create IamWorkloadIdentityPoolProvider#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#delete IamWorkloadIdentityPoolProvider#delete}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#update IamWorkloadIdentityPoolProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#create IamWorkloadIdentityPoolProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#delete IamWorkloadIdentityPoolProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#update IamWorkloadIdentityPoolProvider#update}.

---

### IamWorkloadIdentityPoolProviderX509 <a name="IamWorkloadIdentityPoolProviderX509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderX509;

IamWorkloadIdentityPoolProviderX509.builder()
    .trustStore(IamWorkloadIdentityPoolProviderX509TrustStore)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509.property.trustStore">trustStore</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a></code> | trust_store block. |

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509.property.trustStore"></a>

```java
public IamWorkloadIdentityPoolProviderX509TrustStore getTrustStore();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a>

trust_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#trust_store IamWorkloadIdentityPoolProvider#trust_store}

---

### IamWorkloadIdentityPoolProviderX509TrustStore <a name="IamWorkloadIdentityPoolProviderX509TrustStore" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderX509TrustStore;

IamWorkloadIdentityPoolProviderX509TrustStore.builder()
    .trustAnchors(IResolvable)
    .trustAnchors(java.util.List<IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors>)
//  .intermediateCas(IResolvable)
//  .intermediateCas(java.util.List<IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.property.trustAnchors">trustAnchors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>></code> | trust_anchors block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.property.intermediateCas">intermediateCas</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>></code> | intermediate_cas block. |

---

##### `trustAnchors`<sup>Required</sup> <a name="trustAnchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.property.trustAnchors"></a>

```java
public java.lang.Object getTrustAnchors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>>

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#trust_anchors IamWorkloadIdentityPoolProvider#trust_anchors}

---

##### `intermediateCas`<sup>Optional</sup> <a name="intermediateCas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.property.intermediateCas"></a>

```java
public java.lang.Object getIntermediateCas();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>>

intermediate_cas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#intermediate_cas IamWorkloadIdentityPoolProvider#intermediate_cas}

---

### IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas <a name="IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas;

IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas.builder()
//  .pemCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert). |

---

##### `pemCertificate`<sup>Optional</sup> <a name="pemCertificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#pem_certificate IamWorkloadIdentityPoolProvider#pem_certificate}

---

### IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors <a name="IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors;

IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors.builder()
//  .pemCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert). |

---

##### `pemCertificate`<sup>Optional</sup> <a name="pemCertificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_workload_identity_pool_provider#pem_certificate IamWorkloadIdentityPoolProvider#pem_certificate}

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolProviderAwsOutputReference <a name="IamWorkloadIdentityPoolProviderAwsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderAwsOutputReference;

new IamWorkloadIdentityPoolProviderAwsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue"></a>

```java
public IamWorkloadIdentityPoolProviderAws getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

---


### IamWorkloadIdentityPoolProviderOidcOutputReference <a name="IamWorkloadIdentityPoolProviderOidcOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderOidcOutputReference;

new IamWorkloadIdentityPoolProviderOidcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetJwksJson">resetJwksJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetAllowedAudiences"></a>

```java
public void resetAllowedAudiences()
```

##### `resetJwksJson` <a name="resetJwksJson" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetJwksJson"></a>

```java
public void resetJwksJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJsonInput">jwksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiencesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUriInput"></a>

```java
public java.lang.String getIssuerUriInput();
```

- *Type:* java.lang.String

---

##### `jwksJsonInput`<sup>Optional</sup> <a name="jwksJsonInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJsonInput"></a>

```java
public java.lang.String getJwksJsonInput();
```

- *Type:* java.lang.String

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue"></a>

```java
public IamWorkloadIdentityPoolProviderOidc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

---


### IamWorkloadIdentityPoolProviderSamlOutputReference <a name="IamWorkloadIdentityPoolProviderSamlOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderSamlOutputReference;

new IamWorkloadIdentityPoolProviderSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXmlInput">idpMetadataXmlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXml">idpMetadataXml</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idpMetadataXmlInput`<sup>Optional</sup> <a name="idpMetadataXmlInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXmlInput"></a>

```java
public java.lang.String getIdpMetadataXmlInput();
```

- *Type:* java.lang.String

---

##### `idpMetadataXml`<sup>Required</sup> <a name="idpMetadataXml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXml"></a>

```java
public java.lang.String getIdpMetadataXml();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.internalValue"></a>

```java
public IamWorkloadIdentityPoolProviderSaml getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

---


### IamWorkloadIdentityPoolProviderTimeoutsOutputReference <a name="IamWorkloadIdentityPoolProviderTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference;

new IamWorkloadIdentityPoolProviderTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>

---


### IamWorkloadIdentityPoolProviderX509OutputReference <a name="IamWorkloadIdentityPoolProviderX509OutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderX509OutputReference;

new IamWorkloadIdentityPoolProviderX509OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.putTrustStore">putTrustStore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrustStore` <a name="putTrustStore" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.putTrustStore"></a>

```java
public void putTrustStore(IamWorkloadIdentityPoolProviderX509TrustStore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.putTrustStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.trustStore">trustStore</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference">IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.trustStoreInput">trustStoreInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.trustStore"></a>

```java
public IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference getTrustStore();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference">IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference</a>

---

##### `trustStoreInput`<sup>Optional</sup> <a name="trustStoreInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.trustStoreInput"></a>

```java
public IamWorkloadIdentityPoolProviderX509TrustStore getTrustStoreInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.internalValue"></a>

```java
public IamWorkloadIdentityPoolProviderX509 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

---


### IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList <a name="IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList;

new IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get"></a>

```java
public IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>>

---


### IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference <a name="IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference;

new IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resetPemCertificate">resetPemCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPemCertificate` <a name="resetPemCertificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resetPemCertificate"></a>

```java
public void resetPemCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificateInput"></a>

```java
public java.lang.String getPemCertificateInput();
```

- *Type:* java.lang.String

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>

---


### IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference <a name="IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference;

new IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putIntermediateCas">putIntermediateCas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putTrustAnchors">putTrustAnchors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resetIntermediateCas">resetIntermediateCas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntermediateCas` <a name="putIntermediateCas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putIntermediateCas"></a>

```java
public void putIntermediateCas(IResolvable OR java.util.List<IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putIntermediateCas.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>>

---

##### `putTrustAnchors` <a name="putTrustAnchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putTrustAnchors"></a>

```java
public void putTrustAnchors(IResolvable OR java.util.List<IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>>

---

##### `resetIntermediateCas` <a name="resetIntermediateCas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resetIntermediateCas"></a>

```java
public void resetIntermediateCas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCas">intermediateCas</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchors">trustAnchors</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCasInput">intermediateCasInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchorsInput">trustAnchorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intermediateCas`<sup>Required</sup> <a name="intermediateCas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCas"></a>

```java
public IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList getIntermediateCas();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList</a>

---

##### `trustAnchors`<sup>Required</sup> <a name="trustAnchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchors"></a>

```java
public IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList getTrustAnchors();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList</a>

---

##### `intermediateCasInput`<sup>Optional</sup> <a name="intermediateCasInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCasInput"></a>

```java
public java.lang.Object getIntermediateCasInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>>

---

##### `trustAnchorsInput`<sup>Optional</sup> <a name="trustAnchorsInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchorsInput"></a>

```java
public java.lang.Object getTrustAnchorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.internalValue"></a>

```java
public IamWorkloadIdentityPoolProviderX509TrustStore getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a>

---


### IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList <a name="IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList;

new IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get"></a>

```java
public IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>>

---


### IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference <a name="IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workload_identity_pool_provider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference;

new IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resetPemCertificate">resetPemCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPemCertificate` <a name="resetPemCertificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resetPemCertificate"></a>

```java
public void resetPemCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```java
public java.lang.String getPemCertificateInput();
```

- *Type:* java.lang.String

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>

---



