# `iamWorkforcePoolProvider` Submodule <a name="`iamWorkforcePoolProvider` Submodule" id="@cdktf/provider-google.iamWorkforcePoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolProvider <a name="IamWorkforcePoolProvider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider google_iam_workforce_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProvider;

IamWorkforcePoolProvider.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .providerId(java.lang.String)
    .workforcePoolId(java.lang.String)
//  .attributeCondition(java.lang.String)
//  .attributeMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .displayName(java.lang.String)
//  .extraAttributesOauth2Client(IamWorkforcePoolProviderExtraAttributesOauth2Client)
//  .id(java.lang.String)
//  .oidc(IamWorkforcePoolProviderOidc)
//  .saml(IamWorkforcePoolProviderSaml)
//  .timeouts(IamWorkforcePoolProviderTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.providerId">providerId</a></code> | <code>java.lang.String</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.attributeCondition">attributeCondition</a></code> | <code>java.lang.String</code> | A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.attributeMapping">attributeMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-specified display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.extraAttributesOauth2Client">extraAttributesOauth2Client</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | extra_attributes_oauth2_client block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#location IamWorkforcePoolProvider#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.providerId"></a>

- *Type:* java.lang.String

The ID for the provider, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#provider_id IamWorkforcePoolProvider#provider_id}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.workforcePoolId"></a>

- *Type:* java.lang.String

The ID to use for the pool, which becomes the final component of the resource name.

The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.
It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#workforce_pool_id IamWorkforcePoolProvider#workforce_pool_id}

---

##### `attributeCondition`<sup>Optional</sup> <a name="attributeCondition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.attributeCondition"></a>

- *Type:* java.lang.String

A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:

* 'assertion': JSON representing the authentication credential issued by the provider.
* 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
  'google.profile_photo' and 'google.display_name' are not supported.
* 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters.
If unspecified, all valid authentication credentials will be accepted.

The following example shows how to only allow credentials with a mapped 'google.groups' value of 'admins':

```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#attribute_condition IamWorkforcePoolProvider#attribute_condition}

---

##### `attributeMapping`<sup>Optional</sup> <a name="attributeMapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.attributeMapping"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:

* 'google.subject': The principal IAM is authenticating. You can reference this value in IAM bindings.
  This is also the subject that appears in Cloud Logging logs. This is a required field and
  the mapped subject cannot exceed 127 bytes.
* 'google.groups': Groups the authenticating user belongs to. You can grant groups access to
  resources using an IAM 'principalSet' binding; access applies to all members of the group.
* 'google.display_name': The name of the authenticated user. This is an optional field and
  the mapped display name cannot exceed 100 bytes. If not set, 'google.subject' will be displayed instead.
  This attribute cannot be referenced in IAM bindings.
* 'google.profile_photo': The URL that specifies the authenticated user's thumbnail photo.
  This is an optional field. When set, the image will be visible as the user's profile picture.
  If not set, a generic user icon will be displayed instead.
  This attribute cannot be referenced in IAM bindings.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}', where {custom_attribute}
is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.
The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a workforce pool
to Google Cloud resources. For example:

* 'google.subject':
  'principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}'
* 'google.groups':
  'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}'
* 'attribute.{custom_attribute}':
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#attribute_mapping IamWorkforcePoolProvider#attribute_mapping}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#description IamWorkforcePoolProvider#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#disabled IamWorkforcePoolProvider#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A user-specified display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#display_name IamWorkforcePoolProvider#display_name}

---

##### `extraAttributesOauth2Client`<sup>Optional</sup> <a name="extraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.extraAttributesOauth2Client"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

extra_attributes_oauth2_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#extra_attributes_oauth2_client IamWorkforcePoolProvider#extra_attributes_oauth2_client}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.oidc"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#oidc IamWorkforcePoolProvider#oidc}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.saml"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#saml IamWorkforcePoolProvider#saml}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#timeouts IamWorkforcePoolProvider#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putExtraAttributesOauth2Client">putExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc">putOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeCondition">resetAttributeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeMapping">resetAttributeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetExtraAttributesOauth2Client">resetExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOidc">resetOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtraAttributesOauth2Client` <a name="putExtraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putExtraAttributesOauth2Client"></a>

```java
public void putExtraAttributesOauth2Client(IamWorkforcePoolProviderExtraAttributesOauth2Client value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putExtraAttributesOauth2Client.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---

##### `putOidc` <a name="putOidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc"></a>

```java
public void putOidc(IamWorkforcePoolProviderOidc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putSaml"></a>

```java
public void putSaml(IamWorkforcePoolProviderSaml value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts"></a>

```java
public void putTimeouts(IamWorkforcePoolProviderTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

---

##### `resetAttributeCondition` <a name="resetAttributeCondition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeCondition"></a>

```java
public void resetAttributeCondition()
```

##### `resetAttributeMapping` <a name="resetAttributeMapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeMapping"></a>

```java
public void resetAttributeMapping()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExtraAttributesOauth2Client` <a name="resetExtraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetExtraAttributesOauth2Client"></a>

```java
public void resetExtraAttributesOauth2Client()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetId"></a>

```java
public void resetId()
```

##### `resetOidc` <a name="resetOidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOidc"></a>

```java
public void resetOidc()
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetSaml"></a>

```java
public void resetSaml()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamWorkforcePoolProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProvider;

IamWorkforcePoolProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProvider;

IamWorkforcePoolProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProvider;

IamWorkforcePoolProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProvider;

IamWorkforcePoolProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamWorkforcePoolProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IamWorkforcePoolProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamWorkforcePoolProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamWorkforcePoolProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkforcePoolProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.extraAttributesOauth2Client">extraAttributesOauth2Client</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference">IamWorkforcePoolProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference">IamWorkforcePoolProviderSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference">IamWorkforcePoolProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeConditionInput">attributeConditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMappingInput">attributeMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.extraAttributesOauth2ClientInput">extraAttributesOauth2ClientInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidcInput">oidcInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerIdInput">providerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.samlInput">samlInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeCondition">attributeCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMapping">attributeMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerId">providerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `extraAttributesOauth2Client`<sup>Required</sup> <a name="extraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.extraAttributesOauth2Client"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference getExtraAttributesOauth2Client();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidc"></a>

```java
public IamWorkforcePoolProviderOidcOutputReference getOidc();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference">IamWorkforcePoolProviderOidcOutputReference</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.saml"></a>

```java
public IamWorkforcePoolProviderSamlOutputReference getSaml();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference">IamWorkforcePoolProviderSamlOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeouts"></a>

```java
public IamWorkforcePoolProviderTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference">IamWorkforcePoolProviderTimeoutsOutputReference</a>

---

##### `attributeConditionInput`<sup>Optional</sup> <a name="attributeConditionInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeConditionInput"></a>

```java
public java.lang.String getAttributeConditionInput();
```

- *Type:* java.lang.String

---

##### `attributeMappingInput`<sup>Optional</sup> <a name="attributeMappingInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributeMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `extraAttributesOauth2ClientInput`<sup>Optional</sup> <a name="extraAttributesOauth2ClientInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.extraAttributesOauth2ClientInput"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2Client getExtraAttributesOauth2ClientInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `oidcInput`<sup>Optional</sup> <a name="oidcInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidcInput"></a>

```java
public IamWorkforcePoolProviderOidc getOidcInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerIdInput"></a>

```java
public java.lang.String getProviderIdInput();
```

- *Type:* java.lang.String

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.samlInput"></a>

```java
public IamWorkforcePoolProviderSaml getSamlInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolIdInput"></a>

```java
public java.lang.String getWorkforcePoolIdInput();
```

- *Type:* java.lang.String

---

##### `attributeCondition`<sup>Required</sup> <a name="attributeCondition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeCondition"></a>

```java
public java.lang.String getAttributeCondition();
```

- *Type:* java.lang.String

---

##### `attributeMapping`<sup>Required</sup> <a name="attributeMapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributeMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolId"></a>

```java
public java.lang.String getWorkforcePoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolProviderConfig <a name="IamWorkforcePoolProviderConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderConfig;

IamWorkforcePoolProviderConfig.builder()
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
    .location(java.lang.String)
    .providerId(java.lang.String)
    .workforcePoolId(java.lang.String)
//  .attributeCondition(java.lang.String)
//  .attributeMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .displayName(java.lang.String)
//  .extraAttributesOauth2Client(IamWorkforcePoolProviderExtraAttributesOauth2Client)
//  .id(java.lang.String)
//  .oidc(IamWorkforcePoolProviderOidc)
//  .saml(IamWorkforcePoolProviderSaml)
//  .timeouts(IamWorkforcePoolProviderTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.providerId">providerId</a></code> | <code>java.lang.String</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeCondition">attributeCondition</a></code> | <code>java.lang.String</code> | A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeMapping">attributeMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.description">description</a></code> | <code>java.lang.String</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-specified display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.extraAttributesOauth2Client">extraAttributesOauth2Client</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | extra_attributes_oauth2_client block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#location IamWorkforcePoolProvider#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

The ID for the provider, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#provider_id IamWorkforcePoolProvider#provider_id}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.workforcePoolId"></a>

```java
public java.lang.String getWorkforcePoolId();
```

- *Type:* java.lang.String

The ID to use for the pool, which becomes the final component of the resource name.

The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.
It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#workforce_pool_id IamWorkforcePoolProvider#workforce_pool_id}

---

##### `attributeCondition`<sup>Optional</sup> <a name="attributeCondition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeCondition"></a>

```java
public java.lang.String getAttributeCondition();
```

- *Type:* java.lang.String

A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:

* 'assertion': JSON representing the authentication credential issued by the provider.
* 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
  'google.profile_photo' and 'google.display_name' are not supported.
* 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters.
If unspecified, all valid authentication credentials will be accepted.

The following example shows how to only allow credentials with a mapped 'google.groups' value of 'admins':

```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#attribute_condition IamWorkforcePoolProvider#attribute_condition}

---

##### `attributeMapping`<sup>Optional</sup> <a name="attributeMapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributeMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:

* 'google.subject': The principal IAM is authenticating. You can reference this value in IAM bindings.
  This is also the subject that appears in Cloud Logging logs. This is a required field and
  the mapped subject cannot exceed 127 bytes.
* 'google.groups': Groups the authenticating user belongs to. You can grant groups access to
  resources using an IAM 'principalSet' binding; access applies to all members of the group.
* 'google.display_name': The name of the authenticated user. This is an optional field and
  the mapped display name cannot exceed 100 bytes. If not set, 'google.subject' will be displayed instead.
  This attribute cannot be referenced in IAM bindings.
* 'google.profile_photo': The URL that specifies the authenticated user's thumbnail photo.
  This is an optional field. When set, the image will be visible as the user's profile picture.
  If not set, a generic user icon will be displayed instead.
  This attribute cannot be referenced in IAM bindings.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}', where {custom_attribute}
is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.
The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a workforce pool
to Google Cloud resources. For example:

* 'google.subject':
  'principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}'
* 'google.groups':
  'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}'
* 'attribute.{custom_attribute}':
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#attribute_mapping IamWorkforcePoolProvider#attribute_mapping}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#description IamWorkforcePoolProvider#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#disabled IamWorkforcePoolProvider#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A user-specified display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#display_name IamWorkforcePoolProvider#display_name}

---

##### `extraAttributesOauth2Client`<sup>Optional</sup> <a name="extraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.extraAttributesOauth2Client"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2Client getExtraAttributesOauth2Client();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

extra_attributes_oauth2_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#extra_attributes_oauth2_client IamWorkforcePoolProvider#extra_attributes_oauth2_client}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.oidc"></a>

```java
public IamWorkforcePoolProviderOidc getOidc();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#oidc IamWorkforcePoolProvider#oidc}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.saml"></a>

```java
public IamWorkforcePoolProviderSaml getSaml();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#saml IamWorkforcePoolProvider#saml}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.timeouts"></a>

```java
public IamWorkforcePoolProviderTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#timeouts IamWorkforcePoolProvider#timeouts}

---

### IamWorkforcePoolProviderExtraAttributesOauth2Client <a name="IamWorkforcePoolProviderExtraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderExtraAttributesOauth2Client;

IamWorkforcePoolProviderExtraAttributesOauth2Client.builder()
    .attributesType(java.lang.String)
    .clientId(java.lang.String)
    .clientSecret(IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret)
    .issuerUri(java.lang.String)
//  .queryParameters(IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.attributesType">attributesType</a></code> | <code>java.lang.String</code> | Represents the IdP and type of claims that should be fetched. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the Access Token using client credentials grant flow. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | client_secret block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | The OIDC identity provider's issuer URI. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.queryParameters">queryParameters</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | query_parameters block. |

---

##### `attributesType`<sup>Required</sup> <a name="attributesType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.attributesType"></a>

```java
public java.lang.String getAttributesType();
```

- *Type:* java.lang.String

Represents the IdP and type of claims that should be fetched.

* AZURE_AD_GROUPS_MAIL: Used to get the user's group claims from the Azure AD identity provider using configuration provided
  in ExtraAttributesOAuth2Client and 'mail' property of the 'microsoft.graph.group' object is used for claim mapping.
  See https://learn.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0#properties for more details on
  'microsoft.graph.group' properties. The attributes obtained from idntity provider are mapped to 'assertion.groups'.
* AZURE_AD_GROUPS_ID:  Used to get the user's group claims from the Azure AD identity provider
  using configuration provided in ExtraAttributesOAuth2Client and 'id'
  property of the 'microsoft.graph.group' object is used for claim mapping. See
  https://learn.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0#properties
  for more details on 'microsoft.graph.group' properties. The
  group IDs obtained from Azure AD are present in 'assertion.groups' for
  OIDC providers and 'assertion.attributes.groups' for SAML providers for
  attribute mapping. Possible values: ["AZURE_AD_GROUPS_MAIL", "AZURE_AD_GROUPS_ID"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#attributes_type IamWorkforcePoolProvider#attributes_type}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the Access Token using client credentials grant flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#client_id IamWorkforcePoolProvider#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientSecret"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret getClientSecret();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#client_secret IamWorkforcePoolProvider#client_secret}

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

The OIDC identity provider's issuer URI.

Must be a valid URI using the 'https' scheme. Required to get the OIDC discovery document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#issuer_uri IamWorkforcePoolProvider#issuer_uri}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.queryParameters"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters getQueryParameters();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

query_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#query_parameters IamWorkforcePoolProvider#query_parameters}

---

### IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret;

IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.builder()
//  .value(IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.property.value">value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | value block. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.property.value"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue getValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#value IamWorkforcePoolProvider#value}

---

### IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue;

IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.builder()
    .plainText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.property.plainText">plainText</a></code> | <code>java.lang.String</code> | The plain text of the client secret value. |

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.property.plainText"></a>

```java
public java.lang.String getPlainText();
```

- *Type:* java.lang.String

The plain text of the client secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#plain_text IamWorkforcePoolProvider#plain_text}

---

### IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters;

IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.builder()
//  .filter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter used to request specific records from IdP. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter used to request specific records from IdP.

In case of attributes type as AZURE_AD_GROUPS_MAIL and AZURE_AD_GROUPS_ID, it represents the
filter used to request specific groups for users from IdP. By default, all of the groups associated with the user are fetched. The
groups should be security enabled. See https://learn.microsoft.com/en-us/graph/search-query-parameter for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#filter IamWorkforcePoolProvider#filter}

---

### IamWorkforcePoolProviderOidc <a name="IamWorkforcePoolProviderOidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderOidc;

IamWorkforcePoolProviderOidc.builder()
    .clientId(java.lang.String)
    .issuerUri(java.lang.String)
//  .clientSecret(IamWorkforcePoolProviderOidcClientSecret)
//  .jwksJson(java.lang.String)
//  .webSsoConfig(IamWorkforcePoolProviderOidcWebSsoConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID. Must match the audience claim of the JWT issued by the identity provider. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | The OIDC issuer URI. Must be a valid URI using the 'https' scheme. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a></code> | client_secret block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | OIDC JWKs in JSON String format. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.webSsoConfig">webSsoConfig</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a></code> | web_sso_config block. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID. Must match the audience claim of the JWT issued by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#client_id IamWorkforcePoolProvider#client_id}

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

The OIDC issuer URI. Must be a valid URI using the 'https' scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#issuer_uri IamWorkforcePoolProvider#issuer_uri}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientSecret"></a>

```java
public IamWorkforcePoolProviderOidcClientSecret getClientSecret();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#client_secret IamWorkforcePoolProvider#client_secret}

---

##### `jwksJson`<sup>Optional</sup> <a name="jwksJson" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.jwksJson"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#jwks_json IamWorkforcePoolProvider#jwks_json}

---

##### `webSsoConfig`<sup>Optional</sup> <a name="webSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.webSsoConfig"></a>

```java
public IamWorkforcePoolProviderOidcWebSsoConfig getWebSsoConfig();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

web_sso_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#web_sso_config IamWorkforcePoolProvider#web_sso_config}

---

### IamWorkforcePoolProviderOidcClientSecret <a name="IamWorkforcePoolProviderOidcClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderOidcClientSecret;

IamWorkforcePoolProviderOidcClientSecret.builder()
//  .value(IamWorkforcePoolProviderOidcClientSecretValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret.property.value">value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a></code> | value block. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret.property.value"></a>

```java
public IamWorkforcePoolProviderOidcClientSecretValue getValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#value IamWorkforcePoolProvider#value}

---

### IamWorkforcePoolProviderOidcClientSecretValue <a name="IamWorkforcePoolProviderOidcClientSecretValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderOidcClientSecretValue;

IamWorkforcePoolProviderOidcClientSecretValue.builder()
    .plainText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue.property.plainText">plainText</a></code> | <code>java.lang.String</code> | The plain text of the client secret value. |

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue.property.plainText"></a>

```java
public java.lang.String getPlainText();
```

- *Type:* java.lang.String

The plain text of the client secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#plain_text IamWorkforcePoolProvider#plain_text}

---

### IamWorkforcePoolProviderOidcWebSsoConfig <a name="IamWorkforcePoolProviderOidcWebSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderOidcWebSsoConfig;

IamWorkforcePoolProviderOidcWebSsoConfig.builder()
    .assertionClaimsBehavior(java.lang.String)
    .responseType(java.lang.String)
//  .additionalScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.assertionClaimsBehavior">assertionClaimsBehavior</a></code> | <code>java.lang.String</code> | The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.responseType">responseType</a></code> | <code>java.lang.String</code> | The Response Type to request for in the OIDC Authorization Request for web sign-in. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.additionalScopes">additionalScopes</a></code> | <code>java.util.List<java.lang.String></code> | Additional scopes to request for in the OIDC authentication request on top of scopes requested by default. |

---

##### `assertionClaimsBehavior`<sup>Required</sup> <a name="assertionClaimsBehavior" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.assertionClaimsBehavior"></a>

```java
public java.lang.String getAssertionClaimsBehavior();
```

- *Type:* java.lang.String

The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition.

* MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS: Merge the UserInfo Endpoint Claims with ID Token Claims, preferring UserInfo Claim Values for the same Claim Name. This option is available only for the Authorization Code Flow.
* ONLY_ID_TOKEN_CLAIMS: Only include ID Token Claims. Possible values: ["MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS", "ONLY_ID_TOKEN_CLAIMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#assertion_claims_behavior IamWorkforcePoolProvider#assertion_claims_behavior}

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.responseType"></a>

```java
public java.lang.String getResponseType();
```

- *Type:* java.lang.String

The Response Type to request for in the OIDC Authorization Request for web sign-in.

The 'CODE' Response Type is recommended to avoid the Implicit Flow, for security reasons.

* CODE: The 'response_type=code' selection uses the Authorization Code Flow for web sign-in. Requires a configured client secret.
* ID_TOKEN: The 'response_type=id_token' selection uses the Implicit Flow for web sign-in. Possible values: ["CODE", "ID_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#response_type IamWorkforcePoolProvider#response_type}

---

##### `additionalScopes`<sup>Optional</sup> <a name="additionalScopes" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.additionalScopes"></a>

```java
public java.util.List<java.lang.String> getAdditionalScopes();
```

- *Type:* java.util.List<java.lang.String>

Additional scopes to request for in the OIDC authentication request on top of scopes requested by default.

By default, the 'openid', 'profile' and 'email' scopes that are supported by the identity provider are requested.
Each additional scope may be at most 256 characters. A maximum of 10 additional scopes may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#additional_scopes IamWorkforcePoolProvider#additional_scopes}

---

### IamWorkforcePoolProviderSaml <a name="IamWorkforcePoolProviderSaml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderSaml;

IamWorkforcePoolProviderSaml.builder()
    .idpMetadataXml(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml.property.idpMetadataXml">idpMetadataXml</a></code> | <code>java.lang.String</code> | SAML Identity provider configuration metadata xml doc. |

---

##### `idpMetadataXml`<sup>Required</sup> <a name="idpMetadataXml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml.property.idpMetadataXml"></a>

```java
public java.lang.String getIdpMetadataXml();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#idp_metadata_xml IamWorkforcePoolProvider#idp_metadata_xml}

---

### IamWorkforcePoolProviderTimeouts <a name="IamWorkforcePoolProviderTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderTimeouts;

IamWorkforcePoolProviderTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#create IamWorkforcePoolProvider#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#delete IamWorkforcePoolProvider#delete}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#update IamWorkforcePoolProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#create IamWorkforcePoolProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#delete IamWorkforcePoolProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workforce_pool_provider#update IamWorkforcePoolProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference;

new IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue"></a>

```java
public void putValue(IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.value"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference getValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.valueInput"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue getValueInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.internalValue"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---


### IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference;

new IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainTextInput">plainTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainText">plainText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `plainTextInput`<sup>Optional</sup> <a name="plainTextInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainTextInput"></a>

```java
public java.lang.String getPlainTextInput();
```

- *Type:* java.lang.String

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainText"></a>

```java
public java.lang.String getPlainText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.internalValue"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---


### IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference;

new IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret">putClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters">putQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientSecret` <a name="putClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret"></a>

```java
public void putClientSecret(IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---

##### `putQueryParameters` <a name="putQueryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters"></a>

```java
public void putQueryParameters(IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resetQueryParameters"></a>

```java
public void resetQueryParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParameters">queryParameters</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesTypeInput">attributesTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParametersInput">queryParametersInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesType">attributesType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecret"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference getClientSecret();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference</a>

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParameters"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference getQueryParameters();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference</a>

---

##### `attributesTypeInput`<sup>Optional</sup> <a name="attributesTypeInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesTypeInput"></a>

```java
public java.lang.String getAttributesTypeInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecretInput"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret getClientSecretInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUriInput"></a>

```java
public java.lang.String getIssuerUriInput();
```

- *Type:* java.lang.String

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParametersInput"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters getQueryParametersInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---

##### `attributesType`<sup>Required</sup> <a name="attributesType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesType"></a>

```java
public java.lang.String getAttributesType();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.internalValue"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2Client getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---


### IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference;

new IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resetFilter"></a>

```java
public void resetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.internalValue"></a>

```java
public IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---


### IamWorkforcePoolProviderOidcClientSecretOutputReference <a name="IamWorkforcePoolProviderOidcClientSecretOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderOidcClientSecretOutputReference;

new IamWorkforcePoolProviderOidcClientSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.putValue"></a>

```java
public void putValue(IamWorkforcePoolProviderOidcClientSecretValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference">IamWorkforcePoolProviderOidcClientSecretValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.value"></a>

```java
public IamWorkforcePoolProviderOidcClientSecretValueOutputReference getValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference">IamWorkforcePoolProviderOidcClientSecretValueOutputReference</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.valueInput"></a>

```java
public IamWorkforcePoolProviderOidcClientSecretValue getValueInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.internalValue"></a>

```java
public IamWorkforcePoolProviderOidcClientSecret getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a>

---


### IamWorkforcePoolProviderOidcClientSecretValueOutputReference <a name="IamWorkforcePoolProviderOidcClientSecretValueOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference;

new IamWorkforcePoolProviderOidcClientSecretValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainTextInput">plainTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainText">plainText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `plainTextInput`<sup>Optional</sup> <a name="plainTextInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainTextInput"></a>

```java
public java.lang.String getPlainTextInput();
```

- *Type:* java.lang.String

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainText"></a>

```java
public java.lang.String getPlainText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.internalValue"></a>

```java
public IamWorkforcePoolProviderOidcClientSecretValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a>

---


### IamWorkforcePoolProviderOidcOutputReference <a name="IamWorkforcePoolProviderOidcOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderOidcOutputReference;

new IamWorkforcePoolProviderOidcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putClientSecret">putClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig">putWebSsoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetJwksJson">resetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetWebSsoConfig">resetWebSsoConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientSecret` <a name="putClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putClientSecret"></a>

```java
public void putClientSecret(IamWorkforcePoolProviderOidcClientSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a>

---

##### `putWebSsoConfig` <a name="putWebSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig"></a>

```java
public void putWebSsoConfig(IamWorkforcePoolProviderOidcWebSsoConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

---

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetJwksJson` <a name="resetJwksJson" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetJwksJson"></a>

```java
public void resetJwksJson()
```

##### `resetWebSsoConfig` <a name="resetWebSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetWebSsoConfig"></a>

```java
public void resetWebSsoConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference">IamWorkforcePoolProviderOidcClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfig">webSsoConfig</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference">IamWorkforcePoolProviderOidcWebSsoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.jwksJsonInput">jwksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfigInput">webSsoConfigInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientSecret"></a>

```java
public IamWorkforcePoolProviderOidcClientSecretOutputReference getClientSecret();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference">IamWorkforcePoolProviderOidcClientSecretOutputReference</a>

---

##### `webSsoConfig`<sup>Required</sup> <a name="webSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfig"></a>

```java
public IamWorkforcePoolProviderOidcWebSsoConfigOutputReference getWebSsoConfig();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference">IamWorkforcePoolProviderOidcWebSsoConfigOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientSecretInput"></a>

```java
public IamWorkforcePoolProviderOidcClientSecret getClientSecretInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a>

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUriInput"></a>

```java
public java.lang.String getIssuerUriInput();
```

- *Type:* java.lang.String

---

##### `jwksJsonInput`<sup>Optional</sup> <a name="jwksJsonInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.jwksJsonInput"></a>

```java
public java.lang.String getJwksJsonInput();
```

- *Type:* java.lang.String

---

##### `webSsoConfigInput`<sup>Optional</sup> <a name="webSsoConfigInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfigInput"></a>

```java
public IamWorkforcePoolProviderOidcWebSsoConfig getWebSsoConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.internalValue"></a>

```java
public IamWorkforcePoolProviderOidc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

---


### IamWorkforcePoolProviderOidcWebSsoConfigOutputReference <a name="IamWorkforcePoolProviderOidcWebSsoConfigOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference;

new IamWorkforcePoolProviderOidcWebSsoConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resetAdditionalScopes">resetAdditionalScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalScopes` <a name="resetAdditionalScopes" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resetAdditionalScopes"></a>

```java
public void resetAdditionalScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopesInput">additionalScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehaviorInput">assertionClaimsBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseTypeInput">responseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopes">additionalScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehavior">assertionClaimsBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseType">responseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalScopesInput`<sup>Optional</sup> <a name="additionalScopesInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopesInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assertionClaimsBehaviorInput`<sup>Optional</sup> <a name="assertionClaimsBehaviorInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehaviorInput"></a>

```java
public java.lang.String getAssertionClaimsBehaviorInput();
```

- *Type:* java.lang.String

---

##### `responseTypeInput`<sup>Optional</sup> <a name="responseTypeInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseTypeInput"></a>

```java
public java.lang.String getResponseTypeInput();
```

- *Type:* java.lang.String

---

##### `additionalScopes`<sup>Required</sup> <a name="additionalScopes" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopes"></a>

```java
public java.util.List<java.lang.String> getAdditionalScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assertionClaimsBehavior`<sup>Required</sup> <a name="assertionClaimsBehavior" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehavior"></a>

```java
public java.lang.String getAssertionClaimsBehavior();
```

- *Type:* java.lang.String

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseType"></a>

```java
public java.lang.String getResponseType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.internalValue"></a>

```java
public IamWorkforcePoolProviderOidcWebSsoConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

---


### IamWorkforcePoolProviderSamlOutputReference <a name="IamWorkforcePoolProviderSamlOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderSamlOutputReference;

new IamWorkforcePoolProviderSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXmlInput">idpMetadataXmlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXml">idpMetadataXml</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idpMetadataXmlInput`<sup>Optional</sup> <a name="idpMetadataXmlInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXmlInput"></a>

```java
public java.lang.String getIdpMetadataXmlInput();
```

- *Type:* java.lang.String

---

##### `idpMetadataXml`<sup>Required</sup> <a name="idpMetadataXml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXml"></a>

```java
public java.lang.String getIdpMetadataXml();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.internalValue"></a>

```java
public IamWorkforcePoolProviderSaml getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

---


### IamWorkforcePoolProviderTimeoutsOutputReference <a name="IamWorkforcePoolProviderTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider.IamWorkforcePoolProviderTimeoutsOutputReference;

new IamWorkforcePoolProviderTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

---



