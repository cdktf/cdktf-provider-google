# `appEngineApplicationUrlDispatchRules` Submodule <a name="`appEngineApplicationUrlDispatchRules` Submodule" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineApplicationUrlDispatchRules <a name="AppEngineApplicationUrlDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineapplicationurldispatchrules"

appengineapplicationurldispatchrules.NewAppEngineApplicationUrlDispatchRules(scope Construct, id *string, config AppEngineApplicationUrlDispatchRulesConfig) AppEngineApplicationUrlDispatchRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig">AppEngineApplicationUrlDispatchRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig">AppEngineApplicationUrlDispatchRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules">PutDispatchRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDispatchRules` <a name="PutDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules"></a>

```go
func PutDispatchRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts"></a>

```go
func PutTimeouts(value AppEngineApplicationUrlDispatchRulesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineapplicationurldispatchrules"

appengineapplicationurldispatchrules.AppEngineApplicationUrlDispatchRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineapplicationurldispatchrules"

appengineapplicationurldispatchrules.AppEngineApplicationUrlDispatchRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineapplicationurldispatchrules"

appengineapplicationurldispatchrules.AppEngineApplicationUrlDispatchRules_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRules">DispatchRules</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList">AppEngineApplicationUrlDispatchRulesDispatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRulesInput">DispatchRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DispatchRules`<sup>Required</sup> <a name="DispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRules"></a>

```go
func DispatchRules() AppEngineApplicationUrlDispatchRulesDispatchRulesList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList">AppEngineApplicationUrlDispatchRulesDispatchRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeouts"></a>

```go
func Timeouts() AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a>

---

##### `DispatchRulesInput`<sup>Optional</sup> <a name="DispatchRulesInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRulesInput"></a>

```go
func DispatchRulesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineApplicationUrlDispatchRulesConfig <a name="AppEngineApplicationUrlDispatchRulesConfig" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineapplicationurldispatchrules"

&appengineapplicationurldispatchrules.AppEngineApplicationUrlDispatchRulesConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DispatchRules: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules">DispatchRules</a></code> | <code>interface{}</code> | dispatch_rules block. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DispatchRules`<sup>Required</sup> <a name="DispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules"></a>

```go
DispatchRules interface{}
```

- *Type:* interface{}

dispatch_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#dispatch_rules AppEngineApplicationUrlDispatchRules#dispatch_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.timeouts"></a>

```go
Timeouts AppEngineApplicationUrlDispatchRulesTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#timeouts AppEngineApplicationUrlDispatchRules#timeouts}

---

### AppEngineApplicationUrlDispatchRulesDispatchRules <a name="AppEngineApplicationUrlDispatchRulesDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineapplicationurldispatchrules"

&appengineapplicationurldispatchrules.AppEngineApplicationUrlDispatchRulesDispatchRules {
	Path: *string,
	Service: *string,
	Domain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.path">Path</a></code> | <code>*string</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.service">Service</a></code> | <code>*string</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.domain">Domain</a></code> | <code>*string</code> | Domain name to match against. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.path"></a>

```go
Path *string
```

- *Type:* *string

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#path AppEngineApplicationUrlDispatchRules#path}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.service"></a>

```go
Service *string
```

- *Type:* *string

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#service AppEngineApplicationUrlDispatchRules#service}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Domain name to match against.

The wildcard "*" is supported if specified before a period: "*.".
Defaults to matching all domains: "*".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#domain AppEngineApplicationUrlDispatchRules#domain}

---

### AppEngineApplicationUrlDispatchRulesTimeouts <a name="AppEngineApplicationUrlDispatchRulesTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineapplicationurldispatchrules"

&appengineapplicationurldispatchrules.AppEngineApplicationUrlDispatchRulesTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineApplicationUrlDispatchRulesDispatchRulesList <a name="AppEngineApplicationUrlDispatchRulesDispatchRulesList" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineapplicationurldispatchrules"

appengineapplicationurldispatchrules.NewAppEngineApplicationUrlDispatchRulesDispatchRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppEngineApplicationUrlDispatchRulesDispatchRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get"></a>

```go
func Get(index *f64) AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference <a name="AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineapplicationurldispatchrules"

appengineapplicationurldispatchrules.NewAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain"></a>

```go
func ResetDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference <a name="AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineapplicationurldispatchrules"

appengineapplicationurldispatchrules.NewAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



