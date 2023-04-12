# `apigeeAddonsConfig` Submodule <a name="`apigeeAddonsConfig` Submodule" id="@cdktf/provider-google.apigeeAddonsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeAddonsConfig <a name="ApigeeAddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config google_apigee_addons_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

apigeeaddonsconfig.NewApigeeAddonsConfig(scope Construct, id *string, config ApigeeAddonsConfigConfig) ApigeeAddonsConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig">ApigeeAddonsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig">ApigeeAddonsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig">PutAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetAddonsConfig">ResetAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAddonsConfig` <a name="PutAddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig"></a>

```go
func PutAddonsConfig(value ApigeeAddonsConfigAddonsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeAddonsConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>

---

##### `ResetAddonsConfig` <a name="ResetAddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetAddonsConfig"></a>

```go
func ResetAddonsConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

apigeeaddonsconfig.ApigeeAddonsConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

apigeeaddonsconfig.ApigeeAddonsConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

apigeeaddonsconfig.ApigeeAddonsConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfig">AddonsConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference">ApigeeAddonsConfigAddonsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference">ApigeeAddonsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfigInput">AddonsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.orgInput">OrgInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.org">Org</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddonsConfig`<sup>Required</sup> <a name="AddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfig"></a>

```go
func AddonsConfig() ApigeeAddonsConfigAddonsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference">ApigeeAddonsConfigAddonsConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeouts"></a>

```go
func Timeouts() ApigeeAddonsConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference">ApigeeAddonsConfigTimeoutsOutputReference</a>

---

##### `AddonsConfigInput`<sup>Optional</sup> <a name="AddonsConfigInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfigInput"></a>

```go
func AddonsConfigInput() ApigeeAddonsConfigAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgInput`<sup>Optional</sup> <a name="OrgInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.orgInput"></a>

```go
func OrgInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Org`<sup>Required</sup> <a name="Org" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.org"></a>

```go
func Org() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeAddonsConfigAddonsConfig <a name="ApigeeAddonsConfigAddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

&apigeeaddonsconfig.ApigeeAddonsConfigAddonsConfig {
	AdvancedApiOpsConfig: github.com/cdktf/cdktf-provider-google-go/google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig,
	ApiSecurityConfig: github.com/cdktf/cdktf-provider-google-go/google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig,
	ConnectorsPlatformConfig: github.com/cdktf/cdktf-provider-google-go/google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig,
	IntegrationConfig: github.com/cdktf/cdktf-provider-google-go/google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig,
	MonetizationConfig: github.com/cdktf/cdktf-provider-google-go/google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.advancedApiOpsConfig">AdvancedApiOpsConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | advanced_api_ops_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.apiSecurityConfig">ApiSecurityConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | api_security_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.connectorsPlatformConfig">ConnectorsPlatformConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | connectors_platform_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.integrationConfig">IntegrationConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | integration_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.monetizationConfig">MonetizationConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | monetization_config block. |

---

##### `AdvancedApiOpsConfig`<sup>Optional</sup> <a name="AdvancedApiOpsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.advancedApiOpsConfig"></a>

```go
AdvancedApiOpsConfig ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

advanced_api_ops_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#advanced_api_ops_config ApigeeAddonsConfig#advanced_api_ops_config}

---

##### `ApiSecurityConfig`<sup>Optional</sup> <a name="ApiSecurityConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.apiSecurityConfig"></a>

```go
ApiSecurityConfig ApigeeAddonsConfigAddonsConfigApiSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

api_security_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#api_security_config ApigeeAddonsConfig#api_security_config}

---

##### `ConnectorsPlatformConfig`<sup>Optional</sup> <a name="ConnectorsPlatformConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.connectorsPlatformConfig"></a>

```go
ConnectorsPlatformConfig ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

connectors_platform_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#connectors_platform_config ApigeeAddonsConfig#connectors_platform_config}

---

##### `IntegrationConfig`<sup>Optional</sup> <a name="IntegrationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.integrationConfig"></a>

```go
IntegrationConfig ApigeeAddonsConfigAddonsConfigIntegrationConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

integration_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#integration_config ApigeeAddonsConfig#integration_config}

---

##### `MonetizationConfig`<sup>Optional</sup> <a name="MonetizationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.monetizationConfig"></a>

```go
MonetizationConfig ApigeeAddonsConfigAddonsConfigMonetizationConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

monetization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#monetization_config ApigeeAddonsConfig#monetization_config}

---

### ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig <a name="ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

&apigeeaddonsconfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigApiSecurityConfig <a name="ApigeeAddonsConfigAddonsConfigApiSecurityConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

&apigeeaddonsconfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig <a name="ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

&apigeeaddonsconfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigIntegrationConfig <a name="ApigeeAddonsConfigAddonsConfigIntegrationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

&apigeeaddonsconfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigMonetizationConfig <a name="ApigeeAddonsConfigAddonsConfigMonetizationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

&apigeeaddonsconfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigConfig <a name="ApigeeAddonsConfigConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

&apigeeaddonsconfig.ApigeeAddonsConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Org: *string,
	AddonsConfig: github.com/cdktf/cdktf-provider-google-go/google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.org">Org</a></code> | <code>*string</code> | Name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.addonsConfig">AddonsConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | addons_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#id ApigeeAddonsConfig#id}. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Org`<sup>Required</sup> <a name="Org" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.org"></a>

```go
Org *string
```

- *Type:* *string

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#org ApigeeAddonsConfig#org}

---

##### `AddonsConfig`<sup>Optional</sup> <a name="AddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.addonsConfig"></a>

```go
AddonsConfig ApigeeAddonsConfigAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

addons_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#addons_config ApigeeAddonsConfig#addons_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#id ApigeeAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.timeouts"></a>

```go
Timeouts ApigeeAddonsConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#timeouts ApigeeAddonsConfig#timeouts}

---

### ApigeeAddonsConfigTimeouts <a name="ApigeeAddonsConfigTimeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

&apigeeaddonsconfig.ApigeeAddonsConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#create ApigeeAddonsConfig#create}. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#delete ApigeeAddonsConfig#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#update ApigeeAddonsConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#create ApigeeAddonsConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#delete ApigeeAddonsConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_addons_config#update ApigeeAddonsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

apigeeaddonsconfig.NewApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---


### ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

apigeeaddonsconfig.NewApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeAddonsConfigAddonsConfigApiSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---


### ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

apigeeaddonsconfig.NewApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---


### ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

apigeeaddonsconfig.NewApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeAddonsConfigAddonsConfigIntegrationConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---


### ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

apigeeaddonsconfig.NewApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeAddonsConfigAddonsConfigMonetizationConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---


### ApigeeAddonsConfigAddonsConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

apigeeaddonsconfig.NewApigeeAddonsConfigAddonsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeAddonsConfigAddonsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig">PutAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig">PutApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig">PutConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig">PutIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig">PutMonetizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetAdvancedApiOpsConfig">ResetAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetApiSecurityConfig">ResetApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetConnectorsPlatformConfig">ResetConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetIntegrationConfig">ResetIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetMonetizationConfig">ResetMonetizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedApiOpsConfig` <a name="PutAdvancedApiOpsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig"></a>

```go
func PutAdvancedApiOpsConfig(value ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---

##### `PutApiSecurityConfig` <a name="PutApiSecurityConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig"></a>

```go
func PutApiSecurityConfig(value ApigeeAddonsConfigAddonsConfigApiSecurityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---

##### `PutConnectorsPlatformConfig` <a name="PutConnectorsPlatformConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig"></a>

```go
func PutConnectorsPlatformConfig(value ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---

##### `PutIntegrationConfig` <a name="PutIntegrationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig"></a>

```go
func PutIntegrationConfig(value ApigeeAddonsConfigAddonsConfigIntegrationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---

##### `PutMonetizationConfig` <a name="PutMonetizationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig"></a>

```go
func PutMonetizationConfig(value ApigeeAddonsConfigAddonsConfigMonetizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---

##### `ResetAdvancedApiOpsConfig` <a name="ResetAdvancedApiOpsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetAdvancedApiOpsConfig"></a>

```go
func ResetAdvancedApiOpsConfig()
```

##### `ResetApiSecurityConfig` <a name="ResetApiSecurityConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetApiSecurityConfig"></a>

```go
func ResetApiSecurityConfig()
```

##### `ResetConnectorsPlatformConfig` <a name="ResetConnectorsPlatformConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetConnectorsPlatformConfig"></a>

```go
func ResetConnectorsPlatformConfig()
```

##### `ResetIntegrationConfig` <a name="ResetIntegrationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetIntegrationConfig"></a>

```go
func ResetIntegrationConfig()
```

##### `ResetMonetizationConfig` <a name="ResetMonetizationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetMonetizationConfig"></a>

```go
func ResetMonetizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfig">AdvancedApiOpsConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfig">ApiSecurityConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference">ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfig">ConnectorsPlatformConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfig">IntegrationConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference">ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfig">MonetizationConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference">ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfigInput">AdvancedApiOpsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfigInput">ApiSecurityConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfigInput">ConnectorsPlatformConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfigInput">IntegrationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfigInput">MonetizationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedApiOpsConfig`<sup>Required</sup> <a name="AdvancedApiOpsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfig"></a>

```go
func AdvancedApiOpsConfig() ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference</a>

---

##### `ApiSecurityConfig`<sup>Required</sup> <a name="ApiSecurityConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfig"></a>

```go
func ApiSecurityConfig() ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference">ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference</a>

---

##### `ConnectorsPlatformConfig`<sup>Required</sup> <a name="ConnectorsPlatformConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfig"></a>

```go
func ConnectorsPlatformConfig() ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference</a>

---

##### `IntegrationConfig`<sup>Required</sup> <a name="IntegrationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfig"></a>

```go
func IntegrationConfig() ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference">ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference</a>

---

##### `MonetizationConfig`<sup>Required</sup> <a name="MonetizationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfig"></a>

```go
func MonetizationConfig() ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference">ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference</a>

---

##### `AdvancedApiOpsConfigInput`<sup>Optional</sup> <a name="AdvancedApiOpsConfigInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfigInput"></a>

```go
func AdvancedApiOpsConfigInput() ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---

##### `ApiSecurityConfigInput`<sup>Optional</sup> <a name="ApiSecurityConfigInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfigInput"></a>

```go
func ApiSecurityConfigInput() ApigeeAddonsConfigAddonsConfigApiSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---

##### `ConnectorsPlatformConfigInput`<sup>Optional</sup> <a name="ConnectorsPlatformConfigInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfigInput"></a>

```go
func ConnectorsPlatformConfigInput() ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---

##### `IntegrationConfigInput`<sup>Optional</sup> <a name="IntegrationConfigInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfigInput"></a>

```go
func IntegrationConfigInput() ApigeeAddonsConfigAddonsConfigIntegrationConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---

##### `MonetizationConfigInput`<sup>Optional</sup> <a name="MonetizationConfigInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfigInput"></a>

```go
func MonetizationConfigInput() ApigeeAddonsConfigAddonsConfigMonetizationConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeAddonsConfigAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

---


### ApigeeAddonsConfigTimeoutsOutputReference <a name="ApigeeAddonsConfigTimeoutsOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeaddonsconfig"

apigeeaddonsconfig.NewApigeeAddonsConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeAddonsConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



