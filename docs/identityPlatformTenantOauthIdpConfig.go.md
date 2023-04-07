# `identityPlatformTenantOauthIdpConfig` Submodule <a name="`identityPlatformTenantOauthIdpConfig` Submodule" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformTenantOauthIdpConfig <a name="IdentityPlatformTenantOauthIdpConfig" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config google_identity_platform_tenant_oauth_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantoauthidpconfig"

identityplatformtenantoauthidpconfig.NewIdentityPlatformTenantOauthIdpConfig(scope Construct, id *string, config IdentityPlatformTenantOauthIdpConfigConfig) IdentityPlatformTenantOauthIdpConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig">IdentityPlatformTenantOauthIdpConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig">IdentityPlatformTenantOauthIdpConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.putTimeouts"></a>

```go
func PutTimeouts(value IdentityPlatformTenantOauthIdpConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a>

---

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantoauthidpconfig"

identityplatformtenantoauthidpconfig.IdentityPlatformTenantOauthIdpConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantoauthidpconfig"

identityplatformtenantoauthidpconfig.IdentityPlatformTenantOauthIdpConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantoauthidpconfig"

identityplatformtenantoauthidpconfig.IdentityPlatformTenantOauthIdpConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference">IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tenantInput">TenantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tenant">Tenant</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.timeouts"></a>

```go
func Timeouts() IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference">IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tenantInput"></a>

```go
func TenantInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tenant"></a>

```go
func Tenant() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformTenantOauthIdpConfigConfig <a name="IdentityPlatformTenantOauthIdpConfigConfig" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantoauthidpconfig"

&identityplatformtenantoauthidpconfig.IdentityPlatformTenantOauthIdpConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientId: *string,
	DisplayName: *string,
	Issuer: *string,
	Name: *string,
	Tenant: *string,
	ClientSecret: *string,
	Enabled: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client id of an OAuth client. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.issuer">Issuer</a></code> | <code>*string</code> | For OIDC Idps, the issuer identifier. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.name">Name</a></code> | <code>*string</code> | The name of the OauthIdpConfig. Must start with 'oidc.'. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.tenant">Tenant</a></code> | <code>*string</code> | The name of the tenant where this OIDC IDP configuration resource exists. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret of the OAuth client, to enable OIDC code flow. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#id IdentityPlatformTenantOauthIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#project IdentityPlatformTenantOauthIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client id of an OAuth client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#client_id IdentityPlatformTenantOauthIdpConfig#client_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human friendly display name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#display_name IdentityPlatformTenantOauthIdpConfig#display_name}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

For OIDC Idps, the issuer identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#issuer IdentityPlatformTenantOauthIdpConfig#issuer}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the OauthIdpConfig. Must start with 'oidc.'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#name IdentityPlatformTenantOauthIdpConfig#name}

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.tenant"></a>

```go
Tenant *string
```

- *Type:* *string

The name of the tenant where this OIDC IDP configuration resource exists.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#tenant IdentityPlatformTenantOauthIdpConfig#tenant}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret of the OAuth client, to enable OIDC code flow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#client_secret IdentityPlatformTenantOauthIdpConfig#client_secret}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#enabled IdentityPlatformTenantOauthIdpConfig#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#id IdentityPlatformTenantOauthIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#project IdentityPlatformTenantOauthIdpConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.timeouts"></a>

```go
Timeouts IdentityPlatformTenantOauthIdpConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#timeouts IdentityPlatformTenantOauthIdpConfig#timeouts}

---

### IdentityPlatformTenantOauthIdpConfigTimeouts <a name="IdentityPlatformTenantOauthIdpConfigTimeouts" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantoauthidpconfig"

&identityplatformtenantoauthidpconfig.IdentityPlatformTenantOauthIdpConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#create IdentityPlatformTenantOauthIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#delete IdentityPlatformTenantOauthIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#update IdentityPlatformTenantOauthIdpConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#create IdentityPlatformTenantOauthIdpConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#delete IdentityPlatformTenantOauthIdpConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config#update IdentityPlatformTenantOauthIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference <a name="IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantoauthidpconfig"

identityplatformtenantoauthidpconfig.NewIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



