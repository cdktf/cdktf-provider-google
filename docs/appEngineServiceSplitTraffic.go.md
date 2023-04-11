# `appEngineServiceSplitTraffic` Submodule <a name="`appEngineServiceSplitTraffic` Submodule" id="@cdktf/provider-google.appEngineServiceSplitTraffic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineServiceSplitTraffic <a name="AppEngineServiceSplitTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic google_app_engine_service_split_traffic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineservicesplittraffic"

appengineservicesplittraffic.NewAppEngineServiceSplitTraffic(scope Construct, id *string, config AppEngineServiceSplitTrafficConfig) AppEngineServiceSplitTraffic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig">AppEngineServiceSplitTrafficConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig">AppEngineServiceSplitTrafficConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit">PutSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetMigrateTraffic">ResetMigrateTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSplit` <a name="PutSplit" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit"></a>

```go
func PutSplit(value AppEngineServiceSplitTrafficSplit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts"></a>

```go
func PutTimeouts(value AppEngineServiceSplitTrafficTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetId"></a>

```go
func ResetId()
```

##### `ResetMigrateTraffic` <a name="ResetMigrateTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetMigrateTraffic"></a>

```go
func ResetMigrateTraffic()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineservicesplittraffic"

appengineservicesplittraffic.AppEngineServiceSplitTraffic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineservicesplittraffic"

appengineservicesplittraffic.AppEngineServiceSplitTraffic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineservicesplittraffic"

appengineservicesplittraffic.AppEngineServiceSplitTraffic_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.split">Split</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference">AppEngineServiceSplitTrafficSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference">AppEngineServiceSplitTrafficTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTrafficInput">MigrateTrafficInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.splitInput">SplitInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTraffic">MigrateTraffic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Split`<sup>Required</sup> <a name="Split" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.split"></a>

```go
func Split() AppEngineServiceSplitTrafficSplitOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference">AppEngineServiceSplitTrafficSplitOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeouts"></a>

```go
func Timeouts() AppEngineServiceSplitTrafficTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference">AppEngineServiceSplitTrafficTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MigrateTrafficInput`<sup>Optional</sup> <a name="MigrateTrafficInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTrafficInput"></a>

```go
func MigrateTrafficInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `SplitInput`<sup>Optional</sup> <a name="SplitInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.splitInput"></a>

```go
func SplitInput() AppEngineServiceSplitTrafficSplit
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MigrateTraffic`<sup>Required</sup> <a name="MigrateTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTraffic"></a>

```go
func MigrateTraffic() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineServiceSplitTrafficConfig <a name="AppEngineServiceSplitTrafficConfig" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineservicesplittraffic"

&appengineservicesplittraffic.AppEngineServiceSplitTrafficConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Service: *string,
	Split: github.com/cdktf/cdktf-provider-google-go/google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit,
	Id: *string,
	MigrateTraffic: interface{},
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.service">Service</a></code> | <code>*string</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.split">Split</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | split block. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.migrateTraffic">MigrateTraffic</a></code> | <code>interface{}</code> | If set to true traffic will be migrated to this version. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#service AppEngineServiceSplitTraffic#service}

---

##### `Split`<sup>Required</sup> <a name="Split" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.split"></a>

```go
Split AppEngineServiceSplitTrafficSplit
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

split block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#split AppEngineServiceSplitTraffic#split}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MigrateTraffic`<sup>Optional</sup> <a name="MigrateTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.migrateTraffic"></a>

```go
MigrateTraffic interface{}
```

- *Type:* interface{}

If set to true traffic will be migrated to this version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#migrate_traffic AppEngineServiceSplitTraffic#migrate_traffic}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.timeouts"></a>

```go
Timeouts AppEngineServiceSplitTrafficTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#timeouts AppEngineServiceSplitTraffic#timeouts}

---

### AppEngineServiceSplitTrafficSplit <a name="AppEngineServiceSplitTrafficSplit" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineservicesplittraffic"

&appengineservicesplittraffic.AppEngineServiceSplitTrafficSplit {
	Allocations: *map[string]*string,
	ShardBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.allocations">Allocations</a></code> | <code>*map[string]*string</code> | Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.shardBy">ShardBy</a></code> | <code>*string</code> | Mechanism used to determine which version a request is sent to. |

---

##### `Allocations`<sup>Required</sup> <a name="Allocations" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.allocations"></a>

```go
Allocations *map[string]*string
```

- *Type:* *map[string]*string

Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#allocations AppEngineServiceSplitTraffic#allocations}

---

##### `ShardBy`<sup>Optional</sup> <a name="ShardBy" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.shardBy"></a>

```go
ShardBy *string
```

- *Type:* *string

Mechanism used to determine which version a request is sent to.

The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#shard_by AppEngineServiceSplitTraffic#shard_by}

---

### AppEngineServiceSplitTrafficTimeouts <a name="AppEngineServiceSplitTrafficTimeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineservicesplittraffic"

&appengineservicesplittraffic.AppEngineServiceSplitTrafficTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#create AppEngineServiceSplitTraffic#create}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#delete AppEngineServiceSplitTraffic#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#update AppEngineServiceSplitTraffic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#create AppEngineServiceSplitTraffic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#delete AppEngineServiceSplitTraffic#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#update AppEngineServiceSplitTraffic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineServiceSplitTrafficSplitOutputReference <a name="AppEngineServiceSplitTrafficSplitOutputReference" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineservicesplittraffic"

appengineservicesplittraffic.NewAppEngineServiceSplitTrafficSplitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineServiceSplitTrafficSplitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resetShardBy">ResetShardBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetShardBy` <a name="ResetShardBy" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resetShardBy"></a>

```go
func ResetShardBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput">AllocationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput">ShardByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocations">Allocations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardBy">ShardBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationsInput`<sup>Optional</sup> <a name="AllocationsInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput"></a>

```go
func AllocationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ShardByInput`<sup>Optional</sup> <a name="ShardByInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput"></a>

```go
func ShardByInput() *string
```

- *Type:* *string

---

##### `Allocations`<sup>Required</sup> <a name="Allocations" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocations"></a>

```go
func Allocations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ShardBy`<sup>Required</sup> <a name="ShardBy" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardBy"></a>

```go
func ShardBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineServiceSplitTrafficSplit
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---


### AppEngineServiceSplitTrafficTimeoutsOutputReference <a name="AppEngineServiceSplitTrafficTimeoutsOutputReference" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineservicesplittraffic"

appengineservicesplittraffic.NewAppEngineServiceSplitTrafficTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineServiceSplitTrafficTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



