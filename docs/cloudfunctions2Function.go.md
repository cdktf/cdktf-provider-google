# `cloudfunctions2Function` Submodule <a name="`cloudfunctions2Function` Submodule" id="@cdktf/provider-google.cloudfunctions2Function"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudfunctions2Function <a name="Cloudfunctions2Function" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function google_cloudfunctions2_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2Function(scope Construct, id *string, config Cloudfunctions2FunctionConfig) Cloudfunctions2Function
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig">Cloudfunctions2FunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig">Cloudfunctions2FunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig">PutBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger">PutEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig">PutServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetBuildConfig">ResetBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetEventTrigger">ResetEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetServiceConfig">ResetServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBuildConfig` <a name="PutBuildConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig"></a>

```go
func PutBuildConfig(value Cloudfunctions2FunctionBuildConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

---

##### `PutEventTrigger` <a name="PutEventTrigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger"></a>

```go
func PutEventTrigger(value Cloudfunctions2FunctionEventTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

---

##### `PutServiceConfig` <a name="PutServiceConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig"></a>

```go
func PutServiceConfig(value Cloudfunctions2FunctionServiceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putTimeouts"></a>

```go
func PutTimeouts(value Cloudfunctions2FunctionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>

---

##### `ResetBuildConfig` <a name="ResetBuildConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetBuildConfig"></a>

```go
func ResetBuildConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEventTrigger` <a name="ResetEventTrigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetEventTrigger"></a>

```go
func ResetEventTrigger()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServiceConfig` <a name="ResetServiceConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetServiceConfig"></a>

```go
func ResetServiceConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.Cloudfunctions2Function_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.Cloudfunctions2Function_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.Cloudfunctions2Function_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.buildConfig">BuildConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference">Cloudfunctions2FunctionBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.eventTrigger">EventTrigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference">Cloudfunctions2FunctionEventTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.serviceConfig">ServiceConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference">Cloudfunctions2FunctionServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference">Cloudfunctions2FunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.buildConfigInput">BuildConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.eventTriggerInput">EventTriggerInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.serviceConfigInput">ServiceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BuildConfig`<sup>Required</sup> <a name="BuildConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.buildConfig"></a>

```go
func BuildConfig() Cloudfunctions2FunctionBuildConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference">Cloudfunctions2FunctionBuildConfigOutputReference</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `EventTrigger`<sup>Required</sup> <a name="EventTrigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.eventTrigger"></a>

```go
func EventTrigger() Cloudfunctions2FunctionEventTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference">Cloudfunctions2FunctionEventTriggerOutputReference</a>

---

##### `ServiceConfig`<sup>Required</sup> <a name="ServiceConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.serviceConfig"></a>

```go
func ServiceConfig() Cloudfunctions2FunctionServiceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference">Cloudfunctions2FunctionServiceConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.timeouts"></a>

```go
func Timeouts() Cloudfunctions2FunctionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference">Cloudfunctions2FunctionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BuildConfigInput`<sup>Optional</sup> <a name="BuildConfigInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.buildConfigInput"></a>

```go
func BuildConfigInput() Cloudfunctions2FunctionBuildConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventTriggerInput`<sup>Optional</sup> <a name="EventTriggerInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.eventTriggerInput"></a>

```go
func EventTriggerInput() Cloudfunctions2FunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceConfigInput`<sup>Optional</sup> <a name="ServiceConfigInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.serviceConfigInput"></a>

```go
func ServiceConfigInput() Cloudfunctions2FunctionServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudfunctions2FunctionBuildConfig <a name="Cloudfunctions2FunctionBuildConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

&cloudfunctions2function.Cloudfunctions2FunctionBuildConfig {
	DockerRepository: *string,
	EntryPoint: *string,
	EnvironmentVariables: *map[string]*string,
	Runtime: *string,
	Source: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource,
	WorkerPool: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.dockerRepository">DockerRepository</a></code> | <code>*string</code> | User managed repository created in Artifact Registry optionally with a customer managed encryption key. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.entryPoint">EntryPoint</a></code> | <code>*string</code> | The name of the function (as defined in source code) that will be executed. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | User-provided build-time environment variables for the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.runtime">Runtime</a></code> | <code>*string</code> | The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.workerPool">WorkerPool</a></code> | <code>*string</code> | Name of the Cloud Build Custom Worker Pool that should be used to build the function. |

---

##### `DockerRepository`<sup>Optional</sup> <a name="DockerRepository" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.dockerRepository"></a>

```go
DockerRepository *string
```

- *Type:* *string

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#docker_repository Cloudfunctions2Function#docker_repository}

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.entryPoint"></a>

```go
EntryPoint *string
```

- *Type:* *string

The name of the function (as defined in source code) that will be executed.

Defaults to the resource name suffix, if not specified. For backward
compatibility, if function with given name is not found, then the system
will try to use function named "function". For Node.js this is name of a
function exported by the module specified in source_location.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#entry_point Cloudfunctions2Function#entry_point}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

User-provided build-time environment variables for the function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#environment_variables Cloudfunctions2Function#environment_variables}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#runtime Cloudfunctions2Function#runtime}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.source"></a>

```go
Source Cloudfunctions2FunctionBuildConfigSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#source Cloudfunctions2Function#source}

---

##### `WorkerPool`<sup>Optional</sup> <a name="WorkerPool" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.workerPool"></a>

```go
WorkerPool *string
```

- *Type:* *string

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#worker_pool Cloudfunctions2Function#worker_pool}

---

### Cloudfunctions2FunctionBuildConfigSource <a name="Cloudfunctions2FunctionBuildConfigSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

&cloudfunctions2function.Cloudfunctions2FunctionBuildConfigSource {
	RepoSource: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource,
	StorageSource: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.property.repoSource">RepoSource</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | repo_source block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.property.storageSource">StorageSource</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | storage_source block. |

---

##### `RepoSource`<sup>Optional</sup> <a name="RepoSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.property.repoSource"></a>

```go
RepoSource Cloudfunctions2FunctionBuildConfigSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a>

repo_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#repo_source Cloudfunctions2Function#repo_source}

---

##### `StorageSource`<sup>Optional</sup> <a name="StorageSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.property.storageSource"></a>

```go
StorageSource Cloudfunctions2FunctionBuildConfigSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a>

storage_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#storage_source Cloudfunctions2Function#storage_source}

---

### Cloudfunctions2FunctionBuildConfigSourceRepoSource <a name="Cloudfunctions2FunctionBuildConfigSourceRepoSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

&cloudfunctions2function.Cloudfunctions2FunctionBuildConfigSourceRepoSource {
	BranchName: *string,
	CommitSha: *string,
	Dir: *string,
	InvertRegex: interface{},
	ProjectId: *string,
	RepoName: *string,
	TagName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.branchName">BranchName</a></code> | <code>*string</code> | Regex matching branches to build. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.commitSha">CommitSha</a></code> | <code>*string</code> | Regex matching tags to build. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.dir">Dir</a></code> | <code>*string</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | Only trigger a build if the revision regex does  NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.projectId">ProjectId</a></code> | <code>*string</code> | ID of the project that owns the Cloud Source Repository. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.repoName">RepoName</a></code> | <code>*string</code> | Name of the Cloud Source Repository. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.tagName">TagName</a></code> | <code>*string</code> | Regex matching tags to build. |

---

##### `BranchName`<sup>Optional</sup> <a name="BranchName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.branchName"></a>

```go
BranchName *string
```

- *Type:* *string

Regex matching branches to build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#branch_name Cloudfunctions2Function#branch_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.commitSha"></a>

```go
CommitSha *string
```

- *Type:* *string

Regex matching tags to build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#commit_sha Cloudfunctions2Function#commit_sha}

---

##### `Dir`<sup>Optional</sup> <a name="Dir" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.dir"></a>

```go
Dir *string
```

- *Type:* *string

Directory, relative to the source root, in which to run the build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#dir Cloudfunctions2Function#dir}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.invertRegex"></a>

```go
InvertRegex interface{}
```

- *Type:* interface{}

Only trigger a build if the revision regex does  NOT match the revision regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#invert_regex Cloudfunctions2Function#invert_regex}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

ID of the project that owns the Cloud Source Repository.

If omitted, the
project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}

---

##### `RepoName`<sup>Optional</sup> <a name="RepoName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.repoName"></a>

```go
RepoName *string
```

- *Type:* *string

Name of the Cloud Source Repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#repo_name Cloudfunctions2Function#repo_name}

---

##### `TagName`<sup>Optional</sup> <a name="TagName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.tagName"></a>

```go
TagName *string
```

- *Type:* *string

Regex matching tags to build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#tag_name Cloudfunctions2Function#tag_name}

---

### Cloudfunctions2FunctionBuildConfigSourceStorageSource <a name="Cloudfunctions2FunctionBuildConfigSourceStorageSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

&cloudfunctions2function.Cloudfunctions2FunctionBuildConfigSourceStorageSource {
	Bucket: *string,
	Generation: *f64,
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.bucket">Bucket</a></code> | <code>*string</code> | Google Cloud Storage bucket containing the source. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.generation">Generation</a></code> | <code>*f64</code> | Google Cloud Storage generation for the object. If the generation  is omitted, the latest generation will be used. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.object">Object</a></code> | <code>*string</code> | Google Cloud Storage object containing the source. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Google Cloud Storage bucket containing the source.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#bucket Cloudfunctions2Function#bucket}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.generation"></a>

```go
Generation *f64
```

- *Type:* *f64

Google Cloud Storage generation for the object. If the generation  is omitted, the latest generation will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#generation Cloudfunctions2Function#generation}

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.object"></a>

```go
Object *string
```

- *Type:* *string

Google Cloud Storage object containing the source.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#object Cloudfunctions2Function#object}

---

### Cloudfunctions2FunctionConfig <a name="Cloudfunctions2FunctionConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

&cloudfunctions2function.Cloudfunctions2FunctionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	BuildConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig,
	Description: *string,
	EventTrigger: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	ServiceConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.name">Name</a></code> | <code>*string</code> | A user-defined name of the function. Function names must be unique globally and match pattern 'projects/*\/locations/*\/functions/*'. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.buildConfig">BuildConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description of a function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.eventTrigger">EventTrigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#id Cloudfunctions2Function#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs associated with this Cloud Function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.location">Location</a></code> | <code>*string</code> | The location of this cloud function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#project Cloudfunctions2Function#project}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.serviceConfig">ServiceConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a></code> | service_config block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A user-defined name of the function. Function names must be unique globally and match pattern 'projects/*\/locations/*\/functions/*'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#name Cloudfunctions2Function#name}

---

##### `BuildConfig`<sup>Optional</sup> <a name="BuildConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.buildConfig"></a>

```go
BuildConfig Cloudfunctions2FunctionBuildConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#build_config Cloudfunctions2Function#build_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description of a function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#description Cloudfunctions2Function#description}

---

##### `EventTrigger`<sup>Optional</sup> <a name="EventTrigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.eventTrigger"></a>

```go
EventTrigger Cloudfunctions2FunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#event_trigger Cloudfunctions2Function#event_trigger}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#id Cloudfunctions2Function#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs associated with this Cloud Function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#labels Cloudfunctions2Function#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of this cloud function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#location Cloudfunctions2Function#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#project Cloudfunctions2Function#project}.

---

##### `ServiceConfig`<sup>Optional</sup> <a name="ServiceConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.serviceConfig"></a>

```go
ServiceConfig Cloudfunctions2FunctionServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

service_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#service_config Cloudfunctions2Function#service_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.timeouts"></a>

```go
Timeouts Cloudfunctions2FunctionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#timeouts Cloudfunctions2Function#timeouts}

---

### Cloudfunctions2FunctionEventTrigger <a name="Cloudfunctions2FunctionEventTrigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

&cloudfunctions2function.Cloudfunctions2FunctionEventTrigger {
	EventFilters: interface{},
	EventType: *string,
	PubsubTopic: *string,
	RetryPolicy: *string,
	ServiceAccountEmail: *string,
	TriggerRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.eventFilters">EventFilters</a></code> | <code>interface{}</code> | event_filters block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.eventType">EventType</a></code> | <code>*string</code> | Required. The type of event to observe. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.retryPolicy">RetryPolicy</a></code> | <code>*string</code> | Describes the retry policy in case of function's execution failure. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The email of the service account for this function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.triggerRegion">TriggerRegion</a></code> | <code>*string</code> | The region that the trigger will be in. |

---

##### `EventFilters`<sup>Optional</sup> <a name="EventFilters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.eventFilters"></a>

```go
EventFilters interface{}
```

- *Type:* interface{}

event_filters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#event_filters Cloudfunctions2Function#event_filters}

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

Required. The type of event to observe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#event_type Cloudfunctions2Function#event_type}

---

##### `PubsubTopic`<sup>Optional</sup> <a name="PubsubTopic" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.pubsubTopic"></a>

```go
PubsubTopic *string
```

- *Type:* *string

The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#pubsub_topic Cloudfunctions2Function#pubsub_topic}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.retryPolicy"></a>

```go
RetryPolicy *string
```

- *Type:* *string

Describes the retry policy in case of function's execution failure.

Retried execution is charged as any other execution. Possible values: ["RETRY_POLICY_UNSPECIFIED", "RETRY_POLICY_DO_NOT_RETRY", "RETRY_POLICY_RETRY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#retry_policy Cloudfunctions2Function#retry_policy}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The email of the service account for this function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#service_account_email Cloudfunctions2Function#service_account_email}

---

##### `TriggerRegion`<sup>Optional</sup> <a name="TriggerRegion" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.triggerRegion"></a>

```go
TriggerRegion *string
```

- *Type:* *string

The region that the trigger will be in.

The trigger will only receive
events originating in this region. It can be the same
region as the function, a different region or multi-region, or the global
region. If not provided, defaults to the same region as the function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#trigger_region Cloudfunctions2Function#trigger_region}

---

### Cloudfunctions2FunctionEventTriggerEventFilters <a name="Cloudfunctions2FunctionEventTriggerEventFilters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

&cloudfunctions2function.Cloudfunctions2FunctionEventTriggerEventFilters {
	Attribute: *string,
	Value: *string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.attribute">Attribute</a></code> | <code>*string</code> | 'Required. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.value">Value</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.operator">Operator</a></code> | <code>*string</code> | Optional. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

'Required.

The name of a CloudEvents attribute.
Currently, only a subset of attributes are supported for filtering. Use the 'gcloud eventarc providers describe' command to learn more about events and their attributes.
Do not filter for the 'type' attribute here, as this is already achieved by the resource's 'event_type' attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#attribute Cloudfunctions2Function#attribute}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Required.

The value for the attribute.
If the operator field is set as 'match-path-pattern', this value can be a path pattern instead of an exact value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#value Cloudfunctions2Function#value}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Optional.

The operator used for matching the events with the value of
the filter. If not specified, only events that have an exact key-value
pair specified in the filter are matched.
The only allowed value is 'match-path-pattern'.
[See documentation on path patterns here](https://cloud.google.com/eventarc/docs/path-patterns)'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#operator Cloudfunctions2Function#operator}

---

### Cloudfunctions2FunctionServiceConfig <a name="Cloudfunctions2FunctionServiceConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

&cloudfunctions2function.Cloudfunctions2FunctionServiceConfig {
	AllTrafficOnLatestRevision: interface{},
	AvailableCpu: *string,
	AvailableMemory: *string,
	EnvironmentVariables: *map[string]*string,
	IngressSettings: *string,
	MaxInstanceCount: *f64,
	MaxInstanceRequestConcurrency: *f64,
	MinInstanceCount: *f64,
	SecretEnvironmentVariables: interface{},
	SecretVolumes: interface{},
	Service: *string,
	ServiceAccountEmail: *string,
	TimeoutSeconds: *f64,
	VpcConnector: *string,
	VpcConnectorEgressSettings: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.allTrafficOnLatestRevision">AllTrafficOnLatestRevision</a></code> | <code>interface{}</code> | Whether 100% of traffic is routed to the latest revision. Defaults to true. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.availableCpu">AvailableCpu</a></code> | <code>*string</code> | The number of CPUs used in a single container instance. Default value is calculated from available memory. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.availableMemory">AvailableMemory</a></code> | <code>*string</code> | The amount of memory available for a function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | Environment variables that shall be available during function execution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.ingressSettings">IngressSettings</a></code> | <code>*string</code> | Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"]. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | The limit on the maximum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.maxInstanceRequestConcurrency">MaxInstanceRequestConcurrency</a></code> | <code>*f64</code> | Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | The limit on the minimum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.secretEnvironmentVariables">SecretEnvironmentVariables</a></code> | <code>interface{}</code> | secret_environment_variables block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.secretVolumes">SecretVolumes</a></code> | <code>interface{}</code> | secret_volumes block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.service">Service</a></code> | <code>*string</code> | Name of the service associated with a Function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The email of the service account for this function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | The function execution timeout. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.vpcConnector">VpcConnector</a></code> | <code>*string</code> | The Serverless VPC Access connector that this cloud function can connect to. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.vpcConnectorEgressSettings">VpcConnectorEgressSettings</a></code> | <code>*string</code> | Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"]. |

---

##### `AllTrafficOnLatestRevision`<sup>Optional</sup> <a name="AllTrafficOnLatestRevision" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.allTrafficOnLatestRevision"></a>

```go
AllTrafficOnLatestRevision interface{}
```

- *Type:* interface{}

Whether 100% of traffic is routed to the latest revision. Defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#all_traffic_on_latest_revision Cloudfunctions2Function#all_traffic_on_latest_revision}

---

##### `AvailableCpu`<sup>Optional</sup> <a name="AvailableCpu" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.availableCpu"></a>

```go
AvailableCpu *string
```

- *Type:* *string

The number of CPUs used in a single container instance. Default value is calculated from available memory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#available_cpu Cloudfunctions2Function#available_cpu}

---

##### `AvailableMemory`<sup>Optional</sup> <a name="AvailableMemory" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.availableMemory"></a>

```go
AvailableMemory *string
```

- *Type:* *string

The amount of memory available for a function.

Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
supplied the value is interpreted as bytes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#available_memory Cloudfunctions2Function#available_memory}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Environment variables that shall be available during function execution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#environment_variables Cloudfunctions2Function#environment_variables}

---

##### `IngressSettings`<sup>Optional</sup> <a name="IngressSettings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.ingressSettings"></a>

```go
IngressSettings *string
```

- *Type:* *string

Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#ingress_settings Cloudfunctions2Function#ingress_settings}

---

##### `MaxInstanceCount`<sup>Optional</sup> <a name="MaxInstanceCount" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.maxInstanceCount"></a>

```go
MaxInstanceCount *f64
```

- *Type:* *f64

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#max_instance_count Cloudfunctions2Function#max_instance_count}

---

##### `MaxInstanceRequestConcurrency`<sup>Optional</sup> <a name="MaxInstanceRequestConcurrency" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.maxInstanceRequestConcurrency"></a>

```go
MaxInstanceRequestConcurrency *f64
```

- *Type:* *f64

Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#max_instance_request_concurrency Cloudfunctions2Function#max_instance_request_concurrency}

---

##### `MinInstanceCount`<sup>Optional</sup> <a name="MinInstanceCount" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.minInstanceCount"></a>

```go
MinInstanceCount *f64
```

- *Type:* *f64

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#min_instance_count Cloudfunctions2Function#min_instance_count}

---

##### `SecretEnvironmentVariables`<sup>Optional</sup> <a name="SecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.secretEnvironmentVariables"></a>

```go
SecretEnvironmentVariables interface{}
```

- *Type:* interface{}

secret_environment_variables block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#secret_environment_variables Cloudfunctions2Function#secret_environment_variables}

---

##### `SecretVolumes`<sup>Optional</sup> <a name="SecretVolumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.secretVolumes"></a>

```go
SecretVolumes interface{}
```

- *Type:* interface{}

secret_volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#secret_volumes Cloudfunctions2Function#secret_volumes}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Name of the service associated with a Function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#service Cloudfunctions2Function#service}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The email of the service account for this function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#service_account_email Cloudfunctions2Function#service_account_email}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

The function execution timeout.

Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#timeout_seconds Cloudfunctions2Function#timeout_seconds}

---

##### `VpcConnector`<sup>Optional</sup> <a name="VpcConnector" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.vpcConnector"></a>

```go
VpcConnector *string
```

- *Type:* *string

The Serverless VPC Access connector that this cloud function can connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#vpc_connector Cloudfunctions2Function#vpc_connector}

---

##### `VpcConnectorEgressSettings`<sup>Optional</sup> <a name="VpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.vpcConnectorEgressSettings"></a>

```go
VpcConnectorEgressSettings *string
```

- *Type:* *string

Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#vpc_connector_egress_settings Cloudfunctions2Function#vpc_connector_egress_settings}

---

### Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables <a name="Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

&cloudfunctions2function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables {
	Key: *string,
	ProjectId: *string,
	Secret: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.key">Key</a></code> | <code>*string</code> | Name of the environment variable. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.projectId">ProjectId</a></code> | <code>*string</code> | Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.secret">Secret</a></code> | <code>*string</code> | Name of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.version">Version</a></code> | <code>*string</code> | Version of the secret (version number or the string 'latest'). |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.key"></a>

```go
Key *string
```

- *Type:* *string

Name of the environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#key Cloudfunctions2Function#key}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret.

If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Name of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#secret Cloudfunctions2Function#secret}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the secret (version number or the string 'latest').

It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#version Cloudfunctions2Function#version}

---

### Cloudfunctions2FunctionServiceConfigSecretVolumes <a name="Cloudfunctions2FunctionServiceConfigSecretVolumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

&cloudfunctions2function.Cloudfunctions2FunctionServiceConfigSecretVolumes {
	MountPath: *string,
	ProjectId: *string,
	Secret: *string,
	Versions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.mountPath">MountPath</a></code> | <code>*string</code> | The path within the container to mount the secret volume. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.projectId">ProjectId</a></code> | <code>*string</code> | Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.secret">Secret</a></code> | <code>*string</code> | Name of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.versions">Versions</a></code> | <code>interface{}</code> | versions block. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

The path within the container to mount the secret volume.

For example, setting the mountPath as /etc/secrets would mount the secret value files under the /etc/secrets directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#mount_path Cloudfunctions2Function#mount_path}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret.

If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Name of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#secret Cloudfunctions2Function#secret}

---

##### `Versions`<sup>Optional</sup> <a name="Versions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.versions"></a>

```go
Versions interface{}
```

- *Type:* interface{}

versions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#versions Cloudfunctions2Function#versions}

---

### Cloudfunctions2FunctionServiceConfigSecretVolumesVersions <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesVersions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

&cloudfunctions2function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions {
	Path: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.path">Path</a></code> | <code>*string</code> | Relative path of the file under the mount path where the secret value for this version will be fetched and made available. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.version">Version</a></code> | <code>*string</code> | Version of the secret (version number or the string 'latest'). |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.path"></a>

```go
Path *string
```

- *Type:* *string

Relative path of the file under the mount path where the secret value for this version will be fetched and made available.

For example, setting the mountPath as '/etc/secrets' and path as secret_foo would mount the secret value file at /etc/secrets/secret_foo.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#path Cloudfunctions2Function#path}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the secret (version number or the string 'latest').

It is preferable to use latest version with secret volumes as secret value changes are reflected immediately.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#version Cloudfunctions2Function#version}

---

### Cloudfunctions2FunctionTimeouts <a name="Cloudfunctions2FunctionTimeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

&cloudfunctions2function.Cloudfunctions2FunctionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#create Cloudfunctions2Function#create}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#delete Cloudfunctions2Function#delete}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#update Cloudfunctions2Function#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#create Cloudfunctions2Function#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#delete Cloudfunctions2Function#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function#update Cloudfunctions2Function#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudfunctions2FunctionBuildConfigOutputReference <a name="Cloudfunctions2FunctionBuildConfigOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionBuildConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudfunctions2FunctionBuildConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetDockerRepository">ResetDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetWorkerPool">ResetWorkerPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.putSource"></a>

```go
func PutSource(value Cloudfunctions2FunctionBuildConfigSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a>

---

##### `ResetDockerRepository` <a name="ResetDockerRepository" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetDockerRepository"></a>

```go
func ResetDockerRepository()
```

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetEntryPoint"></a>

```go
func ResetEntryPoint()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetRuntime"></a>

```go
func ResetRuntime()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetWorkerPool` <a name="ResetWorkerPool" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetWorkerPool"></a>

```go
func ResetWorkerPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepositoryInput">DockerRepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.entryPointInput">EntryPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.workerPoolInput">WorkerPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository">DockerRepository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint">EntryPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.workerPool">WorkerPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute"></a>

```go
func BuildAttribute() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.source"></a>

```go
func Source() Cloudfunctions2FunctionBuildConfigSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceOutputReference</a>

---

##### `DockerRepositoryInput`<sup>Optional</sup> <a name="DockerRepositoryInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepositoryInput"></a>

```go
func DockerRepositoryInput() *string
```

- *Type:* *string

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.entryPointInput"></a>

```go
func EntryPointInput() *string
```

- *Type:* *string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.sourceInput"></a>

```go
func SourceInput() Cloudfunctions2FunctionBuildConfigSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a>

---

##### `WorkerPoolInput`<sup>Optional</sup> <a name="WorkerPoolInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.workerPoolInput"></a>

```go
func WorkerPoolInput() *string
```

- *Type:* *string

---

##### `DockerRepository`<sup>Required</sup> <a name="DockerRepository" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository"></a>

```go
func DockerRepository() *string
```

- *Type:* *string

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint"></a>

```go
func EntryPoint() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.workerPool"></a>

```go
func WorkerPool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudfunctions2FunctionBuildConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

---


### Cloudfunctions2FunctionBuildConfigSourceOutputReference <a name="Cloudfunctions2FunctionBuildConfigSourceOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionBuildConfigSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudfunctions2FunctionBuildConfigSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource">PutRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource">PutStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resetRepoSource">ResetRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resetStorageSource">ResetStorageSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepoSource` <a name="PutRepoSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource"></a>

```go
func PutRepoSource(value Cloudfunctions2FunctionBuildConfigSourceRepoSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---

##### `PutStorageSource` <a name="PutStorageSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource"></a>

```go
func PutStorageSource(value Cloudfunctions2FunctionBuildConfigSourceStorageSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---

##### `ResetRepoSource` <a name="ResetRepoSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resetRepoSource"></a>

```go
func ResetRepoSource()
```

##### `ResetStorageSource` <a name="ResetStorageSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resetStorageSource"></a>

```go
func ResetStorageSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource">RepoSource</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource">StorageSource</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSourceInput">RepoSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSourceInput">StorageSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepoSource`<sup>Required</sup> <a name="RepoSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource"></a>

```go
func RepoSource() Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference</a>

---

##### `StorageSource`<sup>Required</sup> <a name="StorageSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource"></a>

```go
func StorageSource() Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference</a>

---

##### `RepoSourceInput`<sup>Optional</sup> <a name="RepoSourceInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSourceInput"></a>

```go
func RepoSourceInput() Cloudfunctions2FunctionBuildConfigSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---

##### `StorageSourceInput`<sup>Optional</sup> <a name="StorageSourceInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSourceInput"></a>

```go
func StorageSourceInput() Cloudfunctions2FunctionBuildConfigSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudfunctions2FunctionBuildConfigSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a>

---


### Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference <a name="Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetBranchName">ResetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetDir">ResetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetRepoName">ResetRepoName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetTagName">ResetTagName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchName` <a name="ResetBranchName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetBranchName"></a>

```go
func ResetBranchName()
```

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetCommitSha"></a>

```go
func ResetCommitSha()
```

##### `ResetDir` <a name="ResetDir" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetDir"></a>

```go
func ResetDir()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetInvertRegex"></a>

```go
func ResetInvertRegex()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetRepoName` <a name="ResetRepoName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetRepoName"></a>

```go
func ResetRepoName()
```

##### `ResetTagName` <a name="ResetTagName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetTagName"></a>

```go
func ResetTagName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchNameInput">BranchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dirInput">DirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoNameInput">RepoNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagNameInput">TagNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir">Dir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex">InvertRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName">RepoName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName">TagName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchNameInput"></a>

```go
func BranchNameInput() *string
```

- *Type:* *string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitShaInput"></a>

```go
func CommitShaInput() *string
```

- *Type:* *string

---

##### `DirInput`<sup>Optional</sup> <a name="DirInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dirInput"></a>

```go
func DirInput() *string
```

- *Type:* *string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegexInput"></a>

```go
func InvertRegexInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RepoNameInput`<sup>Optional</sup> <a name="RepoNameInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoNameInput"></a>

```go
func RepoNameInput() *string
```

- *Type:* *string

---

##### `TagNameInput`<sup>Optional</sup> <a name="TagNameInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagNameInput"></a>

```go
func TagNameInput() *string
```

- *Type:* *string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir"></a>

```go
func Dir() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex"></a>

```go
func InvertRegex() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName"></a>

```go
func RepoName() *string
```

- *Type:* *string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName"></a>

```go
func TagName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudfunctions2FunctionBuildConfigSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---


### Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference <a name="Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetGeneration"></a>

```go
func ResetGeneration()
```

##### `ResetObject` <a name="ResetObject" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetObject"></a>

```go
func ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generationInput">GenerationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generationInput"></a>

```go
func GenerationInput() *f64
```

- *Type:* *f64

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudfunctions2FunctionBuildConfigSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---


### Cloudfunctions2FunctionEventTriggerEventFiltersList <a name="Cloudfunctions2FunctionEventTriggerEventFiltersList" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionEventTriggerEventFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Cloudfunctions2FunctionEventTriggerEventFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.get"></a>

```go
func Get(index *f64) Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference <a name="Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionEventTriggerEventFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Cloudfunctions2FunctionEventTriggerOutputReference <a name="Cloudfunctions2FunctionEventTriggerOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionEventTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudfunctions2FunctionEventTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.putEventFilters">PutEventFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetEventFilters">ResetEventFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetPubsubTopic">ResetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetTriggerRegion">ResetTriggerRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEventFilters` <a name="PutEventFilters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.putEventFilters"></a>

```go
func PutEventFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.putEventFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEventFilters` <a name="ResetEventFilters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetEventFilters"></a>

```go
func ResetEventFilters()
```

##### `ResetEventType` <a name="ResetEventType" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetEventType"></a>

```go
func ResetEventType()
```

##### `ResetPubsubTopic` <a name="ResetPubsubTopic" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetPubsubTopic"></a>

```go
func ResetPubsubTopic()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetRetryPolicy"></a>

```go
func ResetRetryPolicy()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetTriggerRegion` <a name="ResetTriggerRegion" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetTriggerRegion"></a>

```go
func ResetTriggerRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters">EventFilters</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList">Cloudfunctions2FunctionEventTriggerEventFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.trigger">Trigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventFiltersInput">EventFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicyInput">RetryPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegionInput">TriggerRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion">TriggerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventFilters`<sup>Required</sup> <a name="EventFilters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters"></a>

```go
func EventFilters() Cloudfunctions2FunctionEventTriggerEventFiltersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList">Cloudfunctions2FunctionEventTriggerEventFiltersList</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.trigger"></a>

```go
func Trigger() *string
```

- *Type:* *string

---

##### `EventFiltersInput`<sup>Optional</sup> <a name="EventFiltersInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventFiltersInput"></a>

```go
func EventFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopicInput"></a>

```go
func PubsubTopicInput() *string
```

- *Type:* *string

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicyInput"></a>

```go
func RetryPolicyInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `TriggerRegionInput`<sup>Optional</sup> <a name="TriggerRegionInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegionInput"></a>

```go
func TriggerRegionInput() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic"></a>

```go
func PubsubTopic() *string
```

- *Type:* *string

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy"></a>

```go
func RetryPolicy() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `TriggerRegion`<sup>Required</sup> <a name="TriggerRegion" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion"></a>

```go
func TriggerRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudfunctions2FunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

---


### Cloudfunctions2FunctionServiceConfigOutputReference <a name="Cloudfunctions2FunctionServiceConfigOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionServiceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudfunctions2FunctionServiceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretEnvironmentVariables">PutSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretVolumes">PutSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAllTrafficOnLatestRevision">ResetAllTrafficOnLatestRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAvailableCpu">ResetAvailableCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAvailableMemory">ResetAvailableMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetIngressSettings">ResetIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceCount">ResetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceRequestConcurrency">ResetMaxInstanceRequestConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMinInstanceCount">ResetMinInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetSecretEnvironmentVariables">ResetSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetSecretVolumes">ResetSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnector">ResetVpcConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnectorEgressSettings">ResetVpcConnectorEgressSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretEnvironmentVariables` <a name="PutSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretEnvironmentVariables"></a>

```go
func PutSecretEnvironmentVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretEnvironmentVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecretVolumes` <a name="PutSecretVolumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretVolumes"></a>

```go
func PutSecretVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllTrafficOnLatestRevision` <a name="ResetAllTrafficOnLatestRevision" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAllTrafficOnLatestRevision"></a>

```go
func ResetAllTrafficOnLatestRevision()
```

##### `ResetAvailableCpu` <a name="ResetAvailableCpu" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAvailableCpu"></a>

```go
func ResetAvailableCpu()
```

##### `ResetAvailableMemory` <a name="ResetAvailableMemory" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAvailableMemory"></a>

```go
func ResetAvailableMemory()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetIngressSettings` <a name="ResetIngressSettings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetIngressSettings"></a>

```go
func ResetIngressSettings()
```

##### `ResetMaxInstanceCount` <a name="ResetMaxInstanceCount" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceCount"></a>

```go
func ResetMaxInstanceCount()
```

##### `ResetMaxInstanceRequestConcurrency` <a name="ResetMaxInstanceRequestConcurrency" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceRequestConcurrency"></a>

```go
func ResetMaxInstanceRequestConcurrency()
```

##### `ResetMinInstanceCount` <a name="ResetMinInstanceCount" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMinInstanceCount"></a>

```go
func ResetMinInstanceCount()
```

##### `ResetSecretEnvironmentVariables` <a name="ResetSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetSecretEnvironmentVariables"></a>

```go
func ResetSecretEnvironmentVariables()
```

##### `ResetSecretVolumes` <a name="ResetSecretVolumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetSecretVolumes"></a>

```go
func ResetSecretVolumes()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```

##### `ResetVpcConnector` <a name="ResetVpcConnector" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnector"></a>

```go
func ResetVpcConnector()
```

##### `ResetVpcConnectorEgressSettings` <a name="ResetVpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnectorEgressSettings"></a>

```go
func ResetVpcConnectorEgressSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri">GcfUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables">SecretEnvironmentVariables</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes">SecretVolumes</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList">Cloudfunctions2FunctionServiceConfigSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevisionInput">AllTrafficOnLatestRevisionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableCpuInput">AvailableCpuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableMemoryInput">AvailableMemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettingsInput">IngressSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrencyInput">MaxInstanceRequestConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariablesInput">SecretEnvironmentVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumesInput">SecretVolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettingsInput">VpcConnectorEgressSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorInput">VpcConnectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision">AllTrafficOnLatestRevision</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu">AvailableCpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory">AvailableMemory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings">IngressSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency">MaxInstanceRequestConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector">VpcConnector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings">VpcConnectorEgressSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcfUri`<sup>Required</sup> <a name="GcfUri" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri"></a>

```go
func GcfUri() *string
```

- *Type:* *string

---

##### `SecretEnvironmentVariables`<sup>Required</sup> <a name="SecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables"></a>

```go
func SecretEnvironmentVariables() Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a>

---

##### `SecretVolumes`<sup>Required</sup> <a name="SecretVolumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes"></a>

```go
func SecretVolumes() Cloudfunctions2FunctionServiceConfigSecretVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList">Cloudfunctions2FunctionServiceConfigSecretVolumesList</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `AllTrafficOnLatestRevisionInput`<sup>Optional</sup> <a name="AllTrafficOnLatestRevisionInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevisionInput"></a>

```go
func AllTrafficOnLatestRevisionInput() interface{}
```

- *Type:* interface{}

---

##### `AvailableCpuInput`<sup>Optional</sup> <a name="AvailableCpuInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableCpuInput"></a>

```go
func AvailableCpuInput() *string
```

- *Type:* *string

---

##### `AvailableMemoryInput`<sup>Optional</sup> <a name="AvailableMemoryInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableMemoryInput"></a>

```go
func AvailableMemoryInput() *string
```

- *Type:* *string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IngressSettingsInput`<sup>Optional</sup> <a name="IngressSettingsInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettingsInput"></a>

```go
func IngressSettingsInput() *string
```

- *Type:* *string

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCountInput"></a>

```go
func MaxInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MaxInstanceRequestConcurrencyInput`<sup>Optional</sup> <a name="MaxInstanceRequestConcurrencyInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrencyInput"></a>

```go
func MaxInstanceRequestConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCountInput"></a>

```go
func MinInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `SecretEnvironmentVariablesInput`<sup>Optional</sup> <a name="SecretEnvironmentVariablesInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariablesInput"></a>

```go
func SecretEnvironmentVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `SecretVolumesInput`<sup>Optional</sup> <a name="SecretVolumesInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumesInput"></a>

```go
func SecretVolumesInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `VpcConnectorEgressSettingsInput`<sup>Optional</sup> <a name="VpcConnectorEgressSettingsInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettingsInput"></a>

```go
func VpcConnectorEgressSettingsInput() *string
```

- *Type:* *string

---

##### `VpcConnectorInput`<sup>Optional</sup> <a name="VpcConnectorInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorInput"></a>

```go
func VpcConnectorInput() *string
```

- *Type:* *string

---

##### `AllTrafficOnLatestRevision`<sup>Required</sup> <a name="AllTrafficOnLatestRevision" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision"></a>

```go
func AllTrafficOnLatestRevision() interface{}
```

- *Type:* interface{}

---

##### `AvailableCpu`<sup>Required</sup> <a name="AvailableCpu" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu"></a>

```go
func AvailableCpu() *string
```

- *Type:* *string

---

##### `AvailableMemory`<sup>Required</sup> <a name="AvailableMemory" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory"></a>

```go
func AvailableMemory() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IngressSettings`<sup>Required</sup> <a name="IngressSettings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings"></a>

```go
func IngressSettings() *string
```

- *Type:* *string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `MaxInstanceRequestConcurrency`<sup>Required</sup> <a name="MaxInstanceRequestConcurrency" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency"></a>

```go
func MaxInstanceRequestConcurrency() *f64
```

- *Type:* *f64

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `VpcConnector`<sup>Required</sup> <a name="VpcConnector" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector"></a>

```go
func VpcConnector() *string
```

- *Type:* *string

---

##### `VpcConnectorEgressSettings`<sup>Required</sup> <a name="VpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings"></a>

```go
func VpcConnectorEgressSettings() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudfunctions2FunctionServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

---


### Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList <a name="Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get"></a>

```go
func Get(index *f64) Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference <a name="Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Cloudfunctions2FunctionServiceConfigSecretVolumesList <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesList" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionServiceConfigSecretVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Cloudfunctions2FunctionServiceConfigSecretVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.get"></a>

```go
func Get(index *f64) Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.putVersions">PutVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resetVersions">ResetVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVersions` <a name="PutVersions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.putVersions"></a>

```go
func PutVersions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.putVersions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetVersions` <a name="ResetVersions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resetVersions"></a>

```go
func ResetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versionsInput">VersionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions"></a>

```go
func Versions() Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a>

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versionsInput"></a>

```go
func VersionsInput() interface{}
```

- *Type:* interface{}

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get"></a>

```go
func Get(index *f64) Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Cloudfunctions2FunctionTimeoutsOutputReference <a name="Cloudfunctions2FunctionTimeoutsOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2function"

cloudfunctions2function.NewCloudfunctions2FunctionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudfunctions2FunctionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



