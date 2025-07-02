# `apigeeSecurityMonitoringCondition` Submodule <a name="`apigeeSecurityMonitoringCondition` Submodule" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityMonitoringCondition <a name="ApigeeSecurityMonitoringCondition" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition google_apigee_security_monitoring_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecuritymonitoringcondition"

apigeesecuritymonitoringcondition.NewApigeeSecurityMonitoringCondition(scope Construct, id *string, config ApigeeSecurityMonitoringConditionConfig) ApigeeSecurityMonitoringCondition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig">ApigeeSecurityMonitoringConditionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig">ApigeeSecurityMonitoringConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putIncludeAllResources">PutIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetIncludeAllResources">ResetIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIncludeAllResources` <a name="PutIncludeAllResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putIncludeAllResources"></a>

```go
func PutIncludeAllResources(value ApigeeSecurityMonitoringConditionIncludeAllResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putIncludeAllResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeSecurityMonitoringConditionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeAllResources` <a name="ResetIncludeAllResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetIncludeAllResources"></a>

```go
func ResetIncludeAllResources()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeSecurityMonitoringCondition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecuritymonitoringcondition"

apigeesecuritymonitoringcondition.ApigeeSecurityMonitoringCondition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecuritymonitoringcondition"

apigeesecuritymonitoringcondition.ApigeeSecurityMonitoringCondition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecuritymonitoringcondition"

apigeesecuritymonitoringcondition.ApigeeSecurityMonitoringCondition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecuritymonitoringcondition"

apigeesecuritymonitoringcondition.ApigeeSecurityMonitoringCondition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigeeSecurityMonitoringCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigeeSecurityMonitoringCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigeeSecurityMonitoringCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityMonitoringCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.includeAllResources">IncludeAllResources</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference">ApigeeSecurityMonitoringConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.totalDeployedResources">TotalDeployedResources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.totalMonitoredResources">TotalMonitoredResources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.conditionIdInput">ConditionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.includeAllResourcesInput">IncludeAllResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.conditionId">ConditionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `IncludeAllResources`<sup>Required</sup> <a name="IncludeAllResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.includeAllResources"></a>

```go
func IncludeAllResources() ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.timeouts"></a>

```go
func Timeouts() ApigeeSecurityMonitoringConditionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference">ApigeeSecurityMonitoringConditionTimeoutsOutputReference</a>

---

##### `TotalDeployedResources`<sup>Required</sup> <a name="TotalDeployedResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.totalDeployedResources"></a>

```go
func TotalDeployedResources() *f64
```

- *Type:* *f64

---

##### `TotalMonitoredResources`<sup>Required</sup> <a name="TotalMonitoredResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.totalMonitoredResources"></a>

```go
func TotalMonitoredResources() *f64
```

- *Type:* *f64

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ConditionIdInput`<sup>Optional</sup> <a name="ConditionIdInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.conditionIdInput"></a>

```go
func ConditionIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeAllResourcesInput`<sup>Optional</sup> <a name="IncludeAllResourcesInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.includeAllResourcesInput"></a>

```go
func IncludeAllResourcesInput() ApigeeSecurityMonitoringConditionIncludeAllResources
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionId`<sup>Required</sup> <a name="ConditionId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.conditionId"></a>

```go
func ConditionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityMonitoringConditionConfig <a name="ApigeeSecurityMonitoringConditionConfig" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecuritymonitoringcondition"

&apigeesecuritymonitoringcondition.ApigeeSecurityMonitoringConditionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConditionId: *string,
	OrgId: *string,
	Profile: *string,
	Scope: *string,
	Id: *string,
	IncludeAllResources: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.conditionId">ConditionId</a></code> | <code>*string</code> | Resource ID of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.profile">Profile</a></code> | <code>*string</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.scope">Scope</a></code> | <code>*string</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#id ApigeeSecurityMonitoringCondition#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.includeAllResources">IncludeAllResources</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | include_all_resources block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConditionId`<sup>Required</sup> <a name="ConditionId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.conditionId"></a>

```go
ConditionId *string
```

- *Type:* *string

Resource ID of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#condition_id ApigeeSecurityMonitoringCondition#condition_id}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#org_id ApigeeSecurityMonitoringCondition#org_id}

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#profile ApigeeSecurityMonitoringCondition#profile}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#scope ApigeeSecurityMonitoringCondition#scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#id ApigeeSecurityMonitoringCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeAllResources`<sup>Optional</sup> <a name="IncludeAllResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.includeAllResources"></a>

```go
IncludeAllResources ApigeeSecurityMonitoringConditionIncludeAllResources
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a>

include_all_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#include_all_resources ApigeeSecurityMonitoringCondition#include_all_resources}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.timeouts"></a>

```go
Timeouts ApigeeSecurityMonitoringConditionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#timeouts ApigeeSecurityMonitoringCondition#timeouts}

---

### ApigeeSecurityMonitoringConditionIncludeAllResources <a name="ApigeeSecurityMonitoringConditionIncludeAllResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecuritymonitoringcondition"

&apigeesecuritymonitoringcondition.ApigeeSecurityMonitoringConditionIncludeAllResources {

}
```


### ApigeeSecurityMonitoringConditionTimeouts <a name="ApigeeSecurityMonitoringConditionTimeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecuritymonitoringcondition"

&apigeesecuritymonitoringcondition.ApigeeSecurityMonitoringConditionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#create ApigeeSecurityMonitoringCondition#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#delete ApigeeSecurityMonitoringCondition#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#update ApigeeSecurityMonitoringCondition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#create ApigeeSecurityMonitoringCondition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#delete ApigeeSecurityMonitoringCondition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/apigee_security_monitoring_condition#update ApigeeSecurityMonitoringCondition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference <a name="ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecuritymonitoringcondition"

apigeesecuritymonitoringcondition.NewApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeSecurityMonitoringConditionIncludeAllResources
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a>

---


### ApigeeSecurityMonitoringConditionTimeoutsOutputReference <a name="ApigeeSecurityMonitoringConditionTimeoutsOutputReference" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecuritymonitoringcondition"

apigeesecuritymonitoringcondition.NewApigeeSecurityMonitoringConditionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeSecurityMonitoringConditionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



