# `identityPlatformInboundSamlConfig` Submodule <a name="`identityPlatformInboundSamlConfig` Submodule" id="@cdktf/provider-google.identityPlatformInboundSamlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformInboundSamlConfig <a name="IdentityPlatformInboundSamlConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config google_identity_platform_inbound_saml_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

identityplatforminboundsamlconfig.NewIdentityPlatformInboundSamlConfig(scope Construct, id *string, config IdentityPlatformInboundSamlConfigConfig) IdentityPlatformInboundSamlConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig">IdentityPlatformInboundSamlConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig">IdentityPlatformInboundSamlConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putIdpConfig">PutIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putSpConfig">PutSpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIdpConfig` <a name="PutIdpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putIdpConfig"></a>

```go
func PutIdpConfig(value IdentityPlatformInboundSamlConfigIdpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

---

##### `PutSpConfig` <a name="PutSpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putSpConfig"></a>

```go
func PutSpConfig(value IdentityPlatformInboundSamlConfigSpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putSpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putTimeouts"></a>

```go
func PutTimeouts(value IdentityPlatformInboundSamlConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

identityplatforminboundsamlconfig.IdentityPlatformInboundSamlConfig_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

identityplatforminboundsamlconfig.IdentityPlatformInboundSamlConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

identityplatforminboundsamlconfig.IdentityPlatformInboundSamlConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference">IdentityPlatformInboundSamlConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.spConfig">SpConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference">IdentityPlatformInboundSamlConfigSpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference">IdentityPlatformInboundSamlConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idpConfigInput">IdpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.spConfigInput">SpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idpConfig"></a>

```go
func IdpConfig() IdentityPlatformInboundSamlConfigIdpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference">IdentityPlatformInboundSamlConfigIdpConfigOutputReference</a>

---

##### `SpConfig`<sup>Required</sup> <a name="SpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.spConfig"></a>

```go
func SpConfig() IdentityPlatformInboundSamlConfigSpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference">IdentityPlatformInboundSamlConfigSpConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.timeouts"></a>

```go
func Timeouts() IdentityPlatformInboundSamlConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference">IdentityPlatformInboundSamlConfigTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdpConfigInput`<sup>Optional</sup> <a name="IdpConfigInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idpConfigInput"></a>

```go
func IdpConfigInput() IdentityPlatformInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SpConfigInput`<sup>Optional</sup> <a name="SpConfigInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.spConfigInput"></a>

```go
func SpConfigInput() IdentityPlatformInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformInboundSamlConfigConfig <a name="IdentityPlatformInboundSamlConfigConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

&identityplatforminboundsamlconfig.IdentityPlatformInboundSamlConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	IdpConfig: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig,
	Name: *string,
	SpConfig: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig,
	Enabled: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.name">Name</a></code> | <code>*string</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.spConfig">SpConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#id IdentityPlatformInboundSamlConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#project IdentityPlatformInboundSamlConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human friendly display name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#display_name IdentityPlatformInboundSamlConfig#display_name}

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.idpConfig"></a>

```go
IdpConfig IdentityPlatformInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#idp_config IdentityPlatformInboundSamlConfig#idp_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#name IdentityPlatformInboundSamlConfig#name}

---

##### `SpConfig`<sup>Required</sup> <a name="SpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.spConfig"></a>

```go
SpConfig IdentityPlatformInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#sp_config IdentityPlatformInboundSamlConfig#sp_config}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#enabled IdentityPlatformInboundSamlConfig#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#id IdentityPlatformInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#project IdentityPlatformInboundSamlConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.timeouts"></a>

```go
Timeouts IdentityPlatformInboundSamlConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#timeouts IdentityPlatformInboundSamlConfig#timeouts}

---

### IdentityPlatformInboundSamlConfigIdpConfig <a name="IdentityPlatformInboundSamlConfigIdpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

&identityplatforminboundsamlconfig.IdentityPlatformInboundSamlConfigIdpConfig {
	IdpCertificates: interface{},
	IdpEntityId: *string,
	SsoUrl: *string,
	SignRequest: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.idpCertificates">IdpCertificates</a></code> | <code>interface{}</code> | idp_certificates block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.idpEntityId">IdpEntityId</a></code> | <code>*string</code> | Unique identifier for all SAML entities. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | URL to send Authentication request to. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.signRequest">SignRequest</a></code> | <code>interface{}</code> | Indicates if outbounding SAMLRequest should be signed. |

---

##### `IdpCertificates`<sup>Required</sup> <a name="IdpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.idpCertificates"></a>

```go
IdpCertificates interface{}
```

- *Type:* interface{}

idp_certificates block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#idp_certificates IdentityPlatformInboundSamlConfig#idp_certificates}

---

##### `IdpEntityId`<sup>Required</sup> <a name="IdpEntityId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.idpEntityId"></a>

```go
IdpEntityId *string
```

- *Type:* *string

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#idp_entity_id IdentityPlatformInboundSamlConfig#idp_entity_id}

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.ssoUrl"></a>

```go
SsoUrl *string
```

- *Type:* *string

URL to send Authentication request to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#sso_url IdentityPlatformInboundSamlConfig#sso_url}

---

##### `SignRequest`<sup>Optional</sup> <a name="SignRequest" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.signRequest"></a>

```go
SignRequest interface{}
```

- *Type:* interface{}

Indicates if outbounding SAMLRequest should be signed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#sign_request IdentityPlatformInboundSamlConfig#sign_request}

---

### IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates <a name="IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

&identityplatforminboundsamlconfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates {
	X509Certificate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate">X509Certificate</a></code> | <code>*string</code> | The IdP's x509 certificate. |

---

##### `X509Certificate`<sup>Optional</sup> <a name="X509Certificate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate"></a>

```go
X509Certificate *string
```

- *Type:* *string

The IdP's x509 certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#x509_certificate IdentityPlatformInboundSamlConfig#x509_certificate}

---

### IdentityPlatformInboundSamlConfigSpConfig <a name="IdentityPlatformInboundSamlConfigSpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

&identityplatforminboundsamlconfig.IdentityPlatformInboundSamlConfigSpConfig {
	CallbackUri: *string,
	SpEntityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.property.callbackUri">CallbackUri</a></code> | <code>*string</code> | Callback URI where responses from IDP are handled. Must start with 'https://'. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.property.spEntityId">SpEntityId</a></code> | <code>*string</code> | Unique identifier for all SAML entities. |

---

##### `CallbackUri`<sup>Optional</sup> <a name="CallbackUri" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.property.callbackUri"></a>

```go
CallbackUri *string
```

- *Type:* *string

Callback URI where responses from IDP are handled. Must start with 'https://'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#callback_uri IdentityPlatformInboundSamlConfig#callback_uri}

---

##### `SpEntityId`<sup>Optional</sup> <a name="SpEntityId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.property.spEntityId"></a>

```go
SpEntityId *string
```

- *Type:* *string

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#sp_entity_id IdentityPlatformInboundSamlConfig#sp_entity_id}

---

### IdentityPlatformInboundSamlConfigSpConfigSpCertificates <a name="IdentityPlatformInboundSamlConfigSpConfigSpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

&identityplatforminboundsamlconfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates {

}
```


### IdentityPlatformInboundSamlConfigTimeouts <a name="IdentityPlatformInboundSamlConfigTimeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

&identityplatforminboundsamlconfig.IdentityPlatformInboundSamlConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#create IdentityPlatformInboundSamlConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#delete IdentityPlatformInboundSamlConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#update IdentityPlatformInboundSamlConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#create IdentityPlatformInboundSamlConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#delete IdentityPlatformInboundSamlConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config#update IdentityPlatformInboundSamlConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList <a name="IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

identityplatforminboundsamlconfig.NewIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get"></a>

```go
func Get(index *f64) IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference <a name="IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

identityplatforminboundsamlconfig.NewIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate">ResetX509Certificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetX509Certificate` <a name="ResetX509Certificate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate"></a>

```go
func ResetX509Certificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput">X509CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate">X509Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `X509CertificateInput`<sup>Optional</sup> <a name="X509CertificateInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput"></a>

```go
func X509CertificateInput() *string
```

- *Type:* *string

---

##### `X509Certificate`<sup>Required</sup> <a name="X509Certificate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate"></a>

```go
func X509Certificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityPlatformInboundSamlConfigIdpConfigOutputReference <a name="IdentityPlatformInboundSamlConfigIdpConfigOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

identityplatforminboundsamlconfig.NewIdentityPlatformInboundSamlConfigIdpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformInboundSamlConfigIdpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates">PutIdpCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resetSignRequest">ResetSignRequest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdpCertificates` <a name="PutIdpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates"></a>

```go
func PutIdpCertificates(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSignRequest` <a name="ResetSignRequest" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resetSignRequest"></a>

```go
func ResetSignRequest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificates">IdpCertificates</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput">IdpCertificatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput">IdpEntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequestInput">SignRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput">SsoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityId">IdpEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequest">SignRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdpCertificates`<sup>Required</sup> <a name="IdpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificates"></a>

```go
func IdpCertificates() IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList</a>

---

##### `IdpCertificatesInput`<sup>Optional</sup> <a name="IdpCertificatesInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput"></a>

```go
func IdpCertificatesInput() interface{}
```

- *Type:* interface{}

---

##### `IdpEntityIdInput`<sup>Optional</sup> <a name="IdpEntityIdInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput"></a>

```go
func IdpEntityIdInput() *string
```

- *Type:* *string

---

##### `SignRequestInput`<sup>Optional</sup> <a name="SignRequestInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequestInput"></a>

```go
func SignRequestInput() interface{}
```

- *Type:* interface{}

---

##### `SsoUrlInput`<sup>Optional</sup> <a name="SsoUrlInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput"></a>

```go
func SsoUrlInput() *string
```

- *Type:* *string

---

##### `IdpEntityId`<sup>Required</sup> <a name="IdpEntityId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityId"></a>

```go
func IdpEntityId() *string
```

- *Type:* *string

---

##### `SignRequest`<sup>Required</sup> <a name="SignRequest" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequest"></a>

```go
func SignRequest() interface{}
```

- *Type:* interface{}

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrl"></a>

```go
func SsoUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

---


### IdentityPlatformInboundSamlConfigSpConfigOutputReference <a name="IdentityPlatformInboundSamlConfigSpConfigOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

identityplatforminboundsamlconfig.NewIdentityPlatformInboundSamlConfigSpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformInboundSamlConfigSpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resetCallbackUri">ResetCallbackUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resetSpEntityId">ResetSpEntityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCallbackUri` <a name="ResetCallbackUri" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resetCallbackUri"></a>

```go
func ResetCallbackUri()
```

##### `ResetSpEntityId` <a name="ResetSpEntityId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resetSpEntityId"></a>

```go
func ResetSpEntityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spCertificates">SpCertificates</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList">IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUriInput">CallbackUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput">SpEntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUri">CallbackUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityId">SpEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpCertificates`<sup>Required</sup> <a name="SpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spCertificates"></a>

```go
func SpCertificates() IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList">IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList</a>

---

##### `CallbackUriInput`<sup>Optional</sup> <a name="CallbackUriInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUriInput"></a>

```go
func CallbackUriInput() *string
```

- *Type:* *string

---

##### `SpEntityIdInput`<sup>Optional</sup> <a name="SpEntityIdInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput"></a>

```go
func SpEntityIdInput() *string
```

- *Type:* *string

---

##### `CallbackUri`<sup>Required</sup> <a name="CallbackUri" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUri"></a>

```go
func CallbackUri() *string
```

- *Type:* *string

---

##### `SpEntityId`<sup>Required</sup> <a name="SpEntityId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityId"></a>

```go
func SpEntityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

---


### IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList <a name="IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

identityplatforminboundsamlconfig.NewIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get"></a>

```go
func Get(index *f64) IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference <a name="IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

identityplatforminboundsamlconfig.NewIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate">X509Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates">IdentityPlatformInboundSamlConfigSpConfigSpCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `X509Certificate`<sup>Required</sup> <a name="X509Certificate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate"></a>

```go
func X509Certificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformInboundSamlConfigSpConfigSpCertificates
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates">IdentityPlatformInboundSamlConfigSpConfigSpCertificates</a>

---


### IdentityPlatformInboundSamlConfigTimeoutsOutputReference <a name="IdentityPlatformInboundSamlConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatforminboundsamlconfig"

identityplatforminboundsamlconfig.NewIdentityPlatformInboundSamlConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformInboundSamlConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



