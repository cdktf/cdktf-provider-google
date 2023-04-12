# `identityPlatformProjectDefaultConfig` Submodule <a name="`identityPlatformProjectDefaultConfig` Submodule" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformProjectDefaultConfig <a name="IdentityPlatformProjectDefaultConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config google_identity_platform_project_default_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

identityplatformprojectdefaultconfig.NewIdentityPlatformProjectDefaultConfig(scope Construct, id *string, config IdentityPlatformProjectDefaultConfigConfig) IdentityPlatformProjectDefaultConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig">IdentityPlatformProjectDefaultConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig">IdentityPlatformProjectDefaultConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn">PutSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetSignIn">ResetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSignIn` <a name="PutSignIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn"></a>

```go
func PutSignIn(value IdentityPlatformProjectDefaultConfigSignIn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts"></a>

```go
func PutTimeouts(value IdentityPlatformProjectDefaultConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSignIn` <a name="ResetSignIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetSignIn"></a>

```go
func ResetSignIn()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

identityplatformprojectdefaultconfig.IdentityPlatformProjectDefaultConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

identityplatformprojectdefaultconfig.IdentityPlatformProjectDefaultConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

identityplatformprojectdefaultconfig.IdentityPlatformProjectDefaultConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signIn">SignIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference">IdentityPlatformProjectDefaultConfigSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference">IdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signInInput">SignInInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignIn`<sup>Required</sup> <a name="SignIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signIn"></a>

```go
func SignIn() IdentityPlatformProjectDefaultConfigSignInOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference">IdentityPlatformProjectDefaultConfigSignInOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeouts"></a>

```go
func Timeouts() IdentityPlatformProjectDefaultConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference">IdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SignInInput`<sup>Optional</sup> <a name="SignInInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signInInput"></a>

```go
func SignInInput() IdentityPlatformProjectDefaultConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformProjectDefaultConfigConfig <a name="IdentityPlatformProjectDefaultConfigConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

&identityplatformprojectdefaultconfig.IdentityPlatformProjectDefaultConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Project: *string,
	SignIn: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#id IdentityPlatformProjectDefaultConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#project IdentityPlatformProjectDefaultConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.signIn">SignIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#id IdentityPlatformProjectDefaultConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#project IdentityPlatformProjectDefaultConfig#project}.

---

##### `SignIn`<sup>Optional</sup> <a name="SignIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.signIn"></a>

```go
SignIn IdentityPlatformProjectDefaultConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#sign_in IdentityPlatformProjectDefaultConfig#sign_in}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.timeouts"></a>

```go
Timeouts IdentityPlatformProjectDefaultConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#timeouts IdentityPlatformProjectDefaultConfig#timeouts}

---

### IdentityPlatformProjectDefaultConfigSignIn <a name="IdentityPlatformProjectDefaultConfigSignIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

&identityplatformprojectdefaultconfig.IdentityPlatformProjectDefaultConfigSignIn {
	AllowDuplicateEmails: interface{},
	Anonymous: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous,
	Email: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail,
	PhoneNumber: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails">AllowDuplicateEmails</a></code> | <code>interface{}</code> | Whether to allow more than one account to have the same email. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.anonymous">Anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | anonymous block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.email">Email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber">PhoneNumber</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | phone_number block. |

---

##### `AllowDuplicateEmails`<sup>Optional</sup> <a name="AllowDuplicateEmails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails"></a>

```go
AllowDuplicateEmails interface{}
```

- *Type:* interface{}

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#allow_duplicate_emails IdentityPlatformProjectDefaultConfig#allow_duplicate_emails}

---

##### `Anonymous`<sup>Optional</sup> <a name="Anonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.anonymous"></a>

```go
Anonymous IdentityPlatformProjectDefaultConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#anonymous IdentityPlatformProjectDefaultConfig#anonymous}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.email"></a>

```go
Email IdentityPlatformProjectDefaultConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#email IdentityPlatformProjectDefaultConfig#email}

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber"></a>

```go
PhoneNumber IdentityPlatformProjectDefaultConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#phone_number IdentityPlatformProjectDefaultConfig#phone_number}

---

### IdentityPlatformProjectDefaultConfigSignInAnonymous <a name="IdentityPlatformProjectDefaultConfigSignInAnonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

&identityplatformprojectdefaultconfig.IdentityPlatformProjectDefaultConfigSignInAnonymous {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether anonymous user auth is enabled for the project or not. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

### IdentityPlatformProjectDefaultConfigSignInEmail <a name="IdentityPlatformProjectDefaultConfigSignInEmail" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

&identityplatformprojectdefaultconfig.IdentityPlatformProjectDefaultConfigSignInEmail {
	Enabled: interface{},
	PasswordRequired: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether email auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired">PasswordRequired</a></code> | <code>interface{}</code> | Whether a password is required for email auth or not. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

##### `PasswordRequired`<sup>Optional</sup> <a name="PasswordRequired" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired"></a>

```go
PasswordRequired interface{}
```

- *Type:* interface{}

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#password_required IdentityPlatformProjectDefaultConfig#password_required}

---

### IdentityPlatformProjectDefaultConfigSignInHashConfig <a name="IdentityPlatformProjectDefaultConfigSignInHashConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

&identityplatformprojectdefaultconfig.IdentityPlatformProjectDefaultConfigSignInHashConfig {

}
```


### IdentityPlatformProjectDefaultConfigSignInPhoneNumber <a name="IdentityPlatformProjectDefaultConfigSignInPhoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

&identityplatformprojectdefaultconfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber {
	Enabled: interface{},
	TestPhoneNumbers: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether phone number auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers">TestPhoneNumbers</a></code> | <code>*map[string]*string</code> | A map of <test phone number, fake code> that can be used for phone auth testing. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

##### `TestPhoneNumbers`<sup>Optional</sup> <a name="TestPhoneNumbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers"></a>

```go
TestPhoneNumbers *map[string]*string
```

- *Type:* *map[string]*string

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#test_phone_numbers IdentityPlatformProjectDefaultConfig#test_phone_numbers}

---

### IdentityPlatformProjectDefaultConfigTimeouts <a name="IdentityPlatformProjectDefaultConfigTimeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

&identityplatformprojectdefaultconfig.IdentityPlatformProjectDefaultConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#create IdentityPlatformProjectDefaultConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#delete IdentityPlatformProjectDefaultConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#update IdentityPlatformProjectDefaultConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#create IdentityPlatformProjectDefaultConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#delete IdentityPlatformProjectDefaultConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_project_default_config#update IdentityPlatformProjectDefaultConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

identityplatformprojectdefaultconfig.NewIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformProjectDefaultConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---


### IdentityPlatformProjectDefaultConfigSignInEmailOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInEmailOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

identityplatformprojectdefaultconfig.NewIdentityPlatformProjectDefaultConfigSignInEmailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformProjectDefaultConfigSignInEmailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired">ResetPasswordRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetPasswordRequired` <a name="ResetPasswordRequired" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired"></a>

```go
func ResetPasswordRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput">PasswordRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired">PasswordRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordRequiredInput`<sup>Optional</sup> <a name="PasswordRequiredInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput"></a>

```go
func PasswordRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `PasswordRequired`<sup>Required</sup> <a name="PasswordRequired" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired"></a>

```go
func PasswordRequired() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformProjectDefaultConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

---


### IdentityPlatformProjectDefaultConfigSignInHashConfigList <a name="IdentityPlatformProjectDefaultConfigSignInHashConfigList" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

identityplatformprojectdefaultconfig.NewIdentityPlatformProjectDefaultConfigSignInHashConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityPlatformProjectDefaultConfigSignInHashConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.get"></a>

```go
func Get(index *f64) IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

identityplatformprojectdefaultconfig.NewIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost">MemoryCost</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds">Rounds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator">SaltSeparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey">SignerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig">IdentityPlatformProjectDefaultConfigSignInHashConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `MemoryCost`<sup>Required</sup> <a name="MemoryCost" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost"></a>

```go
func MemoryCost() *f64
```

- *Type:* *f64

---

##### `Rounds`<sup>Required</sup> <a name="Rounds" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds"></a>

```go
func Rounds() *f64
```

- *Type:* *f64

---

##### `SaltSeparator`<sup>Required</sup> <a name="SaltSeparator" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator"></a>

```go
func SaltSeparator() *string
```

- *Type:* *string

---

##### `SignerKey`<sup>Required</sup> <a name="SignerKey" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey"></a>

```go
func SignerKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformProjectDefaultConfigSignInHashConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig">IdentityPlatformProjectDefaultConfigSignInHashConfig</a>

---


### IdentityPlatformProjectDefaultConfigSignInOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

identityplatformprojectdefaultconfig.NewIdentityPlatformProjectDefaultConfigSignInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformProjectDefaultConfigSignInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous">PutAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail">PutEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber">PutPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails">ResetAllowDuplicateEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous">ResetAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnonymous` <a name="PutAnonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous"></a>

```go
func PutAnonymous(value IdentityPlatformProjectDefaultConfigSignInAnonymous)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---

##### `PutEmail` <a name="PutEmail" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail"></a>

```go
func PutEmail(value IdentityPlatformProjectDefaultConfigSignInEmail)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

---

##### `PutPhoneNumber` <a name="PutPhoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber"></a>

```go
func PutPhoneNumber(value IdentityPlatformProjectDefaultConfigSignInPhoneNumber)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---

##### `ResetAllowDuplicateEmails` <a name="ResetAllowDuplicateEmails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails"></a>

```go
func ResetAllowDuplicateEmails()
```

##### `ResetAnonymous` <a name="ResetAnonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous"></a>

```go
func ResetAnonymous()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous">Anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.email">Email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference">IdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig">HashConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList">IdentityPlatformProjectDefaultConfigSignInHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput">AllowDuplicateEmailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput">AnonymousInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput">EmailInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails">AllowDuplicateEmails</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Anonymous`<sup>Required</sup> <a name="Anonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous"></a>

```go
func Anonymous() IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.email"></a>

```go
func Email() IdentityPlatformProjectDefaultConfigSignInEmailOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference">IdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a>

---

##### `HashConfig`<sup>Required</sup> <a name="HashConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig"></a>

```go
func HashConfig() IdentityPlatformProjectDefaultConfigSignInHashConfigList
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList">IdentityPlatformProjectDefaultConfigSignInHashConfigList</a>

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a>

---

##### `AllowDuplicateEmailsInput`<sup>Optional</sup> <a name="AllowDuplicateEmailsInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput"></a>

```go
func AllowDuplicateEmailsInput() interface{}
```

- *Type:* interface{}

---

##### `AnonymousInput`<sup>Optional</sup> <a name="AnonymousInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput"></a>

```go
func AnonymousInput() IdentityPlatformProjectDefaultConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput"></a>

```go
func EmailInput() IdentityPlatformProjectDefaultConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() IdentityPlatformProjectDefaultConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---

##### `AllowDuplicateEmails`<sup>Required</sup> <a name="AllowDuplicateEmails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails"></a>

```go
func AllowDuplicateEmails() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformProjectDefaultConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

---


### IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

identityplatformprojectdefaultconfig.NewIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers">ResetTestPhoneNumbers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetTestPhoneNumbers` <a name="ResetTestPhoneNumbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers"></a>

```go
func ResetTestPhoneNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput">TestPhoneNumbersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers">TestPhoneNumbers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TestPhoneNumbersInput`<sup>Optional</sup> <a name="TestPhoneNumbersInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput"></a>

```go
func TestPhoneNumbersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `TestPhoneNumbers`<sup>Required</sup> <a name="TestPhoneNumbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers"></a>

```go
func TestPhoneNumbers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformProjectDefaultConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---


### IdentityPlatformProjectDefaultConfigTimeoutsOutputReference <a name="IdentityPlatformProjectDefaultConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformprojectdefaultconfig"

identityplatformprojectdefaultconfig.NewIdentityPlatformProjectDefaultConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformProjectDefaultConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



