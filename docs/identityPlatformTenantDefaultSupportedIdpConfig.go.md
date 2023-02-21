# `identityPlatformTenantDefaultSupportedIdpConfig` Submodule <a name="`identityPlatformTenantDefaultSupportedIdpConfig` Submodule" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformTenantDefaultSupportedIdpConfig <a name="IdentityPlatformTenantDefaultSupportedIdpConfig" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config google_identity_platform_tenant_default_supported_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantdefaultsupportedidpconfig"

identityplatformtenantdefaultsupportedidpconfig.NewIdentityPlatformTenantDefaultSupportedIdpConfig(scope Construct, id *string, config IdentityPlatformTenantDefaultSupportedIdpConfigConfig) IdentityPlatformTenantDefaultSupportedIdpConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig">IdentityPlatformTenantDefaultSupportedIdpConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig">IdentityPlatformTenantDefaultSupportedIdpConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts"></a>

```go
func PutTimeouts(value IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantdefaultsupportedidpconfig"

identityplatformtenantdefaultsupportedidpconfig.IdentityPlatformTenantDefaultSupportedIdpConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantdefaultsupportedidpconfig"

identityplatformtenantdefaultsupportedidpconfig.IdentityPlatformTenantDefaultSupportedIdpConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantdefaultsupportedidpconfig"

identityplatformtenantdefaultsupportedidpconfig.IdentityPlatformTenantDefaultSupportedIdpConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference">IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idpIdInput">IdpIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tenantInput">TenantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idpId">IdpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tenant">Tenant</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.timeouts"></a>

```go
func Timeouts() IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference">IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdpIdInput`<sup>Optional</sup> <a name="IdpIdInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idpIdInput"></a>

```go
func IdpIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tenantInput"></a>

```go
func TenantInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idpId"></a>

```go
func IdpId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tenant"></a>

```go
func Tenant() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformTenantDefaultSupportedIdpConfigConfig <a name="IdentityPlatformTenantDefaultSupportedIdpConfigConfig" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantdefaultsupportedidpconfig"

&identityplatformtenantdefaultsupportedidpconfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientId: *string,
	ClientSecret: *string,
	IdpId: *string,
	Tenant: *string,
	Enabled: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientId">ClientId</a></code> | <code>*string</code> | OAuth client ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | OAuth client secret. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.idpId">IdpId</a></code> | <code>*string</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.tenant">Tenant</a></code> | <code>*string</code> | The name of the tenant where this DefaultSupportedIdpConfig resource exists. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#id IdentityPlatformTenantDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#project IdentityPlatformTenantDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

OAuth client ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#client_id IdentityPlatformTenantDefaultSupportedIdpConfig#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

OAuth client secret.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#client_secret IdentityPlatformTenantDefaultSupportedIdpConfig#client_secret}

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.idpId"></a>

```go
IdpId *string
```

- *Type:* *string

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#idp_id IdentityPlatformTenantDefaultSupportedIdpConfig#idp_id}

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.tenant"></a>

```go
Tenant *string
```

- *Type:* *string

The name of the tenant where this DefaultSupportedIdpConfig resource exists.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#tenant IdentityPlatformTenantDefaultSupportedIdpConfig#tenant}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#enabled IdentityPlatformTenantDefaultSupportedIdpConfig#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#id IdentityPlatformTenantDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#project IdentityPlatformTenantDefaultSupportedIdpConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.timeouts"></a>

```go
Timeouts IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#timeouts IdentityPlatformTenantDefaultSupportedIdpConfig#timeouts}

---

### IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts <a name="IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantdefaultsupportedidpconfig"

&identityplatformtenantdefaultsupportedidpconfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#create IdentityPlatformTenantDefaultSupportedIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#delete IdentityPlatformTenantDefaultSupportedIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#update IdentityPlatformTenantDefaultSupportedIdpConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#create IdentityPlatformTenantDefaultSupportedIdpConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#delete IdentityPlatformTenantDefaultSupportedIdpConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config#update IdentityPlatformTenantDefaultSupportedIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference <a name="IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformtenantdefaultsupportedidpconfig"

identityplatformtenantdefaultsupportedidpconfig.NewIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



